/**
 * Hermes Dashboard - Modal 对话框组件
 * 可复用 UI 组件库
 */

const ModalComponent = {
    // 当前打开的模态框
    currentModal: null,

    /**
     * 显示确认对话框
     */
    confirm(options) {
        const {
            title = '确认操作',
            message = '确定要执行此操作吗？',
            confirmText = '确认',
            cancelText = '取消',
            type = 'warning',
        } = options;
        
        return new Promise((resolve) => {
            const modal = this.create({
                title,
                content: `
                    <div style="text-align: center; padding: 20px 0;">
                        <div style="font-size: 3rem; margin-bottom: 16px;">
                            ${type === 'danger' ? '⚠️' : '❓'}
                        </div>
                        <p style="color: var(--text-secondary); font-size: 1rem;">
                            ${message}
                        </p>
                    </div>
                `,
                footer: `
                    <button class="modal-btn modal-btn-cancel" data-action="cancel">
                        ${cancelText}
                    </button>
                    <button class="modal-btn modal-btn-confirm ${type === 'danger' ? 'modal-btn-danger' : ''}" 
                            data-action="confirm">
                        ${confirmText}
                    </button>
                `,
            });
            
            modal.querySelector('[data-action="confirm"]').addEventListener('click', () => {
                this.close(modal);
                resolve(true);
            });
            
            modal.querySelector('[data-action="cancel"]').addEventListener('click', () => {
                this.close(modal);
                resolve(false);
            });
        });
    },

    /**
     * 显示 alert 对话框
     */
    alert(options) {
        const {
            title = '提示',
            message = '',
            confirmText = '确定',
            type = 'info',
        } = options;
        
        return new Promise((resolve) => {
            const modal = this.create({
                title,
                content: `
                    <div style="text-align: center; padding: 20px 0;">
                        <div style="font-size: 3rem; margin-bottom: 16px;">
                            ${type === 'success' ? '✅' : type === 'error' ? '❌' : 'ℹ️'}
                        </div>
                        <p style="color: var(--text-secondary); font-size: 1rem;">
                            ${message}
                        </p>
                    </div>
                `,
                footer: `
                    <button class="modal-btn modal-btn-primary" data-action="confirm">
                        ${confirmText}
                    </button>
                `,
            });
            
            modal.querySelector('[data-action="confirm"]').addEventListener('click', () => {
                this.close(modal);
                resolve(true);
            });
        });
    },

    /**
     * 显示自定义模态框
     */
    show(options) {
        return this.create(options);
    },

    /**
     * 创建模态框
     */
    create(options) {
        const {
            title = '',
            content = '',
            footer = '',
            size = 'medium',
            closable = true,
        } = options;
        
        const modal = document.createElement('div');
        modal.className = 'modal-overlay';
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.7);
            backdrop-filter: blur(4px);
            z-index: 9998;
            display: flex;
            align-items: center;
            justify-content: center;
            animation: fadeIn 0.2s ease;
        `;
        
        const sizes = {
            small: '400px',
            medium: '560px',
            large: '800px',
            full: '90%',
        };
        
        const modalContent = document.createElement('div');
        modalContent.className = 'modal-content';
        modalContent.style.cssText = `
            background: var(--bg-secondary);
            border: 1px solid var(--border-color);
            border-radius: 16px;
            width: 100%;
            max-width: ${sizes[size]};
            max-height: 90vh;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            animation: slideUp 0.3s ease;
        `;
        
        modalContent.innerHTML = `
            ${title ? `
                <div class="modal-header" style="
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 20px 24px;
                    border-bottom: 1px solid var(--border-color);
                ">
                    <h3 style="margin: 0; font-size: 1.1rem; color: var(--text-primary);">
                        ${title}
                    </h3>
                    ${closable ? `
                        <button class="modal-close" style="
                            background: transparent;
                            border: none;
                            color: var(--text-muted);
                            cursor: pointer;
                            font-size: 1.5rem;
                            padding: 4px;
                            line-height: 1;
                        ">✕</button>
                    ` : ''}
                </div>
            ` : ''}
            <div class="modal-body" style="
                padding: 24px;
                overflow-y: auto;
                flex: 1;
            ">
                ${content}
            </div>
            ${footer ? `
                <div class="modal-footer" style="
                    display: flex;
                    justify-content: flex-end;
                    gap: 12px;
                    padding: 16px 24px;
                    border-top: 1px solid var(--border-color);
                    background: var(--bg-primary);
                ">
                    ${footer}
                </div>
            ` : ''}
        `;
        
        modal.appendChild(modalContent);
        document.body.appendChild(modal);
        
        // 绑定关闭事件
        if (closable) {
            modalContent.querySelector('.modal-close').addEventListener('click', () => {
                this.close(modal);
            });
            
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    this.close(modal);
                }
            });
        }
        
        // ESC 关闭
        const escHandler = (e) => {
            if (e.key === 'Escape') {
                this.close(modal);
                document.removeEventListener('keydown', escHandler);
            }
        };
        document.addEventListener('keydown', escHandler);
        
        this.currentModal = modal;
        return modal;
    },

    /**
     * 关闭模态框
     */
    close(modal) {
        if (!modal) return;
        
        modal.style.animation = 'fadeOut 0.2s ease forwards';
        modal.querySelector('.modal-content').style.animation = 'slideDown 0.3s ease forwards';
        
        setTimeout(() => modal.remove(), 300);
        this.currentModal = null;
    },

    /**
     * 关闭当前模态框
     */
    closeCurrent() {
        if (this.currentModal) {
            this.close(this.currentModal);
        }
    },
};

// 添加动画样式
const modalStyle = document.createElement('style');
modalStyle.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    
    @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
    }
    
    @keyframes slideUp {
        from {
            transform: translateY(20px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }
    
    @keyframes slideDown {
        from {
            transform: translateY(0);
            opacity: 1;
        }
        to {
            transform: translateY(20px);
            opacity: 0;
        }
    }
    
    .modal-btn {
        padding: 10px 20px;
        border-radius: 8px;
        font-size: 0.9rem;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.2s;
        border: none;
    }
    
    .modal-btn-cancel {
        background: var(--bg-tertiary);
        color: var(--text-secondary);
    }
    
    .modal-btn-cancel:hover {
        background: var(--border-color);
        color: var(--text-primary);
    }
    
    .modal-btn-confirm {
        background: var(--primary-gradient);
        color: white;
    }
    
    .modal-btn-confirm:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 30px rgba(99, 102, 241, 0.3);
    }
    
    .modal-btn-danger {
        background: linear-gradient(135deg, #ef4444 0%, #f87171 100%);
    }
    
    .modal-btn-danger:hover {
        box-shadow: 0 10px 30px rgba(239, 68, 68, 0.3);
    }
    
    .modal-btn-primary {
        background: var(--primary-gradient);
        color: white;
        width: 100%;
    }
`;
document.head.appendChild(modalStyle);

window.Modal = ModalComponent;

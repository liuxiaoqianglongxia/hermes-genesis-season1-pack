/**
 * Hermes Dashboard - Toast 通知组件
 * 可复用 UI 组件库
 */

const ToastComponent = {
    // 配置
    config: {
        duration: 3000,
        position: 'top-right',
        maxToasts: 5,
    },

    // 容器
    container: null,

    /**
     * 初始化
     */
    init() {
        this.createContainer();
    },

    /**
     * 创建容器
     */
    createContainer() {
        this.container = document.createElement('div');
        this.container.className = 'toast-container';
        this.container.style.cssText = `
            position: fixed;
            top: 80px;
            right: 20px;
            z-index: 9999;
            display: flex;
            flex-direction: column;
            gap: 10px;
            pointer-events: none;
        `;
        document.body.appendChild(this.container);
    },

    /**
     * 显示成功通知
     */
    success(message, duration) {
        return this.show(message, 'success', duration);
    },

    /**
     * 显示错误通知
     */
    error(message, duration) {
        return this.show(message, 'error', duration);
    },

    /**
     * 显示警告通知
     */
    warning(message, duration) {
        return this.show(message, 'warning', duration);
    },

    /**
     * 显示信息通知
     */
    info(message, duration) {
        return this.show(message, 'info', duration);
    },

    /**
     * 显示通知
     */
    show(message, type = 'info', duration = this.config.duration) {
        if (!this.container) this.createContainer();
        const toast = this.createToast(message, type);
        this.container.appendChild(toast);
        
        // 限制数量
        const toasts = this.container.querySelectorAll('.toast');
        if (toasts.length > this.config.maxToasts) {
            toasts[0].remove();
        }
        
        // 自动关闭
        setTimeout(() => {
            this.close(toast);
        }, duration);
        
        return toast;
    },

    /**
     * 创建通知元素
     */
    createToast(message, type) {
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.style.cssText = `
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 14px 20px;
            background: var(--bg-secondary);
            border: 1px solid var(--border-color);
            border-radius: 12px;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
            pointer-events: auto;
            animation: slideIn 0.3s ease;
            min-width: 280px;
            max-width: 400px;
        `;
        
        const icons = {
            success: '✅',
            error: '❌',
            warning: '⚠️',
            info: 'ℹ️',
        };
        
        const borderColors = {
            success: 'rgba(34, 197, 94, 0.3)',
            error: 'rgba(239, 68, 68, 0.3)',
            warning: 'rgba(234, 179, 8, 0.3)',
            info: 'rgba(99, 102, 241, 0.3)',
        };
        
        toast.style.borderLeft = `4px solid ${borderColors[type]}`;
        
        toast.innerHTML = `
            <span style="font-size: 1.2rem;">${icons[type]}</span>
            <span style="flex: 1; color: var(--text-primary);">${message}</span>
            <button style="
                background: transparent;
                border: none;
                color: var(--text-muted);
                cursor: pointer;
                font-size: 1rem;
                padding: 4px;
            " onclick="ToastComponent.close(this.parentElement)">✕</button>
        `;
        
        return toast;
    },

    /**
     * 关闭通知
     */
    close(toast) {
        toast.style.animation = 'slideOut 0.3s ease forwards';
        setTimeout(() => toast.remove(), 300);
    },
};

// 添加动画样式
const toastStyle = document.createElement('style');
toastStyle.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(toastStyle);

// 自动初始化
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => ToastComponent.init());
} else {
    ToastComponent.init();
}

window.Toast = ToastComponent;

/**
 * Hermes Dashboard - 骨架屏加载组件
 * 可复用 UI 组件库
 */

const SkeletonComponent = {
    /**
     * 创建骨架屏卡片
     */
    card(options = {}) {
        const {
            width = '100%',
            height = '200px',
            borderRadius = '12px',
        } = options;
        
        return `
            <div class="skeleton-card" style="
                width: ${width};
                height: ${height};
                background: linear-gradient(
                    90deg,
                    var(--bg-secondary) 25%,
                    var(--bg-tertiary) 50%,
                    var(--bg-secondary) 75%
                );
                background-size: 200% 100%;
                animation: skeleton-loading 1.5s infinite;
                border-radius: ${borderRadius};
            "></div>
        `;
    },

    /**
     * 创建文本骨架屏
     */
    text(options = {}) {
        const {
            width = '100%',
            height = '16px',
            lines = 1,
            gap = '8px',
        } = options;
        
        if (lines === 1) {
            return `
                <div class="skeleton-text" style="
                    width: ${width};
                    height: ${height};
                    background: linear-gradient(
                        90deg,
                        var(--bg-secondary) 25%,
                        var(--bg-tertiary) 50%,
                        var(--bg-secondary) 75%
                    );
                    background-size: 200% 100%;
                    animation: skeleton-loading 1.5s infinite;
                    border-radius: 4px;
                "></div>
            `;
        }
        
        // 多行文本
        return Array(lines).fill(0).map((_, i) => {
            const w = i === lines - 1 && Math.random() > 0.5 
                ? `${parseInt(width) * 0.6}%` 
                : width;
            return `
                <div class="skeleton-text-line" style="
                    width: ${w};
                    height: ${height};
                    background: linear-gradient(
                        90deg,
                        var(--bg-secondary) 25%,
                        var(--bg-tertiary) 50%,
                        var(--bg-secondary) 75%
                    );
                    background-size: 200% 100%;
                    animation: skeleton-loading 1.5s infinite;
                    border-radius: 4px;
                    margin-bottom: ${i < lines - 1 ? gap : 0};
                "></div>
            `;
        }).join('');
    },

    /**
     * 创建圆形头像骨架屏
     */
    avatar(size = '40px') {
        return `
            <div class="skeleton-avatar" style="
                width: ${size};
                height: ${size};
                background: linear-gradient(
                    90deg,
                    var(--bg-secondary) 25%,
                    var(--bg-tertiary) 50%,
                    var(--bg-secondary) 75%
                );
                background-size: 200% 100%;
                animation: skeleton-loading 1.5s infinite;
                border-radius: 50%;
            "></div>
        `;
    },

    /**
     * 创建列表骨架屏
     */
    list(options = {}) {
        const {
            count = 5,
            itemHeight = '60px',
            showAvatar = true,
        } = options;
        
        return Array(count).fill(0).map(() => `
            <div class="skeleton-list-item" style="
                display: flex;
                align-items: center;
                gap: 12px;
                height: ${itemHeight};
                padding: 12px 0;
            ">
                ${showAvatar ? this.avatar('40px') : ''}
                <div style="flex: 1;">
                    ${this.text({ width: '80%', height: '16px' })}
                    ${this.text({ width: '60%', height: '12px', gap: '6px' })}
                </div>
            </div>
        `).join('');
    },

    /**
     * 创建表格骨架屏
     */
    table(options = {}) {
        const {
            rows = 5,
            columns = 4,
            rowHeight = '50px',
        } = options;
        
        const header = Array(columns).fill(0).map(() => 
            this.text({ width: '80px', height: '14px' })
        ).join('');
        
        const body = Array(rows).fill(0).map(() => `
            <tr style="height: ${rowHeight};">
                ${Array(columns).fill(0).map(() => `
                    <td style="padding: 12px;">
                        ${this.text({ width: '100%', height: '14px' })}
                    </td>
                `).join('')}
            </tr>
        `).join('');
        
        return `
            <table class="skeleton-table" style="width: 100%; border-collapse: collapse;">
                <thead>
                    <tr>
                        ${Array(columns).fill(0).map(() => `
                            <th style="padding: 12px; text-align: left;">
                                ${header}
                            </th>
                        `).join('')}
                    </tr>
                </thead>
                <tbody>
                    ${body}
                </tbody>
            </table>
        `;
    },

    /**
     * 创建图表骨架屏
     */
    chart(options = {}) {
        const {
            width = '100%',
            height = '300px',
            showTitle = true,
        } = options;
        
        return `
            <div class="skeleton-chart" style="
                width: ${width};
                background: var(--bg-card);
                border: 1px solid var(--border-color);
                border-radius: 12px;
                padding: 20px;
            ">
                ${showTitle ? `
                    <div style="margin-bottom: 20px;">
                        ${this.text({ width: '200px', height: '20px' })}
                    </div>
                ` : ''}
                <div style="
                    width: 100%;
                    height: ${height};
                    background: linear-gradient(
                        90deg,
                        var(--bg-secondary) 25%,
                        var(--bg-tertiary) 50%,
                        var(--bg-secondary) 75%
                    );
                    background-size: 200% 100%;
                    animation: skeleton-loading 1.5s infinite;
                    border-radius: 8px;
                "></div>
            </div>
        `;
    },

    /**
     * 创建仪表盘骨架屏
     */
    dashboard() {
        return `
            <div class="skeleton-dashboard">
                <!-- 统计卡片 -->
                <div style="
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 20px;
                    margin-bottom: 30px;
                ">
                    ${Array(4).fill(0).map(() => this.card({ height: '140px' })).join('')}
                </div>
                
                <!-- 图表区域 -->
                <div style="
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 20px;
                    margin-bottom: 30px;
                ">
                    ${this.chart({ height: '250px' })}
                    ${this.chart({ height: '250px' })}
                </div>
                
                <!-- 列表区域 -->
                <div style="
                    background: var(--bg-card);
                    border: 1px solid var(--border-color);
                    border-radius: 12px;
                    padding: 20px;
                ">
                    ${this.text({ width: '200px', height: '20px' })}
                    <div style="margin-top: 20px;">
                        ${this.list({ count: 5 })}
                    </div>
                </div>
            </div>
        `;
    },

    /**
     * 移除骨架屏动画（加载完成时调用）
     */
    stopAnimation(container) {
        const elements = container.querySelectorAll('.skeleton-card, .skeleton-text, .skeleton-avatar');
        elements.forEach(el => {
            el.style.animation = 'none';
        });
    },
};

// 添加动画样式
const skeletonStyle = document.createElement('style');
skeletonStyle.textContent = `
    @keyframes skeleton-loading {
        0% { background-position: 200% 0; }
        100% { background-position: -200% 0; }
    }
`;
document.head.appendChild(skeletonStyle);

window.Skeleton = SkeletonComponent;

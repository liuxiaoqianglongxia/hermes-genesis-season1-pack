/**
 * Hermes Dashboard - 数据可视化组件
 * 可复用 UI 组件库
 * 
 * 功能：
 * - Token 趋势图
 * - Agent 活跃度热力图
 * - 服务状态时间线
 * - 错误分布饼图
 * - 资源使用排行榜
 */

const ChartsComponent = {
    // 图表实例缓存
    charts: new Map(),

    /**
     * 初始化
     */
    init() {
        console.log('📊 初始化数据可视化组件...');
    },

    /**
     * 创建 Token 趋势图
     */
    createTokenTrend(containerId, options = {}) {
        const {
            period = '7d', // 7d, 30d
            data = this.generateMockTokenData(period),
        } = options;
        
        const ctx = this.getContext(containerId);
        if (!ctx) return null;
        
        const chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: data.labels,
                datasets: [
                    {
                        label: 'Token 消耗',
                        data: data.values,
                        borderColor: '#6366f1',
                        backgroundColor: 'rgba(99, 102, 241, 0.1)',
                        borderWidth: 2,
                        fill: true,
                        tension: 0.4,
                        pointRadius: 3,
                        pointHoverRadius: 5,
                    },
                ],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false,
                    },
                    tooltip: {
                        mode: 'index',
                        intersect: false,
                        backgroundColor: 'rgba(15, 23, 42, 0.9)',
                        titleColor: '#f8fafc',
                        bodyColor: '#94a3b8',
                        borderColor: '#334155',
                        borderWidth: 1,
                        padding: 12,
                        displayColors: false,
                        callbacks: {
                            label: (context) => `Token: ${context.parsed.y.toLocaleString()}`,
                        },
                    },
                },
                scales: {
                    x: {
                        grid: {
                            color: 'rgba(51, 65, 85, 0.5)',
                        },
                        ticks: {
                            color: '#94a3b8',
                        },
                    },
                    y: {
                        grid: {
                            color: 'rgba(51, 65, 85, 0.5)',
                        },
                        ticks: {
                            color: '#94a3b8',
                            callback: (value) => value >= 1000 ? `${(value / 1000).toFixed(1)}K` : value,
                        },
                    },
                },
                interaction: {
                    mode: 'nearest',
                    axis: 'x',
                    intersect: false,
                },
            },
        });
        
        this.charts.set(containerId, chart);
        return chart;
    },

    /**
     * 创建 Agent 活跃度热力图
     */
    createAgentHeatmap(containerId, options = {}) {
        const {
            data = this.generateMockHeatmapData(),
        } = options;
        
        const ctx = this.getContext(containerId);
        if (!ctx) return null;
        
        // 使用条形图模拟热力图
        const chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: data.hours,
                datasets: data.agents.map((agent, index) => ({
                    label: agent.name,
                    data: agent.values,
                    backgroundColor: this.getColor(index),
                    borderRadius: 4,
                })),
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                indexAxis: 'y',
                plugins: {
                    legend: {
                        position: 'top',
                        labels: {
                            color: '#94a3b8',
                            usePointStyle: true,
                            padding: 20,
                        },
                    },
                    tooltip: {
                        backgroundColor: 'rgba(15, 23, 42, 0.9)',
                        titleColor: '#f8fafc',
                        bodyColor: '#94a3b8',
                        borderColor: '#334155',
                        borderWidth: 1,
                    },
                },
                scales: {
                    x: {
                        grid: {
                            color: 'rgba(51, 65, 85, 0.5)',
                        },
                        ticks: {
                            color: '#94a3b8',
                        },
                        title: {
                            display: true,
                            text: '请求数',
                            color: '#64748b',
                        },
                    },
                    y: {
                        grid: {
                            display: false,
                        },
                        ticks: {
                            color: '#94a3b8',
                        },
                    },
                },
            },
        });
        
        this.charts.set(containerId, chart);
        return chart;
    },

    /**
     * 创建服务状态时间线
     */
    createServiceTimeline(containerId, options = {}) {
        const {
            data = this.generateMockTimelineData(),
        } = options;
        
        const container = document.getElementById(containerId);
        if (!container) return null;
        
        container.innerHTML = `
            <div class="timeline" style="
                position: relative;
                padding: 20px 0;
            ">
                ${data.services.map((service, index) => `
                    <div class="timeline-item" style="
                        display: flex;
                        align-items: center;
                        margin-bottom: 16px;
                        position: relative;
                    ">
                        <div style="
                            width: 120px;
                            font-size: 0.85rem;
                            color: var(--text-secondary);
                            flex-shrink: 0;
                        ">${service.name}</div>
                        <div style="
                            flex: 1;
                            height: 24px;
                            background: var(--bg-tertiary);
                            border-radius: 12px;
                            overflow: hidden;
                            position: relative;
                        ">
                            <div style="
                                position: absolute;
                                left: 0;
                                top: 0;
                                height: 100%;
                                width: ${service.uptime}%;
                                background: linear-gradient(90deg, #10b981 0%, #34d399 100%);
                                border-radius: 12px;
                                transition: width 0.5s ease;
                            "></div>
                        </div>
                        <div style="
                            width: 60px;
                            text-align: right;
                            font-size: 0.85rem;
                            color: ${service.uptime >= 99 ? '#10b981' : service.uptime >= 95 ? '#f59e0b' : '#ef4444'};
                            margin-left: 12px;
                        ">${service.uptime}%</div>
                    </div>
                `).join('')}
            </div>
        `;
        
        return container;
    },

    /**
     * 创建错误分布饼图
     */
    createErrorPie(containerId, options = {}) {
        const {
            data = this.generateMockErrorData(),
        } = options;
        
        const ctx = this.getContext(containerId);
        if (!ctx) return null;
        
        const chart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: data.labels,
                datasets: [{
                    data: data.values,
                    backgroundColor: [
                        'rgba(239, 68, 68, 0.8)',
                        'rgba(234, 179, 8, 0.8)',
                        'rgba(99, 102, 241, 0.8)',
                        'rgba(16, 185, 129, 0.8)',
                        'rgba(236, 72, 153, 0.8)',
                    ],
                    borderColor: [
                        'rgba(239, 68, 68, 1)',
                        'rgba(234, 179, 8, 1)',
                        'rgba(99, 102, 241, 1)',
                        'rgba(16, 185, 129, 1)',
                        'rgba(236, 72, 153, 1)',
                    ],
                    borderWidth: 2,
                }],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '60%',
                plugins: {
                    legend: {
                        position: 'right',
                        labels: {
                            color: '#94a3b8',
                            usePointStyle: true,
                            padding: 20,
                        },
                    },
                    tooltip: {
                        backgroundColor: 'rgba(15, 23, 42, 0.9)',
                        titleColor: '#f8fafc',
                        bodyColor: '#94a3b8',
                        borderColor: '#334155',
                        borderWidth: 1,
                        callbacks: {
                            label: (context) => {
                                const total = context.dataset.data.reduce((a, b) => a + b, 0);
                                const percentage = ((context.parsed / total) * 100).toFixed(1);
                                return `${context.label}: ${context.parsed} (${percentage}%)`;
                            },
                        },
                    },
                },
            },
        });
        
        this.charts.set(containerId, chart);
        return chart;
    },

    /**
     * 创建资源使用排行榜
     */
    createResourceRanking(containerId, options = {}) {
        const {
            type = 'cpu', // cpu, memory, disk
            data = this.generateMockRankingData(type),
        } = options;
        
        const ctx = this.getContext(containerId);
        if (!ctx) return null;
        
        const chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: data.labels,
                datasets: [{
                    label: type === 'cpu' ? 'CPU 使用率' : type === 'memory' ? '内存使用' : '磁盘使用',
                    data: data.values,
                    backgroundColor: data.values.map(v => {
                        if (v >= 80) return 'rgba(239, 68, 68, 0.8)';
                        if (v >= 60) return 'rgba(234, 179, 8, 0.8)';
                        return 'rgba(16, 185, 129, 0.8)';
                    }),
                    borderRadius: 6,
                    borderSkipped: false,
                }],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                indexAxis: 'y',
                plugins: {
                    legend: {
                        display: false,
                    },
                    tooltip: {
                        backgroundColor: 'rgba(15, 23, 42, 0.9)',
                        titleColor: '#f8fafc',
                        bodyColor: '#94a3b8',
                        borderColor: '#334155',
                        borderWidth: 1,
                        callbacks: {
                            label: (context) => `${context.parsed}%`,
                        },
                    },
                },
                scales: {
                    x: {
                        grid: {
                            color: 'rgba(51, 65, 85, 0.5)',
                        },
                        ticks: {
                            color: '#94a3b8',
                            callback: (value) => `${value}%`,
                        },
                        max: 100,
                    },
                    y: {
                        grid: {
                            display: false,
                        },
                        ticks: {
                            color: '#94a3b8',
                        },
                    },
                },
            },
        });
        
        this.charts.set(containerId, chart);
        return chart;
    },

    /**
     * 更新图表数据
     */
    updateChart(containerId, newData) {
        const chart = this.charts.get(containerId);
        if (!chart) return;
        
        chart.data = newData;
        chart.update('none'); // 无动画更新
    },

    /**
     * 销毁图表
     */
    destroy(containerId) {
        const chart = this.charts.get(containerId);
        if (chart) {
            chart.destroy();
            this.charts.delete(containerId);
        }
    },

    /**
     * 销毁所有图表
     */
    destroyAll() {
        this.charts.forEach(chart => chart.destroy());
        this.charts.clear();
    },

    /**
     * 获取 Canvas 上下文
     */
    getContext(containerId) {
        const canvas = document.getElementById(containerId);
        if (!canvas) {
            console.warn(`Canvas ${containerId} not found`);
            return null;
        }
        return canvas.getContext('2d');
    },

    /**
     * 获取颜色
     */
    getColor(index) {
        const colors = [
            'rgba(99, 102, 241, 0.8)',
            'rgba(16, 185, 129, 0.8)',
            'rgba(234, 179, 8, 0.8)',
            'rgba(239, 68, 68, 0.8)',
            'rgba(236, 72, 153, 0.8)',
            'rgba(59, 130, 246, 0.8)',
        ];
        return colors[index % colors.length];
    },

    // ==================== 模拟数据生成 ====================

    generateMockTokenData(period) {
        const labels = [];
        const values = [];
        const days = period === '7d' ? 7 : 30;
        
        for (let i = 0; i < days; i++) {
            const date = new Date();
            date.setDate(date.getDate() - (days - i - 1));
            labels.push(date.toLocaleDateString('zh-CN', { month: 'short', day: 'numeric' }));
            values.push(Math.floor(Math.random() * 5000) + 2000);
        }
        
        return { labels, values };
    },

    generateMockHeatmapData() {
        const hours = Array.from({ length: 24 }, (_, i) => `${i}:00`);
        const agents = [
            { name: 'Agent-1', values: [] },
            { name: 'Agent-2', values: [] },
            { name: 'Agent-3', values: [] },
        ];
        
        agents.forEach(agent => {
            for (let i = 0; i < 24; i++) {
                // 工作时间更活跃
                const base = (i >= 9 && i <= 18) ? 50 : 20;
                agent.values.push(Math.floor(Math.random() * base) + base);
            }
        });
        
        return { hours, agents };
    },

    generateMockTimelineData() {
        return {
            services: [
                { name: 'API Server', uptime: 99.9 },
                { name: 'Frontend', uptime: 99.8 },
                { name: 'Database', uptime: 99.95 },
                { name: 'Redis', uptime: 99.7 },
                { name: 'Message Queue', uptime: 98.5 },
            ],
        };
    },

    generateMockErrorData() {
        return {
            labels: ['网络错误', '超时错误', '权限错误', '数据错误', '其他'],
            values: [45, 25, 15, 10, 5],
        };
    },

    generateMockRankingData(type) {
        const services = ['API', 'Frontend', 'DB', 'Redis', 'MQ', 'Worker', 'Scheduler'];
        return {
            labels: services,
            values: services.map(() => Math.floor(Math.random() * 60) + 20),
        };
    },
};

// 自动初始化
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => ChartsComponent.init());
} else {
    ChartsComponent.init();
}

window.Charts = ChartsComponent;

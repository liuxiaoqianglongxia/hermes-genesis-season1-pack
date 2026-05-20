/**
 * Hermes Dashboard Lite - Demo App
 * 所有数据来自 sample-data.js，不访问任何真实 API。
 * 控制按钮点击弹出 "demo disabled"。
 */
(function() {
    'use strict';

    // ========== 通用工具 ==========
    function escapeHtml(text) {
        if (!text) return '';
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    function formatTime(iso) {
        if (!iso) return '-';
        try {
            return new Date(iso).toLocaleString('zh-CN', {
                month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit'
            });
        } catch { return iso; }
    }

    function formatRelativeTime(iso) {
        if (!iso) return '-';
        try {
            const diff = (new Date(iso) - new Date()) / 1000 / 60;
            if (diff < 1) return '即将运行';
            if (diff < 60) return Math.round(diff) + '分钟后';
            if (diff < 1440) return Math.round(diff / 60) + '小时后';
            return Math.round(diff / 1440) + '天后';
        } catch { return formatTime(iso); }
    }

    function getCronFrequency(expr) {
        if (!expr || expr === '-') return expr || '-';
        const freq = {
            '* * * * *': '每分钟', '*/5 * * * *': '每 5 分钟', '*/10 * * * *': '每 10 分钟',
            '*/15 * * * *': '每 15 分钟', '*/30 * * * *': '每 30 分钟',
            '0 * * * *': '每小时', '0 0 * * *': '每天 00:00',
            '0 8 * * *': '每天 08:00', '0 9 * * *': '每天 09:00',
            '0 0 * * 0': '每周日 00:00', '0 0 * * 1': '每周一 00:00',
            '0 0 1 * *': '每月 1 日 00:00',
        };
        return freq[expr] || expr;
    }

    // ========== Demo 模式：控制按钮拦截 ==========
    function demoDisabled(action) {
        alert('🔒 Demo 模式\n\n"' + action + '" 功能在静态演示版中不可用。\n\n这是基于真实 Hermes Dashboard 前端迁移的脱敏预览版，\n不包含后端、不执行服务控制。\n\n如需完整功能，请对接自己的后端 API。');
    }

    // ========== 时钟 ==========
    function updateClock() {
        const el = document.getElementById('currentTime');
        if (el) {
            const now = new Date();
            el.textContent = now.toLocaleString('zh-CN', {
                year: 'numeric', month: '2-digit', day: '2-digit',
                hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false
            });
        }
    }
    setInterval(updateClock, 1000);
    updateClock();

    // ========== 收藏 ==========
    window.toggleBookmark = function() {
        demoDisabled('收藏页面');
    };

    // ========== 移动端菜单 ==========
    window.toggleMobileMenu = function() {
        const menu = document.querySelector('.navbar-menu');
        if (menu) menu.classList.toggle('active');
    };

    // ========== Toast ==========
    window.showToast = function(message, type) {
        type = type || 'success';
        const toast = document.getElementById('toast');
        const toastMessage = document.getElementById('toastMessage');
        if (!toast || !toastMessage) return;
        toast.className = 'toast ' + type;
        toastMessage.textContent = message;
        toast.classList.add('show');
        setTimeout(function() { toast.classList.remove('show'); }, 3000);
    };

    // ========== 页面: 端口状态 (index) ==========
    function renderIndexPage() {
        var grid = document.getElementById('servicesGrid');
        if (!grid) return;

        var data = DEMO_DATA;
        var healthBadge = document.getElementById('systemHealth');
        var healthText = document.getElementById('healthText');
        if (healthBadge && healthText) {
            healthBadge.className = 'status-badge green';
            healthText.textContent = '系统正常 (demo)';
        }

        grid.innerHTML = data.services.map(function(s) {
            var isRunning = s.status === 'running';
            var statusClass = isRunning ? 'running' : 'stopped';
            var statusText = isRunning ? '运行中' : '已停止';
            var groupNames = { agent: 'Agent', pipeline: 'Pipeline', data: 'Data', core: 'Core', ui: 'UI', ops: 'Ops' };
            var groupTag = s.group ? '<span class="service-group-tag">' + (groupNames[s.group] || s.group) + '</span>' : '';

            return '<div class="service-card">' +
                '<div class="service-info">' +
                    groupTag +
                    '<div class="service-name">' + escapeHtml(s.name) + '</div>' +
                    '<div class="service-port">端口：' + (s.port || '未配置') + '</div>' +
                '</div>' +
                '<div class="service-status">' +
                    '<span class="status-indicator ' + statusClass + '">' +
                        '<span class="status-dot"></span> ' + statusText +
                    '</span>' +
                    '<div class="service-actions">' +
                        '<button class="action-btn" onclick="demoDisabled(\'重启服务\')" title="Demo 模式不可用">🔄 重启</button>' +
                        '<button class="action-btn" onclick="demoDisabled(\'查看日志\')" title="Demo 模式不可用">📋 日志</button>' +
                    '</div>' +
                '</div>' +
            '</div>';
        }).join('');
    }

    // ========== 页面: Agent ==========
    function renderAgentsPage() {
        var container = document.getElementById('agentsContainer');
        if (!container) return;

        var teams = DEMO_DATA.teams;
        var totalRoles = teams.reduce(function(s, t) { return s + t.roleCount; }, 0);
        var totalMemory = teams.reduce(function(s, t) { return s + t.memoryCount; }, 0);

        // 更新统计
        var statsEl = document.getElementById('agentsStats');
        if (statsEl) {
            statsEl.innerHTML =
                '<div class="stat-card"><div class="stat-value">' + teams.length + '</div><div class="stat-label">团队数</div></div>' +
                '<div class="stat-card"><div class="stat-value">' + totalRoles + '</div><div class="stat-label">角色数</div></div>' +
                '<div class="stat-card"><div class="stat-value">' + totalMemory + '</div><div class="stat-label">记忆条目</div></div>' +
                '<div class="stat-card"><div class="stat-value">' + teams.filter(function(t){return t.roles.filter(function(r){return r.hasMemory}).length > 0}).length + '</div><div class="stat-label">活跃团队</div></div>';
        }

        container.innerHTML = teams.map(function(team) {
            return '<div class="team-block">' +
                '<div class="team-header" onclick="this.parentElement.classList.toggle(\'expanded\')">' +
                    '<div class="team-icon damo">' + team.icon + '</div>' +
                    '<div class="team-info">' +
                        '<div class="team-title">' + escapeHtml(team.name) + ' <span class="team-badge">' + team.badge + '</span></div>' +
                        '<div class="team-desc">' + escapeHtml(team.desc) + '</div>' +
                    '</div>' +
                    '<div class="team-stats">' +
                        '<div class="team-stat-item"><div class="val">' + team.roleCount + '</div><div class="lbl">角色</div></div>' +
                        '<div class="team-stat-item"><div class="val">' + team.memoryCount + '</div><div class="lbl">记忆</div></div>' +
                    '</div>' +
                    '<div class="team-toggle"><svg viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z" fill="currentColor"/></svg></div>' +
                '</div>' +
                '<div class="team-content"><div class="team-content-inner">' +
                    '<div class="team-memory-section">' +
                        '<div class="team-memory-header">' +
                            '<div class="section-icon">📚</div>' +
                            '<h3>团队记忆</h3>' +
                            '<span class="mem-count">' + team.memoryCount + ' 条</span>' +
                        '</div>' +
                        '<div class="team-memory-items">' +
                            team.roles.filter(function(r){return r.hasMemory}).map(function(r) {
                                return '<div class="team-memory-item">' +
                                    '<div class="mem-title"><span class="icon">' + r.icon + '</span> ' + escapeHtml(r.name) + '</div>' +
                                    '<div class="mem-summary">' + escapeHtml(r.summary) + '</div>' +
                                '</div>';
                            }).join('') +
                        '</div>' +
                    '</div>' +
                    '<div class="roles-section-title">' +
                        '<div class="section-icon">👤</div>' +
                        '<h3>角色档案</h3>' +
                    '</div>' +
                    '<div class="roles-grid">' +
                        team.roles.map(function(r) {
                            var healthTags = r.healthTags.map(function(t) {
                                return '<span class="health-tag ' + t.status + '">' + t.label + '</span>';
                            }).join('');
                            return '<div class="role-card ' + (r.hasMemory ? 'has-memory' : 'empty') + '" onclick="demoDisabled(\'查看角色详情\')">' +
                                '<div class="role-header">' +
                                    '<div class="role-icon ' + r.type + '">' + r.icon + '</div>' +
                                    '<span class="role-name">' + escapeHtml(r.name) + '</span>' +
                                    (r.hasMemory ? '<span class="role-file-count">' + r.files + ' files</span>' : '') +
                                '</div>' +
                                '<div class="role-health-tags">' + healthTags + '</div>' +
                                '<div class="role-summary">' + escapeHtml(r.summary) + '</div>' +
                            '</div>';
                        }).join('') +
                    '</div>' +
                '</div></div>' +
            '</div>';
        }).join('');
    }

    // ========== 页面: 定时任务 ==========
    function renderTasksPage() {
        var tasks = DEMO_DATA.tasks;
        var tbody = document.getElementById('tasksBody');
        if (!tbody) return;

        // 统计
        var total = tasks.length;
        var active = tasks.filter(function(t) { return t.enabled !== false; }).length;
        var today = new Date(); today.setHours(0,0,0,0);
        var todayExec = tasks.filter(function(t) { return t.last_run && new Date(t.last_run) >= today; }).length;
        var failed = tasks.filter(function(t) { return ['error','fail','failed'].includes(t.last_status); }).length;

        document.getElementById('totalTasks').textContent = total;
        document.getElementById('activeTasks').textContent = active;
        document.getElementById('todayExec').textContent = todayExec;
        document.getElementById('failedTasks').textContent = failed;

        tbody.innerHTML = tasks.map(function(task, i) {
            var isActive = task.enabled !== false;
            var schedule = task.schedule || '-';
            var frequency = getCronFrequency(schedule);
            var nextRun = formatRelativeTime(task.next_run);
            var lastRun = formatTime(task.last_run);
            var lastStatus = task.last_status || 'none';
            var taskId = task.job_id || task.id;

            var statusClass, statusText, dotClass;
            if (!isActive) { statusClass = 'status-paused'; statusText = '已暂停'; dotClass = 'paused'; }
            else if (lastStatus === 'ok') { statusClass = 'status-ok'; statusText = '成功'; dotClass = 'ok'; }
            else if (lastStatus && lastStatus !== 'ok') { statusClass = 'status-failed'; statusText = '失败'; dotClass = 'failed'; }
            else { statusClass = 'status-running'; statusText = '运行中'; dotClass = 'running'; }

            return '<tr onclick="showTaskDetail(\'' + taskId + '\')">' +
                '<td class="row-index">' + String(i + 1).padStart(2, '0') + '</td>' +
                '<td class="task-name" title="' + escapeHtml(task.name) + '">' + escapeHtml(task.name) + '</td>' +
                '<td><code class="task-schedule">' + escapeHtml(schedule) + '</code></td>' +
                '<td class="task-freq">' + escapeHtml(frequency) + '</td>' +
                '<td class="task-time">' + escapeHtml(nextRun) + '</td>' +
                '<td class="task-time">' + escapeHtml(lastRun) + '</td>' +
                '<td><span class="task-status ' + statusClass + '"><span class="status-dot ' + dotClass + '"></span>' + statusText + '</span></td>' +
            '</tr>';
        }).join('');

        // 任务详情弹窗
        window.showTaskDetail = function(taskId) {
            var task = tasks.find(function(t) { return (t.job_id || t.id) === taskId; });
            if (!task) return;

            var isActive = task.enabled !== false;
            var schedule = task.schedule || task.cron || '-';
            var frequency = getCronFrequency(schedule);
            var command = task.prompt || '无';

            var modal = document.getElementById('taskDetailModal');
            modal.innerHTML = '<div class="modal-content">' +
                '<div class="modal-header">' +
                    '<h2>' + escapeHtml(task.name) + '</h2>' +
                    '<button class="modal-close" onclick="this.closest(\'.modal-overlay\').style.display=\'none\'">&times;</button>' +
                '</div>' +
                '<div class="modal-body">' +
                    '<div class="detail-section"><h3>基本信息</h3>' +
                    '<table class="detail-table">' +
                        '<tr><td>任务 ID</td><td><code>' + escapeHtml(taskId) + '</code></td></tr>' +
                        '<tr><td>Cron</td><td><code>' + escapeHtml(schedule) + '</code></td></tr>' +
                        '<tr><td>频率</td><td>' + escapeHtml(frequency) + '</td></tr>' +
                        '<tr><td>状态</td><td><span class="badge ' + (isActive ? 'badge-success' : 'badge-warning') + '">' + (isActive ? '启用' : '已暂停') + '</span></td></tr>' +
                        '<tr><td>上次运行</td><td>' + formatTime(task.last_run) + '</td></tr>' +
                        '<tr><td>下次运行</td><td>' + formatRelativeTime(task.next_run) + '</td></tr>' +
                        '<tr><td>最后状态</td><td><span class="badge ' + (task.last_status === 'ok' ? 'badge-success' : 'badge-error') + '">' + (task.last_status === 'ok' ? '成功' : task.last_status || '无') + '</span></td></tr>' +
                    '</table></div>' +
                    '<div class="detail-section"><h3>任务指令</h3>' +
                    '<div class="code-block">' + escapeHtml(command) + '</div></div>' +
                    '<div class="detail-section"><h3>操作</h3>' +
                    '<div style="display:flex;gap:8px;flex-wrap:wrap">' +
                        '<button class="btn" onclick="demoDisabled(\'运行任务\')">▶ 立即运行</button>' +
                        '<button class="btn btn-secondary" onclick="demoDisabled(\'暂停任务\')">⏸ ' + (isActive ? '暂停' : '恢复') + '</button>' +
                        '<button class="btn btn-secondary" onclick="demoDisabled(\'查看日志\')">📋 日志</button>' +
                    '</div></div>' +
                '</div>' +
            '</div>';
            modal.style.display = 'flex';
        };

        // 点击遮罩关闭
        document.getElementById('taskDetailModal').addEventListener('click', function(e) {
            if (e.target === this) this.style.display = 'none';
        });
    }

    window.refreshAll = function() {
        showToast('🔄 数据已刷新 (demo)', 'success');
        // Re-render current page
        var path = window.location.pathname.split('/').pop();
        if (path === '' || path === 'index.html') renderIndexPage();
        else if (path === 'agents.html') renderAgentsPage();
        else if (path === 'tasks.html') renderTasksPage();
        else if (path === 'skills.html') renderSkillsPage();
        else if (path === 'pipeline.html') renderPipelinePage();
        else if (path === 'token.html') renderTokenPage();
        else if (path === 'memory.html') renderMemoryPage();
    };

    // ========== 页面: 技能 ==========
    function renderSkillsPage() {
        var sidebar = document.getElementById('skillsSidebar');
        var content = document.getElementById('skillsContent');
        var statsEl = document.getElementById('skillsStats');
        var subtitle = document.getElementById('skillsSubtitle');

        if (!content) return;

        var categories = DEMO_DATA.skillCategories;
        var skills = DEMO_DATA.skills;
        var builtIn = skills.filter(function(s){return s.status==='built-in'}).length;
        var optional = skills.filter(function(s){return s.status==='optional'}).length;

        if (subtitle) subtitle.textContent = skills.length + ' 个技能 · 内置 ' + builtIn + ' · 可选 ' + optional;

        if (statsEl) {
            statsEl.innerHTML =
                '<div class="summary-card active"><div class="summary-value">' + skills.length + '</div><div class="summary-label">总技能数</div></div>' +
                '<div class="summary-card success"><div class="summary-value">' + builtIn + '</div><div class="summary-label">内置</div></div>' +
                '<div class="summary-card paused"><div class="summary-value">' + optional + '</div><div class="summary-label">可选</div></div>' +
                '<div class="summary-card"><div class="summary-value">' + categories.length + '</div><div class="summary-label">分类</div></div>';
        }

        if (sidebar) {
            sidebar.innerHTML = '<div class="skills-sidebar-title">分类</div>' +
                '<ul class="skills-nav-list">' +
                '<li class="skills-nav-item active" onclick="filterSkills(\'all\', this)">' +
                    '<span class="nav-icon">📦</span><span class="nav-label">全部</span>' +
                    '<span class="nav-count">' + skills.length + '</span></li>' +
                categories.map(function(c) {
                    return '<li class="skills-nav-item" onclick="filterSkills(\'' + c.id + '\', this)">' +
                        '<span class="nav-icon">' + c.icon + '</span><span class="nav-label">' + c.name + '</span>' +
                        '<span class="nav-count">' + c.count + '</span></li>';
                }).join('') +
                '</ul>';
        }

        renderSkillCards(skills);

        window.filterSkills = function(catId, el) {
            document.querySelectorAll('.skills-nav-item').forEach(function(n){n.classList.remove('active')});
            if (el) el.classList.add('active');
            var filtered = catId === 'all' ? skills : skills.filter(function(s){return s.category === catId});
            renderSkillCards(filtered);
        };
    }

    function renderSkillCards(skillList) {
        var content = document.getElementById('skillsContent');
        if (!content) return;

        content.innerHTML = '<div class="skills-card-grid">' +
            skillList.map(function(s) {
                var statusClass = s.status === 'built-in' ? 'built-in' : s.status;
                var statusText = s.status === 'built-in' ? 'BUILT-IN' : s.status.toUpperCase();
                var tags = s.tags.map(function(t) { return '<span class="skill-card-tag">' + t + '</span>'; }).join('');
                return '<div class="skill-card" onclick="demoDisabled(\'查看技能详情\')">' +
                    '<div class="skill-card-header">' +
                        '<div class="skill-card-icon cat-' + s.category + '">' + getCategoryIcon(s.category) + '</div>' +
                        '<span class="skill-card-status ' + statusClass + '">' + statusText + '</span>' +
                    '</div>' +
                    '<div class="skill-card-title">' + escapeHtml(s.name) + '</div>' +
                    '<div class="skill-card-desc">' + escapeHtml(s.desc) + '</div>' +
                    '<div class="skill-card-tags">' + tags + '</div>' +
                '</div>';
            }).join('') +
        '</div>';
    }

    function getCategoryIcon(cat) {
        var icons = { 'ai-agent':'🤖','devops':'🔧','data-science':'📊','web-development':'🌐','research':'🔬','productivity':'📝','creative':'🎨','software-development':'💻' };
        return icons[cat] || '📦';
    }

    // ========== 页面: 流水线 ==========
    function renderPipelinePage() {
        var data = DEMO_DATA.pipeline;
        var stats = data.stats;

        // 统计
        var overview = document.getElementById('pipelineOverview');
        if (overview) {
            overview.innerHTML =
                '<div class="metric-card"><div class="metric-label">总会话</div><div class="metric-value">' + stats.totalSessions.toLocaleString() + '</div></div>' +
                '<div class="metric-card"><div class="metric-label">今日</div><div class="metric-value">' + stats.todaySessions + '</div></div>' +
                '<div class="metric-card"><div class="metric-label">平均 Tokens</div><div class="metric-value">' + stats.avgTokens + '</div></div>' +
                '<div class="metric-card"><div class="metric-label">子代理分派</div><div class="metric-value">' + stats.totalDelegations.toLocaleString() + '</div></div>';
        }

        // 会话列表
        var list = document.getElementById('sessionList');
        if (list) {
            list.innerHTML = data.sessions.map(function(s, i) {
                var badges = '';
                if (s.route === 'delegation') badges += '<span class="badge delegate">delegation</span>';
                else if (s.route === 'cron') badges += '<span class="badge broadcast">cron</span>';
                else badges += '<span class="badge route">direct</span>';
                if (s.delegates > 0) badges += '<span class="badge trace">' + s.delegates + ' delegates</span>';

                return '<div class="session-card ' + (i === 0 ? 'active' : '') + '" onclick="selectSession(this, ' + i + ')">' +
                    '<div class="session-user-msg">' + escapeHtml(s.userMsg) + '</div>' +
                    '<div class="session-preview">' + escapeHtml(s.preview) + '</div>' +
                    '<div class="meta-row">' +
                        '<span class="meta-chip">🕐 ' + s.time + '</span>' +
                        '<span class="meta-chip">🪙 ' + s.tokens.toLocaleString() + ' tokens</span>' +
                        '<span class="meta-chip">⏱ ' + s.duration + '</span>' +
                    '</div>' +
                    '<div class="badge-row">' + badges + '</div>' +
                '</div>';
            }).join('');
        }

        // 详情面板
        var detail = document.getElementById('sessionDetail');
        if (detail && data.sessions.length > 0) {
            renderSessionDetail(0);
        }

        window.selectSession = function(el, idx) {
            document.querySelectorAll('.session-card').forEach(function(c){c.classList.remove('active')});
            el.classList.add('active');
            renderSessionDetail(idx);
        };

        function renderSessionDetail(idx) {
            var s = data.sessions[idx];
            if (!s || !detail) return;

            detail.innerHTML =
                '<div class="detail-summary-grid">' +
                    '<div class="summary-block"><div class="label">Tokens</div><div class="value">' + s.tokens.toLocaleString() + '</div></div>' +
                    '<div class="summary-block"><div class="label">工具调用</div><div class="value">' + s.tools + '</div></div>' +
                    '<div class="summary-block"><div class="label">耗时</div><div class="value">' + s.duration + '</div></div>' +
                    '<div class="summary-block"><div class="label">路由</div><div class="value">' + s.route + '</div></div>' +
                '</div>' +
                '<div class="detail-section">' +
                    '<h3>时间线</h3>' +
                    '<div class="timeline">' +
                        s.timeline.map(function(t) {
                            var children = '';
                            if (t.children) children = '<div style="margin-top:8px;color:#818cf8;font-size:0.78rem">↳ ' + t.children + ' 个子代理并行</div>';
                            return '<div class="timeline-item">' +
                                '<div class="timeline-head">' +
                                    '<span class="timeline-label">' + escapeHtml(t.label) + '</span>' +
                                    '<span class="timeline-time">' + t.time + '</span>' +
                                '</div>' +
                                '<div class="timeline-summary">' + escapeHtml(t.summary) + '</div>' +
                                children +
                            '</div>';
                        }).join('') +
                    '</div>' +
                '</div>';
        }
    }

    // ========== 页面: Token ==========
    function renderTokenPage() {
        var data = DEMO_DATA.tokenStats;
        var overview = data.overview;

        // 统计卡片
        var statsGrid = document.getElementById('tokenStatsGrid');
        if (statsGrid) {
            statsGrid.innerHTML =
                '<div class="stat-card highlight-primary"><div class="stat-icon">🪙</div><div class="stat-label">总 Tokens</div><div class="stat-value">' + overview.totalTokens + '</div></div>' +
                '<div class="stat-card accent-green"><div class="stat-icon">📥</div><div class="stat-label">Input</div><div class="stat-value">' + overview.inputTokens + '</div></div>' +
                '<div class="stat-card accent-orange"><div class="stat-icon">📤</div><div class="stat-label">Output</div><div class="stat-value">' + overview.outputTokens + '</div></div>' +
                '<div class="stat-card accent-blue"><div class="stat-icon">📞</div><div class="stat-label">总调用</div><div class="stat-value">' + overview.totalCalls + '</div></div>' +
                '<div class="stat-card accent-purple"><div class="stat-icon">📊</div><div class="stat-label">平均/次</div><div class="stat-value">' + overview.avgPerCall + '</div></div>';
        }

        // 模型分布
        var modelList = document.getElementById('modelList');
        if (modelList) {
            modelList.innerHTML = data.byModel.map(function(m) {
                return '<div class="model-item">' +
                    '<div class="model-color" style="background:' + m.color + '"></div>' +
                    '<div class="model-info">' +
                        '<div class="model-name">' + m.name + '</div>' +
                        '<div class="model-bar-bg"><div class="model-bar" style="width:' + m.pct + '%;background:' + m.color + '"></div></div>' +
                    '</div>' +
                    '<div class="model-tokens">' + m.tokens.toLocaleString() + '<br><span class="model-pct">' + m.pct + '%</span></div>' +
                '</div>';
            }).join('');
        }

        // 热门会话
        var topSessions = document.getElementById('topSessions');
        if (topSessions) {
            topSessions.innerHTML = '<table class="tasks-table"><thead><tr>' +
                '<th style="width:50px;text-align:center">#</th>' +
                '<th>会话标题</th><th>Tokens</th><th>调用次数</th><th>日期</th>' +
            '</tr></thead><tbody>' +
            data.topSessions.map(function(s, i) {
                return '<tr><td class="row-index">' + String(i+1).padStart(2,'0') + '</td>' +
                    '<td class="task-name">' + escapeHtml(s.title) + '</td>' +
                    '<td>' + s.tokens.toLocaleString() + '</td>' +
                    '<td>' + s.calls + '</td>' +
                    '<td>' + s.date + '</td></tr>';
            }).join('') +
            '</tbody></table>';
        }
    }

    // ========== 页面: 记忆图谱 ==========
    function renderMemoryPage() {
        var data = DEMO_DATA.memory;
        var container = document.getElementById('graphContainer');
        if (!container) return;

        var loading = document.getElementById('graphLoading');
        var error = document.getElementById('graphError');

        if (loading) loading.style.display = 'none';
        if (error) {
            var msg = document.getElementById('errorMessage');
            if (msg) msg.innerHTML = '记忆图谱演示模式。<br>真实图谱需要连接 Brain-Graph 后端服务。<br>当前显示 demo 统计信息。';
            error.classList.remove('visible');
        }

        // 在容器中显示 demo 统计
        container.innerHTML =
            '<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:24px;padding:40px;">' +
                '<div style="font-size:4rem;">🧠</div>' +
                '<h2 style="color:#e2e8f0;margin:0;">记忆知识图谱</h2>' +
                '<p style="color:#94a3b8;text-align:center;max-width:500px;line-height:1.7;">' +
                    '演示模式：真实图谱需要 Brain-Graph 后端服务。<br>' +
                    '以下是 demo 统计信息：' +
                '</p>' +
                '<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:20px;width:100%;max-width:600px;">' +
                    '<div style="background:rgba(30,41,59,0.6);border:1px solid rgba(51,65,85,0.6);border-radius:14px;padding:20px;text-align:center;">' +
                        '<div style="font-size:2rem;font-weight:700;color:#a5b4fc;">' + data.totalFacts.toLocaleString() + '</div>' +
                        '<div style="font-size:0.8rem;color:#64748b;margin-top:4px;">Facts</div>' +
                    '</div>' +
                    '<div style="background:rgba(30,41,59,0.6);border:1px solid rgba(51,65,85,0.6);border-radius:14px;padding:20px;text-align:center;">' +
                        '<div style="font-size:2rem;font-weight:700;color:#a5b4fc;">' + data.totalEntities + '</div>' +
                        '<div style="font-size:0.8rem;color:#64748b;margin-top:4px;">Entities</div>' +
                    '</div>' +
                    '<div style="background:rgba(30,41,59,0.6);border:1px solid rgba(51,65,85,0.6);border-radius:14px;padding:20px;text-align-center;">' +
                        '<div style="font-size:2rem;font-weight:700;color:#a5b4fc;">' + data.categories.length + '</div>' +
                        '<div style="font-size:0.8rem;color:#64748b;margin-top:4px;">Categories</div>' +
                    '</div>' +
                '</div>' +
                '<div style="color:#475569;font-size:0.78rem;margin-top:12px;">💡 对接后端后可在 iframe 中显示完整的交互式图谱</div>' +
            '</div>';
    }

    // ========== 路由初始化 ==========
    var path = window.location.pathname.split('/').pop();
    console.log('🚀 Hermes Dashboard Lite initialized:', path || 'index.html');

    if (path === '' || path === 'index.html') renderIndexPage();
    else if (path === 'agents.html') renderAgentsPage();
    else if (path === 'tasks.html') renderTasksPage();
    else if (path === 'skills.html') renderSkillsPage();
    else if (path === 'pipeline.html') renderPipelinePage();
    else if (path === 'token.html') renderTokenPage();
    else if (path === 'memory.html') renderMemoryPage();

    window.app = { refreshAll: window.refreshAll, demoDisabled: demoDisabled };
})();

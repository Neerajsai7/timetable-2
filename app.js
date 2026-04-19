// app.js
// V7: Fatigue Control, Confidence Scoring, Weak Area Analytics, Dual Pipeline

const container = document.getElementById('days-container');
const MAX_DAILY_EFFORT = 6; // Set to 6 hours max deep work per day

let appState = JSON.parse(localStorage.getItem('v7State')) || { 
    startDate: null, progress: {}, lastLogin: null 
};

// Global state for which tab is currently active
let activeTab = 'main'; 

function getTodayString() { 
    const d = new Date(); 
    return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`; 
}

function daysBetween(date1, date2) { return Math.floor((new Date(date2) - new Date(date1)) / (1000 * 60 * 60 * 24)); }

// Calculate effort expended *today* across ALL pipelines
function getTodayEffort() {
    let todayEffort = 0;
    const today = getTodayString();
    for (const key in appState.progress) {
        if (appState.progress[key].completedAt === today) {
            todayEffort += appState.progress[key].effort || 1;
        }
    }
    return todayEffort;
}

function switchTab(tabName) {
    activeTab = tabName;
    document.getElementById('btn-main').classList.toggle('active', tabName === 'main');
    document.getElementById('btn-foundations').classList.toggle('active', tabName === 'foundations');
    renderApp();
}

function init() {
    const today = getTodayString();
    if (!appState.startDate) appState.startDate = today;
    appState.lastLogin = today; saveState();
    
    function updateClock() {
        document.getElementById('date-display').innerText = `System Time: ${new Date().toLocaleTimeString()} | ${today}`;
    }
    setInterval(updateClock, 1000); 
    updateClock();

    renderApp();
}

function saveState() { localStorage.setItem('v7State', JSON.stringify(appState)); }

function renderApp() {
    const todayStr = getTodayString();
    const calendarDay = daysBetween(appState.startDate, todayStr) + 1;
    const todayEffort = getTodayEffort(); // Global fatigue
    
    container.innerHTML = '';
    let totalConfidence = 0; let confidenceCount = 0; let weakAreas = [];

    // Determine which array to render based on the active tab
    const currentDataPath = activeTab === 'main' ? learningPath : foundationalPath;
    const idPrefix = activeTab === 'main' ? 'main' : 'found'; // Crucial to prevent ID collision in localStorage

    currentDataPath.forEach((dayData) => {
        const card = document.createElement('div'); card.className = 'day-card';
        
        let status = 'active'; 
        let badgeColor = activeTab === 'main' ? 'var(--accent)' : 'var(--project)'; // Purple badge for foundations

        if (dayData.day === calendarDay) { card.style.borderColor = 'var(--success)'; card.style.boxShadow = '0 0 15px rgba(16, 185, 129, 0.1)'; }

        const header = document.createElement('div'); header.className = 'day-header';
        header.innerHTML = `<h3><span class="day-badge" style="background-color: ${badgeColor};">Day ${dayData.day}</span> ${dayData.topic}</h3>`;
        
        header.addEventListener('click', () => { card.classList.toggle('active'); });

        const subList = document.createElement('div'); subList.className = 'subtopics-list';

        dayData.subtopics.forEach((sub, i) => {
            // Uniquely identify the task so Math Day 1 doesn't overwrite Java Day 1
            const taskId = `${idPrefix}-day${dayData.day}-task${i}`;
            
            // Legacy check: If you already started V7 before this update, preserve old main tasks
            const legacyId = `day${dayData.day}-task${i}`;
            if (activeTab === 'main' && appState.progress[legacyId] && !appState.progress[taskId]) {
                appState.progress[taskId] = appState.progress[legacyId];
                delete appState.progress[legacyId];
                saveState();
            }

            const taskData = appState.progress[taskId];
            const isChecked = taskData ? 'checked' : '';
            
            const difficulty = sub.difficulty || 'easy';
            const type = sub.type || 'theory';
            let effortVal = difficulty === 'hard' ? 3 : difficulty === 'medium' ? 2 : 1;
            
            let diffClass = difficulty === 'hard' ? 'diff-hard' : difficulty === 'medium' ? 'diff-med' : 'diff-easy';
            let typeTag = type === 'project' ? `<span class="diff-tag type-project">⚙️ PROJECT</span>` : '';
            let linkHTML = sub.url ? `<a href="${sub.url}" target="_blank" class="inline-link">📖 Study / Watch</a>` : '';

            const item = document.createElement('div'); item.className = 'subtopic-item';
            
            item.innerHTML = `
                <div class="task-main-row">
                    <input type="checkbox" id="${taskId}" ${isChecked}>
                    <label for="${taskId}" class="task-label ${isChecked ? 'completed-text' : ''}">
                        ${sub.title} 
                        <span class="diff-tag ${diffClass}">${difficulty} (${effortVal}h)</span>
                        ${typeTag}
                    </label>
                    ${linkHTML}
                </div>
                <div class="confidence-panel ${isChecked ? 'visible' : ''}" id="conf-${taskId}">
                    <span style="font-size: 0.85rem; color: var(--text-muted);">Confidence Score:</span>
                    ${[1,2,3,4,5].map(num => `<button class="conf-btn ${taskData && taskData.confidence === num ? 'selected' : ''}" data-val="${num}">${num}</button>`).join('')}
                </div>
            `;

            if (taskData && taskData.confidence > 0) {
                totalConfidence += taskData.confidence;
                confidenceCount++;
                if (taskData.confidence <= 2) weakAreas.push(sub.title);
            }

            item.querySelector('input').addEventListener('change', (e) => {
                if (e.target.checked) {
                    appState.progress[taskId] = { completedAt: getTodayString(), effort: effortVal, confidence: 0 };
                } else {
                    delete appState.progress[taskId];
                }
                saveState(); renderApp(); 
            });

            const confBtns = item.querySelectorAll('.conf-btn');
            confBtns.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const val = parseInt(e.target.getAttribute('data-val'));
                    appState.progress[taskId].confidence = val;
                    saveState(); renderApp();
                });
            });

            subList.appendChild(item);
        });
        
        card.appendChild(header); card.appendChild(subList); container.appendChild(card);
    });

    updateAnalytics(todayEffort, totalConfidence, confidenceCount, weakAreas);
}

function updateAnalytics(effort, totalConf, confCount, weakAreas) {
    const fatigueBar = document.getElementById('fatigue-bar');
    const effortText = document.getElementById('effort-display');
    const warningText = document.getElementById('fatigue-warning');
    
    let effortPercent = (effort / MAX_DAILY_EFFORT) * 100;
    if (effortPercent > 100) effortPercent = 100;
    
    fatigueBar.style.width = `${effortPercent}%`;
    effortText.innerText = `${effort} / ${MAX_DAILY_EFFORT} Hrs`;
    
    fatigueBar.className = 'fatigue-bar-fill';
    if (effort >= MAX_DAILY_EFFORT) {
        fatigueBar.classList.add('fatigue-danger');
        warningText.innerText = "🛑 BURNOUT LIMIT REACHED. Stop coding. Rest your brain.";
        warningText.style.color = "var(--danger)";
    } else if (effort >= MAX_DAILY_EFFORT - 2) {
        fatigueBar.classList.add('fatigue-warn');
        warningText.innerText = "⚠️ High cognitive load. Proceed with caution.";
        warningText.style.color = "var(--warning)";
    } else {
        fatigueBar.classList.add('fatigue-safe');
        warningText.innerText = "Deep work capacity healthy.";
        warningText.style.color = "var(--text-muted)";
    }

    const avgConf = confCount === 0 ? 0 : (totalConf / confCount).toFixed(1);
    document.getElementById('confidence-display').innerHTML = `${avgConf} <span style="font-size: 1rem; color: var(--text-muted);">Avg Confidence</span>`;

    const weakContainer = document.getElementById('weak-areas-container');
    if (weakAreas.length === 0) {
        weakContainer.innerHTML = `<span style="font-size: 0.9rem; color: var(--text-muted);">No weak areas detected in this track.</span>`;
    } else {
        weakContainer.innerHTML = weakAreas.map(w => `<span class="weak-area-tag">⚠️ ${w}</span>`).join('');
    }
}

init();

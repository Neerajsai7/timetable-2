document.addEventListener('DOMContentLoaded', () => {
    const LOCAL_STORAGE_KEY = 'ai_roadmap_progress_v2'; // Changed key to reset old states
    let progressState = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || {};
    
    const treeContainer = document.getElementById('roadmap-tree');
    const searchInput = document.getElementById('search-input');
    
    // --- Initialization & Rendering --- //

    function init() {
        renderTree(roadmapData, treeContainer, 'root');
        updateProgressUI();
        attachEventListeners();
    }

    // Recursively render the tree DOM
    function renderTree(nodes, parentElement, parentPath) {
        nodes.forEach((node, index) => {
            const currentPath = `${parentPath}-${index}`;
            const isCompleted = progressState[currentPath] || false;
            const hasChildren = node.children && node.children.length > 0;

            // Create node wrapper
            const nodeDiv = document.createElement('div');
            nodeDiv.className = 'node';
            nodeDiv.dataset.path = currentPath;
            nodeDiv.dataset.title = node.title.toLowerCase();
            if (node.description) nodeDiv.dataset.desc = node.description.toLowerCase();

            // Create content row
            const contentDiv = document.createElement('div');
            contentDiv.className = 'node-content';

            // Expand/Collapse Button (Soft arrows)
            const toggleBtn = document.createElement('button');
            toggleBtn.className = 'toggle-btn';
            if (hasChildren) {
                toggleBtn.innerHTML = '▶';
                toggleBtn.onclick = (e) => {
                    e.stopPropagation();
                    toggleExpand(currentPath, toggleBtn);
                };
            } else {
                toggleBtn.innerHTML = '•';
                toggleBtn.style.cursor = 'default';
            }
            contentDiv.appendChild(toggleBtn);

            // Checkbox
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.className = 'checkbox';
            checkbox.checked = isCompleted;
            checkbox.dataset.path = currentPath;
            contentDiv.appendChild(checkbox);

            // Text content
            const textDiv = document.createElement('div');
            textDiv.className = 'node-text';
            
            const titleSpan = document.createElement('div');
            titleSpan.className = `node-title ${isCompleted ? 'completed' : ''}`;
            titleSpan.textContent = node.title;
            textDiv.appendChild(titleSpan);

            if (node.description) {
                const descSpan = document.createElement('div');
                descSpan.className = 'node-desc';
                descSpan.textContent = node.description;
                textDiv.appendChild(descSpan);
            }

            // Project metadata if exists
            if (node.difficulty || node.tech || node.time) {
                const metaSpan = document.createElement('div');
                metaSpan.className = 'node-meta';
                metaSpan.textContent = `${node.difficulty} • ${node.tech} • ${node.time}`;
                textDiv.appendChild(metaSpan);
            }

            contentDiv.appendChild(textDiv);
            nodeDiv.appendChild(contentDiv);

            // Children container
            if (hasChildren) {
                const childrenDiv = document.createElement('div');
                childrenDiv.className = 'children-container';
                childrenDiv.id = `children-${currentPath}`;
                renderTree(node.children, childrenDiv, currentPath);
                nodeDiv.appendChild(childrenDiv);
            }

            parentElement.appendChild(nodeDiv);
        });
    }

    // --- Interaction Logic --- //

    function toggleExpand(path, btnElement) {
        const childrenDiv = document.getElementById(`children-${path}`);
        
        const isExpanded = childrenDiv && childrenDiv.classList.contains('expanded');
        
        if (isExpanded) {
            if(childrenDiv) childrenDiv.classList.remove('expanded');
            btnElement.innerHTML = '▶';
        } else {
            if(childrenDiv) childrenDiv.classList.add('expanded');
            btnElement.innerHTML = '▼';
        }
    }

    function attachEventListeners() {
        treeContainer.addEventListener('change', (e) => {
            if (e.target.classList.contains('checkbox')) {
                const path = e.target.dataset.path;
                const isChecked = e.target.checked;
                handleCheck(path, isChecked);
            }
        });

        document.getElementById('btn-expand-all').onclick = () => setAllExpanded(true);
        document.getElementById('btn-collapse-all').onclick = () => setAllExpanded(false);
        document.getElementById('btn-check-all').onclick = () => setAllChecked(true);
        document.getElementById('btn-uncheck-all').onclick = () => setAllChecked(false);
        
        document.getElementById('btn-reset').onclick = () => {
            if(confirm("Are you sure you want to reset all progress?")) {
                progressState = {};
                saveState();
                document.querySelectorAll('.checkbox').forEach(cb => {
                    cb.checked = false;
                    updateTitleStyle(cb.dataset.path, false);
                });
                updateProgressUI();
            }
        };

        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();
            handleSearch(query);
        });
    }

    // --- State & Checkbox Cascade Logic --- //

    function handleCheck(path, isChecked) {
        // 1. Update self
        updateNodeState(path, isChecked);

        // 2. Cascade down to children
        const childrenContainer = document.getElementById(`children-${path}`);
        if (childrenContainer) {
            const childCheckboxes = childrenContainer.querySelectorAll('.checkbox');
            childCheckboxes.forEach(cb => {
                cb.checked = isChecked;
                updateNodeState(cb.dataset.path, isChecked);
            });
        }

        // 3. Bubble up to ancestors
        bubbleUp(path);

        saveState();
        updateProgressUI();
    }

    function bubbleUp(path) {
        const segments = path.split('-');
        segments.pop(); 
        
        if (segments.length < 2) return; 
        
        const parentPath = segments.join('-');
        const parentContainer = document.getElementById(`children-${parentPath}`);
        
        if (parentContainer) {
            const siblingCheckboxes = Array.from(parentContainer.querySelectorAll(`:scope > .node > .node-content > .checkbox`));
            const allChecked = siblingCheckboxes.length > 0 && siblingCheckboxes.every(cb => cb.checked);
            
            const parentCheckbox = document.querySelector(`.checkbox[data-path="${parentPath}"]`);
            if (parentCheckbox && parentCheckbox.checked !== allChecked) {
                parentCheckbox.checked = allChecked;
                updateNodeState(parentPath, allChecked);
                bubbleUp(parentPath); 
            }
        }
    }

    function updateNodeState(path, isChecked) {
        if (isChecked) {
            progressState[path] = true;
        } else {
            delete progressState[path];
        }
        updateTitleStyle(path, isChecked);
    }

    function updateTitleStyle(path, isChecked) {
        const nodeDiv = document.querySelector(`.node[data-path="${path}"]`);
        if (nodeDiv) {
            const title = nodeDiv.querySelector('.node-title');
            if (isChecked) {
                title.classList.add('completed');
            } else {
                title.classList.remove('completed');
            }
        }
    }

    function saveState() {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(progressState));
    }

    // --- Global Controls --- //

    function setAllExpanded(expand) {
        const containers = document.querySelectorAll('.children-container');
        const btns = document.querySelectorAll('.toggle-btn');
        
        containers.forEach(c => {
            if (expand) c.classList.add('expanded');
            else c.classList.remove('expanded');
        });
        
        btns.forEach(btn => {
            if (btn.innerHTML === '▶' || btn.innerHTML === '▼') {
                btn.innerHTML = expand ? '▼' : '▶';
            }
        });
    }

    function setAllChecked(check) {
        document.querySelectorAll('.checkbox').forEach(cb => {
            cb.checked = check;
            updateNodeState(cb.dataset.path, check);
        });
        saveState();
        updateProgressUI();
    }

    // --- Search --- //

    function handleSearch(query) {
        const allNodes = document.querySelectorAll('.node');
        
        if (query === '') {
            allNodes.forEach(node => {
                node.classList.remove('hidden');
            });
            return;
        }

        allNodes.forEach(node => node.classList.add('hidden'));

        allNodes.forEach(node => {
            const title = node.dataset.title || '';
            const desc = node.dataset.desc || '';
            
            if (title.includes(query) || desc.includes(query)) {
                // Show matching node
                node.classList.remove('hidden');
                
                // Show all ancestors & expand them
                let current = node.parentElement;
                while (current && current.id !== 'roadmap-tree') {
                    if (current.classList.contains('node')) {
                        current.classList.remove('hidden');
                    }
                    if (current.classList.contains('children-container')) {
                        current.classList.add('expanded');
                        const toggleBtn = current.parentElement.querySelector('.toggle-btn');
                        if(toggleBtn && toggleBtn.innerHTML !== '•') toggleBtn.innerHTML = '▼';
                    }
                    current = current.parentElement;
                }
            }
        });
    }

    // --- Progress Calculation --- //

    function updateProgressUI() {
        const rootNodes = roadmapData;
        let totalLeafNodes = 0;
        let completedLeafNodes = 0;
        
        const catProgressContainer = document.getElementById('category-progress-container');
        catProgressContainer.innerHTML = '';

        rootNodes.forEach((rootNode, index) => {
            const rootPath = `root-${index}`;
            const stats = calculateNodeStats(rootPath);
            
            totalLeafNodes += stats.total;
            completedLeafNodes += stats.completed;

            const catPercent = stats.total === 0 ? 0 : Math.round((stats.completed / stats.total) * 100);
            
            const catDiv = document.createElement('div');
            catDiv.innerHTML = `<strong>${rootNode.title}</strong><br>${catPercent}% (${stats.completed}/${stats.total})`;
            catProgressContainer.appendChild(catDiv);
        });

        const overallPercent = totalLeafNodes === 0 ? 0 : Math.round((completedLeafNodes / totalLeafNodes) * 100);
        document.getElementById('overall-percentage').textContent = `${overallPercent}% (${completedLeafNodes} / ${totalLeafNodes})`;
        document.getElementById('overall-bar').style.width = `${overallPercent}%`;
    }

    function calculateNodeStats(path) {
        const nodeElement = document.querySelector(`.node[data-path="${path}"]`);
        if (!nodeElement) return { total: 0, completed: 0 };

        const childrenContainer = document.getElementById(`children-${path}`);
        if (!childrenContainer) {
            // It's a leaf node
            const checkbox = nodeElement.querySelector('.checkbox');
            return {
                total: 1,
                completed: checkbox.checked ? 1 : 0
            };
        }

        // It's a parent, sum up children stats
        let total = 0;
        let completed = 0;
        const childNodes = childrenContainer.querySelectorAll(`:scope > .node`);
        childNodes.forEach(child => {
            const stats = calculateNodeStats(child.dataset.path);
            total += stats.total;
            completed += stats.completed;
        });

        return { total, completed };
    }

    // Boot
    init();
});

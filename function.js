const LS_NAMES = 'roller_names_v1';
const LS_TASKS = 'roller_tasks_v1';
let names = loadFromLS(LS_NAMES) || ['Bishal', 'Anish', 'Nabin'];
let tasks = loadFromLS(LS_TASKS) || ['Dare', 'Do 10 push-ups', 'Tell a joke'];

const wheelEl = document.getElementById('wheel');
const startSound = document.getElementById('startSound');
const endSound = document.getElementById('endSound');

let currentRotation = 0;
let isSpinning = false;

function loadFromLS(key) {
    try {
        const v = localStorage.getItem(key);
        return v ? JSON.parse(v) : null
    } catch (e) {
        return null
    }
}
function saveToLS(key, val) {
    try {
        localStorage.setItem(key, JSON.stringify(val))
    } catch (e) { }
}

function renderBadges(list, container) {
    container.innerHTML = '';
    list.forEach((it, i) => {
        const span = document.createElement('span');
        span.className = 'badge rounded-pill bg-white text-dark';
        span.textContent = it;
        span.style.cursor = 'pointer';
        span.onclick = () => {
            if (confirm('Remove ' + it + '?')) {
                list.splice(i, 1); saveAndRender();
                buildWheel();
            }
        };
        container.appendChild(span);
    });
}

function saveAndRender() {
    saveToLS(LS_NAMES, names); saveToLS(LS_TASKS, tasks);
    renderBadges(names, document.getElementById('nameList'));
    renderBadges(tasks, document.getElementById('taskList'));
}

function buildWheel(items = names) {
    if (!items.length) {
        wheelEl.style.background = 'conic-gradient(#333,#444)';
        return;
    }
    const n = items.length, stops = [];
    for (let i = 0; i < n; i++) {
        const hue = Math.round((i * (360 / n)) % 360);
        const color = `hsl(${hue} 70% 55%)`;
        const s = (i * (360 / n)).toFixed(2);
        const e = ((i + 1) * (360 / n)).toFixed(2);
        stops.push(`${color} ${s}deg ${e}deg`);
    }
    wheelEl.style.background = `conic-gradient(${stops.join(',')})`;
}

function playSound(audio) { audio.currentTime = 0; audio.play().catch(() => { }); }

function spinWheelFor(items, onComplete) {
    if (isSpinning) return;
    if (!items.length) return alert('Add items first!');
    isSpinning = true;
    playSound(startSound);
    const n = items.length;
    const chosenIndex = Math.floor(Math.random() * n);
    const segmentAngle = 360 / n;
    const spins = Math.floor(Math.random() * 4) + 4;
    const target = spins * 360 + (90 - (chosenIndex * segmentAngle + segmentAngle / 2));
    wheelEl.style.transition = 'transform 4s cubic-bezier(.17,.8,.25,1)';
    currentRotation = (currentRotation + target) % 36000;
    wheelEl.style.transform = `rotate(${currentRotation}deg)`;
    wheelEl.addEventListener('transitionend', function handler() {
        wheelEl.removeEventListener('transitionend', handler);
        setTimeout(() => { playSound(endSound); isSpinning = false; onComplete(items[chosenIndex]); }, 100);
    });
}

document.getElementById('addNameBtn').onclick = () => {
    const v = nameInput.value.trim();
    if (v) {
        names.push(v);
        nameInput.value = '';
        saveAndRender(); buildWheel(names);
    }
};
document.getElementById('addTaskBtn').onclick = () => {
    const v = taskInput.value.trim();
    if (v) {
        tasks.push(v);
        taskInput.value = '';
        saveAndRender();
    }
};
document.getElementById('clearNames').onclick = () => {
    if (confirm('Clear all names?')) {
        names = []; saveAndRender();
        buildWheel(names); selectedName.textContent = '—';
    }
};
document.getElementById('clearTasks').onclick = () => {
    if (confirm('Clear all tasks?')) {
        tasks = []; saveAndRender();
        selectedTask.textContent = '—';
    }
};

document.getElementById('spinNameBtn').onclick = () => {
    buildWheel(names); spinWheelFor(names, (v) => {
        selectedName.textContent = v;
    });
};
document.getElementById('spinTaskBtn').onclick = () => {
    buildWheel(tasks); spinWheelFor(tasks, (v) => {
        selectedTask.textContent = v;
    });
};

saveAndRender(); buildWheel(names);
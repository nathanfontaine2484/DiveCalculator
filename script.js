const noStopLimits = [
    { depth: 10, limit: 'Unlimited' },
    { depth: 15, limit: 'Unlimited' },
    { depth: 20, limit: 'Unlimited' },
    { depth: 25, limit: 1102 },
    { depth: 30, limit: 371 },
    { depth: 35, limit: 232 },
    { depth: 40, limit: 163 },
    { depth: 45, limit: 125 },
    { depth: 50, limit: 92 },
    { depth: 55, limit: 74 },
    { depth: 60, limit: 63 },
    { depth: 70, limit: 48 },
    { depth: 80, limit: 39 },
    { depth: 90, limit: 33 },
    { depth: 100, limit: 25 },
    { depth: 110, limit: 20 },
    { depth: 120, limit: 15 },
    { depth: 130, limit: 12 },
    { depth: 140, limit: 10 },
    { depth: 150, limit: 8 },
    { depth: 160, limit: 7 },
    { depth: 170, limit: 6 },
    { depth: 180, limit: 6 },
    { depth: 190, limit: 5 }
];

const rgdData = {
    10: { times: [57, 101, 158, 245, 426], designations: ["A", "B", "C", "D", "E"] },
    15: { times: [36, 60, 88, 121, 163, 217, 297, 449], designations: ["A", "B", "C", "D", "E", "F", "G", "H"] },
    20: { times: [26, 43, 61, 82, 106, 133, 165, 205, 256, 330, 461], designations: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"] },
    25: { times: [20, 33, 47, 62, 78, 97, 117, 140, 166, 198, 236, 285, 354, 469], designations: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N"] },
    30: { times: [17, 27, 38, 50, 62, 76, 91, 107, 125, 145, 167, 193, 223, 260, 307], designations: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O"] },
    35: { times: [14, 23, 32, 42, 52, 63, 74, 87, 100, 115, 131, 148, 168, 190], designations: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N"] },
    40: { times: [12, 20, 27, 36, 44, 53, 63, 73, 84, 95, 108, 121, 135], designations: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M"] },
    50: { times: [9, 15, 21, 28, 34, 41, 48, 56, 63, 71, 80, 89, 92], designations: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M"] },
    60: { times: [7, 12, 17, 22, 28, 33, 39, 45, 51, 57, 63], designations: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"] },
    70: { times: [6, 10, 14, 19, 23, 28, 32, 37, 42, 47], designations: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"] },
    80: { times: [5, 9, 12, 16, 20, 24, 28, 32, 36], designations: ["A", "B", "C", "D", "E", "F", "G", "H", "I"] },
    90: { times: [4, 7, 11, 14, 17, 21, 24, 28, 31], designations: ["A", "B", "C", "D", "E", "F", "G", "H", "I"] },
    100: { times: [4, 6, 9, 12, 15, 18, 21, 25], designations: ["A", "B", "C", "D", "E", "F", "G", "H"] },
    110: { times: [3, 6, 8, 11, 14, 16, 19, 20], designations: ["A", "B", "C", "D", "E", "F", "G", "H"] },
    120: { times: [3, 5, 7, 10, 12, 15], designations: ["A", "B", "C", "D", "E", "F"] },
    130: { times: [2, 4, 6, 9, 11, 12], designations: ["A", "B", "C", "D", "E", "F"] },
    140: { times: [2, 4, 6, 8, 10], designations: ["A", "B", "C", "D", "E"] },
    150: { times: [3, 5, 7, 8], designations: ["B", "C", "D", "E"] },
    160: { times: [3, 5, 6, 7], designations: ["B", "C", "D", "E"] },
    170: { times: [4, 6], designations: ["C", "D"] },
    180: { times: [4, 5, 6], designations: ["C", "D", "E"] },
    190: { times: [3, 5], designations: ["C", "D"] }
};

let elapsedMilliseconds = 0;
let interval;

const timerElement = document.getElementById('timer');
const startButton = document.getElementById('startButton');
const tableBody = document.getElementById('tableBody');

function formatTime(milliseconds) {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60).toString().padStart(2, '0');
    const seconds = (totalSeconds % 60).toString().padStart(2, '0');
    const millis = (milliseconds % 1000).toString().padStart(3, '0').slice(0, 2);
    return `${minutes}:${seconds}.${millis}`;
}

function getRepetitiveGroup(depth, time) {
    if (!rgdData[depth]) return "N/A";
    const { times, designations } = rgdData[depth];
    for (let i = 0; i < times.length; i++) {
        if (time <= times[i]) return designations[i];
    }
    return designations[designations.length - 1];
}

function updateTable() {
    tableBody.innerHTML = '';
    noStopLimits.forEach(row => {
        const tr = document.createElement('tr');

        const depthTd = document.createElement('td');
        depthTd.textContent = row.depth;
        tr.appendChild(depthTd);

        const originalLimitTd = document.createElement('td');
        originalLimitTd.textContent = row.limit;
        tr.appendChild(originalLimitTd);

        const dynamicLimitTd = document.createElement('td');
        let remainingTime;
        if (row.limit === 'Unlimited') {
            dynamicLimitTd.textContent = 'Unlimited';
            dynamicLimitTd.className = 'green';
            remainingTime = null;
        } else {
            remainingTime = row.limit - Math.floor(elapsedMilliseconds / 60000);
            if (remainingTime > 0) {
                dynamicLimitTd.textContent = remainingTime;
                if (remainingTime / row.limit <= 0.25) {
                    dynamicLimitTd.className = 'red';
                } else if (remainingTime / row.limit <= 0.5) {
                    dynamicLimitTd.className = 'orange';
                } else {
                    dynamicLimitTd.className = 'green';
                }
            } else {
                dynamicLimitTd.textContent = 'Exceeded: See In-Water Stops';
                dynamicLimitTd.className = 'exceeded';
                remainingTime = 0;
            }
        }
        tr.appendChild(dynamicLimitTd);

        const rgdTd = document.createElement('td');
        const elapsedMinutes = Math.floor(elapsedMilliseconds / 60000);
        rgdTd.textContent = remainingTime !== null ? getRepetitiveGroup(row.depth, elapsedMinutes) : 'N/A';
        tr.appendChild(rgdTd);

        tableBody.appendChild(tr);
    });
}

function startTimer() {
    startButton.textContent = 'Active';
    startButton.disabled = true;

    interval = setInterval(() => {
        elapsedMilliseconds += 10;
        timerElement.textContent = formatTime(elapsedMilliseconds);
        updateTable();
    }, 10); // Updates every 10 milliseconds
}

startButton.addEventListener('click', startTimer);

// Initial Table Load
updateTable();

// Elements
const depthSelect = document.getElementById('depthSelect');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const timerElement = document.getElementById('timer');
const tableBody = document.getElementById('tableBody');

// Variables
let elapsedMilliseconds = 0;
let interval;
const noStopLimits = [
    { depth: 10, limit: 'Unlimited' },
    { depth: 15, limit: 'Unlimited' },
    { depth: 20, limit: 'Unlimited' },
    { depth: 25, limit: 1102 },
    { depth: 30, limit: 371 },
    { depth: 35, limit: 232 },
    { depth: 40, limit: 163 },
    { depth: 50, limit: 92 },
    { depth: 60, limit: 63 },
    { depth: 70, limit: 48 },
    { depth: 80, limit: 39 },
    { depth: 90, limit: 33 },
    { depth: 100, limit: 25 },
    { depth: 110, limit: 20 },
    { depth: 120, limit: 15 },
    { depth: 130, limit: 12 },
    { depth: 140, limit: 10 },
    { depth: 150, limit: 8 },
    { depth: 160, limit: 7 },
    { depth: 170, limit: 6 },
    { depth: 180, limit: 6 },
    { depth: 190, limit: 5 }
];

// Functions
function formatTime(milliseconds) {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60).toString().padStart(2, '0');
    const seconds = (totalSeconds % 60).toString().padStart(2, '0');
    const millis = (milliseconds % 1000).toString().padStart(3, '0').slice(0, 2);
    return `${minutes}:${seconds}.${millis}`;
}

function populateDepthDropdown() {
    for (let i = 1; i <= 190; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = `${i} ft`;
        depthSelect.appendChild(option);
    }
}

function highlightRow(depth) {
    const rows = tableBody.getElementsByTagName('tr');
    let highlighted = false;

    for (let row of rows) {
        const rowDepth = parseInt(row.children[0].textContent, 10);
        if (!highlighted && rowDepth >= depth) {
            row.classList.add('highlight');
            highlighted = true;
        } else {
            row.classList.remove('highlight');
        }
    }
}

function updateTable() {
    tableBody.innerHTML = '';
    noStopLimits.forEach(row => {
        const tr = document.createElement('tr');

        const depthTd = document.createElement('td');
        depthTd.textContent = row.depth;
        tr.appendChild(depthTd);

        const originalLimitTd = document.createElement('td');
        originalLimitTd.textContent = row.limit;
        tr.appendChild(originalLimitTd);

        const dynamicLimitTd = document.createElement('td');
        dynamicLimitTd.textContent = row.limit === 'Unlimited' ? 'Unlimited' : row.limit - Math.floor(elapsedMilliseconds / 60000);
        tr.appendChild(dynamicLimitTd);

        const rgdTd = document.createElement('td');
        rgdTd.textContent = 'N/A'; // Placeholder for RGD
        tr.appendChild(rgdTd);

        tableBody.appendChild(tr);
    });
}

function startTimer() {
    startButton.disabled = true;
    stopButton.disabled = false;
    interval = setInterval(() => {
        elapsedMilliseconds += 100;
        timerElement.textContent = formatTime(elapsedMilliseconds);
        updateTable();
    }, 100);
}

function stopTimer() {
    clearInterval(interval);
    stopButton.disabled = true;
    const confirmedDepth = prompt('Confirm the maximum depth reached (FSW):');
    if (confirmedDepth) {
        const pneumofactor = confirm('Was a Pneumofathometer correction factor of +1 FSW added?');
        const correction = pneumofactor ? '+1 FSW' : 'No correction';
        alert(`Dive Log:\nDepth: ${confirmedDepth} FSW\nCorrection Factor: ${correction}\nElapsed Time: ${formatTime(elapsedMilliseconds)}`);
        if (confirm('Start a surface interval timer?')) {
            elapsedMilliseconds = 0;
            interval = setInterval(() => {
                elapsedMilliseconds += 100;
                timerElement.textContent = formatTime(elapsedMilliseconds);
            }, 100);
        }
    }
}

// Event Listeners
depthSelect.addEventListener('change', () => {
    highlightRow(parseInt(depthSelect.value, 10));
});

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    populateDepthDropdown();
    updateTable();
});

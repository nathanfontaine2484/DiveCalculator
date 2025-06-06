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
    25: { times: [20, 33, 47, 62, 78, 97, 117, 140, 166, 198, 236, 285, 354, 469, 992, 1102], designations: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "Z"] },
    30: { times: [17, 27, 38, 50, 62, 76, 91, 107, 125, 145, 167, 193, 223, 260, 307, 371], designations: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "Z"] },
    35: { times: [14, 23, 32, 42, 52, 63, 74, 87, 100, 115, 131, 148, 168, 190, 215], designations: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O"] },
    40: { times: [12, 20, 27, 36, 44, 53, 63, 73, 84, 95, 108, 121, 135], designations: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M"] },
    45: { times: [11, 17, 24, 31, 39, 46, 55, 63, 72, 82, 92, 102, 114, 125], designations: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N"] },
    50: { times: [9, 15, 21, 28, 34, 41, 48, 56, 63, 71, 80, 89, 92], designations: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M"] },
    55: { times: [8, 14, 19, 25, 31, 37, 43, 50, 56, 63, 71, 74], designations: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"] },
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
    190: { times: [3, 5, 5.1], designations: ["C", "D", "E"] }
};

// Expose data on the global object so dive.html can access it without ES modules
window.noStopLimits = noStopLimits;
window.rgdData = rgdData;

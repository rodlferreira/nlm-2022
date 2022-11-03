"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertMinutesToHoursString = void 0;
function convertMinutesToHoursString(minutesAmount) {
    const hours = Math.floor(minutesAmount / 60);
    const minutes = minutesAmount % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
}
exports.convertMinutesToHoursString = convertMinutesToHoursString;

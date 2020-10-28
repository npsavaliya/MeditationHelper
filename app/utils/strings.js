import sounds from "../config/sounds";

export const soundsData = [
    { name: 'Deep Meditation', volume: 50, sound: sounds.deepMeditation, icon: 'buddhism', isSelected: true },
    { name: 'In The Light', volume: 50, sound: sounds.inTheLight, icon: 'blur', isSelected: false },
    { name: 'Quiet Time', volume: 50, sound: sounds.quietTime, icon: 'atom', isSelected: false },
    { name: 'Simplicity', volume: 50, sound: sounds.simplicity, icon: 'asterisk', isSelected: false },
    { name: 'Tranquility', volume: 50, sound: sounds.tranquility, icon: 'axis-arrow', isSelected: false },
];

export const timeData = [
    { id: '1', name: '5min', timeInMin: 5, isSelected: true },
    { id: '2', name: '10min', timeInMin: 10, isSelected: false },
    { id: '3', name: '15min', timeInMin: 15, isSelected: false },
    { id: '4', name: '20min', timeInMin: 20, isSelected: false },
    { id: '5', name: '30min', timeInMin: 30, isSelected: false },
    { id: '6', name: 'Select', timeInMin: 0, isSelected: false },
];

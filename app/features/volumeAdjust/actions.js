import * as types from './types';

export const setSounds = (sounds) => {
    return {
        type: types.SET_SOUNDS_LIST,
        sounds
    }
}

export const setTimerInMin = (timeInMin) => {
    return {
        type: types.SET_TIMER_IN_MIN,
        timeInMin
    }
}

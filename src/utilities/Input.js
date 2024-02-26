
export const Action = {
    Left: 'Left',
    FastDrop: 'FastDrop',
    Pause: 'Pause',
    Escape: 'Quit',
    Right: 'Right',
    Rotate: 'Rotate',
    SlowDrop: 'SlowDrop'
};

export const Key = {
    ArrowUp: Action.Rotate,
    ArrowDown: Action.SlowDrop,
    ArrowLeft: Action.Left,
    ArrowRight: Action.Right,
    KeyP: Action.Pause,
    Space: Action.FastDrop,
    Escape: Action.Escape,
};

export const actionForKey = (keyCode) => {
    return  Key[keyCode];
}

export const actionIsDrop = (action) =>
  [Action.SlowDrop, Action.FastDrop].includes(action);
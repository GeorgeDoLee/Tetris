
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
    KeyF: Action.Quit,
    KeyP: Action.Pause,
    Space: Action.FastDrop
};

export const actionForKey = (keyCode) => Key[keyCode];

export const actionIsDrop = (action) =>
  [Action.SlowDrop, Action.FastDrop].includes(action);
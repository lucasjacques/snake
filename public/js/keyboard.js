var moveKeys = {
        '37': 'left',
        '38' : 'up',
        '39': 'right',
        '40': 'down'
    },
    keys = {
        '16': 'shift',
        '27': 'esc',
        '107': 'numPlus',
        '109': 'numMinus',
        '187': 'equals',
        '189': 'minus'
    },
    shift = false,
    buffer = [],
    KeyBoard = {};

KeyBoard.keyPressed = function(key) {
    console.log(key.which);
    if (keys[key.which] === 'esc') {
        buffer = [];
    } else if ((keys[key.which] === 'numPlus' || (shift && keys[key.which] === 'equals')) && speed > 2 ) {
        speed--;
    } else if ((keys[key.which] === 'numMinus' || (shift && keys[key.which] === 'minus')) && speed < 10) {
        speed++;
    } else if (keys[key.which] === 'shift') {
        shift = true;
    } else if (snake.canGo(moveKeys[key.which]) && buffer[0] !== moveKeys[key.which]) {
        buffer.unshift(moveKeys[key.which]);
    }
};

KeyBoard.keyReleased = function(key) {
    if (keys[key.which] === 'shift') {
        shift = false;
    }
};

KeyBoard.update = function() {
    var next = buffer.pop();
    if (next) {
        snake.setDirection(next);
    }
};

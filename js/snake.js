var Snake = function() {

    var snake = {
            x: 0,
            y: 0,
            w: 50,
            h: 50,
            color: '#AAA',
            direction: 'right',
            tail: []
        },
        updateTail = function() {
            for (var i = 0; i < snake.tail.length; i++) {
                snake.tail[i].update();
            }
        },
        eat = function(x, y) {
            snake.tail.push(new Tail(x, y, snake.tail[snake.tail.length - 1] || snake, '#FFF'));
        },
        hitTail = function() {
            for (var i = 0; i < snake.tail.length; i++) {
                if (snake.x === snake.tail[i].x && snake.y === snake.tail[i].y) {
                    return true;
                }
            }
            return false;
        };

    snake.update = function() {
        switch (snake.direction) {
            case 'up':
                snake.y--;
                break;
            case 'right':
                snake.x++;
                break;
            case 'down':
                snake.y++;
                break;
            case 'left':
                snake.x--;
                break;
        }
        if (snake.x > horizontalTiles - 1) {
            snake.x = 0;
        } else if (snake.x < 0) {
            snake.x = horizontalTiles - 1;
        } else if (snake.y > verticalTiles - 1) {
            snake.y = 0;
        } else if (snake.y < 0) {
            snake.y = verticalTiles - 1;
        }
        updateTail();
        tiles.getTile(snake.x, snake.y).color = snake.color;
        if (snake.x === food.x && snake.y === food.y) {
            eat(snake.x, snake.y, snake.tail[snake.tail.length - 1] || snake);
            food.randomize();
        } else {
            if (hitTail()) {
                restart();
            }
        }
    };

    snake.canGo = function(direction) {
        return !((snake.direction === 'left' && direction === 'right')
            || (snake.direction === 'right' && direction === 'left')
            || (snake.direction === 'up' && direction === 'down')
            || (snake.direction === 'down' && direction === 'up'))
            && snake.direction !== direction;
    }

    snake.setDirection = function(direction) {
        if (snake.direction === 'left' && direction === 'right'
            || snake.direction === 'right' && direction === 'left'
            || snake.direction === 'up' && direction === 'down'
            || snake.direciton === 'down' && direction === 'up') {
                return;
            }
        snake.direction = direction;
    };

    return snake;
};

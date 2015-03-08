var Food = function() {

    var food = {
        x: utils.getRandomInt(0, horizontalTiles - 1),
        y: utils.getRandomInt(0, verticalTiles - 1),
        color: utils.getRandomColor(),
    };

    food.update = function() {
        tiles.getTile(food.x, food.y).color = food.color;
    };

    food.randomize = function() {
        food.x = utils.getRandomInt(0, horizontalTiles - 1);
        food.y = utils.getRandomInt(0, verticalTiles - 1);
        food.color = utils.getRandomColor();
    };

    return food;
}

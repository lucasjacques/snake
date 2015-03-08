var utils = {};

utils.getRandomInt = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

utils.getRandomColor = function() {
    return ['#F00', '#FF0', '#F0F', '#0F0', '#0FF', '#00F'][utils.getRandomInt(0, 5)];
};

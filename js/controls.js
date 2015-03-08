var Controls = function() {

    var controls = {
        up: {
            x: W - ((W / horizontalTiles) * 5),
            y: H - ((H / verticalTiles) * 7),
            w: (W / horizontalTiles) * 2,
            h: (H / verticalTiles) * 2,
            draw: function(ctx) {
                ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
                ctx.beginPath();
                ctx.moveTo(this.x, this.y + this.h);
                ctx.lineTo(this.x + this.w, this.y + this.h);
                ctx.lineTo(this.x + (this.w / 2), this.y);
                ctx.fill();
            },
            checkClick: function(x, y) {
                return x > this.x && x < this.x + this.w && y > this.y && y < this.y + this.h;
            },
            click: function() {
                KeyBoard.keyPressed({which: 38});
            }
        },
        right: {
            x: W - ((W / horizontalTiles) * 3),
            y: H - ((H / verticalTiles) * 5),
            w: (W / horizontalTiles) * 2,
            h: (H / verticalTiles) * 2,
            draw: function(ctx) {
                ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
                ctx.beginPath();
                ctx.moveTo(this.x, this.y);
                ctx.lineTo(this.x, this.y + this.h);
                ctx.lineTo(this.x + this.w, this. y + (this.h / 2));
                ctx.fill();
            },
            checkClick: function(x, y) {
                return x > this.x && x < this.x + this.w && y > this.y && y < this.y + this.h;
            },
            click: function() {
                KeyBoard.keyPressed({which: 39});
            }
        },
        down: {
            x: W - ((W / horizontalTiles) * 5),
            y: H - ((H / verticalTiles) * 3),
            w: (W / horizontalTiles) * 2,
            h: (H / verticalTiles) * 2,
            draw: function(ctx) {
                ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
                ctx.beginPath();
                ctx.moveTo(this.x, this.y);
                ctx.lineTo(this.x + this.w, this.y);
                ctx.lineTo(this.x + (this.w / 2), this.y + this.h);
                ctx.fill();
            },
            checkClick: function(x, y) {
                return x > this.x && x < this.x + this.w && y > this.y && y < this.y + this.h;
            },
            click: function() {
                KeyBoard.keyPressed({which: 40});
            }
        },
        left: {
            x: W - ((W / horizontalTiles) * 7),
            y: H - ((H / verticalTiles) * 5),
            w: (W / horizontalTiles) * 2,
            h: (H / verticalTiles) * 2,
            draw: function(ctx) {
                ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
                ctx.beginPath();
                ctx.moveTo(this.x + this.w, this.y);
                ctx.lineTo(this.x + this.w, this.y + this.h);
                ctx.lineTo(this.x, this. y + (this.h / 2));
                ctx.fill();
            },
            checkClick: function(x, y) {
                return x > this.x && x < this.x + this.w && y > this.y && y < this.y + this.h;
            },
            click: function() {
                KeyBoard.keyPressed({which: 37});
            }
        }
    }

    controls.draw = function(ctx) {
        controls.up.draw(ctx);
        controls.right.draw(ctx);
        controls.down.draw(ctx);
        controls.left.draw(ctx);
    };

    controls.checkClick = function(x, y) {
        if (controls.left.checkClick(x, y)) {
            controls.left.click();
        } else if (controls.right.checkClick(x, y)) {
            controls.right.click();
        } else if (controls.up.checkClick(x, y)) {
            controls.up.click();
        } else if (controls.down.checkClick(x, y)) {
            controls.down.click();
        }
    };

    return controls;
}

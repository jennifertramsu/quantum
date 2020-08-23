var canvas3 = document.getElementById('canvas3');
var canvas4 = document.getElementById('canvas4');

var ctx4 = canvas4.getContext('2d');

function drawLine() {
    ctx4.moveTo(canvas4.width/2, 0);
    ctx4.lineTo(canvas4.width/2, canvas4.height);
    ctx4.stroke();

    requestAnimationFrame(drawLine);
}

function init() {
    var stage = new createjs.Stage('canvas3');
    var circle = new createjs.Shape();
    circle.graphics.beginFill('DeepSkyBlue').drawCircle(0, 0, 10);
    circle.x = 20;
    circle.y = canvas3.height/2;
    stage.addChild(circle);
    
    createjs.Tween.get(circle, {loop: true})
    .to({ alpha: 0, x: 100}, 800, createjs.Ease.linear())
    .to({ x: 200}, 800, createjs.Ease.linear())
    .to({ alpha: 1, x: 220}, 800, createjs.Ease.linear())
    
    var nucleus = new createjs.Shape();
    nucleus.graphics.beginFill('DeepSkyBlue').drawCircle(0, 0, 10);
    nucleus.x = 240;
    nucleus.y = canvas3.height/2;
    stage.addChild(nucleus);

    createjs.Tween.get(nucleus, {loop: true})
    .to({ x: 260}, 1200, createjs.Ease.linear())
    .to({ x: 240}, 1200, createjs.Ease.linear());

    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", stage);
    
    circle.on('pressmove', function(evt) {
        evt.target.x = evt.stageX;
        evt.target.y = evt.stageY;
        stage.update();
    });
}

var canvas1 = document.getElementById('canvas');
var ctx = canvas1.getContext('2d');
var radius = 15;

var canvas2 = document.getElementById('canvas2');
var ctx2 = canvas2.getContext('2d');

/*
function circle(w, l) {
    ctx.beginPath();
    ctx.arc(w, l, radius, 0, 2*Math.PI);
    ctx.stroke();
    ctx.closePath();
    ctx.fillStyle = '#d3d3d3';
    ctx.fill();
}*/

class nucleus {
    constructor(x, y, dx, dy, ctx) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.ctx = ctx
    }
    
    draw = () => {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, radius, 0, 2*Math.PI);
        this.ctx.stroke();
        this.ctx.closePath();
        this.ctx.fillStyle = 'DeepSkyBlue';
        this.ctx.fill();
    }

    move = () => {
        this.ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.draw();
        if (this.x < radius || this.x > (canvas.width - radius)) {
            this.dx = -this.dx;
        }
        if (this.y < radius|| this.y > (canvas.height - radius)) {
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;
        window.requestAnimationFrame(this.move);
    }
}

let another = new nucleus(40, 70, 2, 2, ctx);
another.draw();
another.move();

let what = new nucleus(100, 20, 2, 2, ctx2);
what.draw();
what.move();



//var x = 50, y = 50, dx = 4, dy = 7;


 /*
function move() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    circle();
    if (x < radius || x > (canvas.width - radius)) {
        dx = -dx;
    }
    if (y < radius|| y > (canvas.height - radius)) {
        dy = -dy;
    }
    x += dx;
    y += dy;
    window.requestAnimationFrame(move);
}

*/

function flip() {
    var audio = new Audio('card.mp3');
    var card = document.querySelector('.card');
    card.classList.toggle('flipped');
    audio.play();
}

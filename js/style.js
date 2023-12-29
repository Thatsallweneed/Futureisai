// 'use strict';

// const PI2 = 2 * Math.PI
// function map(s, a1, a2, b1, b2) {
//    return (b1 + (s - a1) * (b2 - b1) / (a2 - a1));
// }

// class Connect {
//   constructor() {
//     ctx.lineWidth = 0.1
    
//     this.connectArea = {
//       maxConnectionLength: 80,
//       connectAreaRadius: 130,
//       x: 0,
//       y: 0,
//       destX: 0,
//       destY: 0
//     };

//     this.bounds = {
//       top: 2,
//       left: 2,
//       right: 0,
//       bottom: 0
//     };

//     this.dots = []

//     this.resize()
//     this.connectArea.x = this.centerX
//     this.connectArea.y = this.centerY

//   }

//   resize() {
//     this.width = window.innerWidth
//     this.height = window.innerHeight
//     this.centerX = this.width / 2 | 0
//     this.centerY = this.height / 2 | 0

//     canvas.width = this.width
//     canvas.height = this.height

//     this.connectArea.destX = this.centerX
//     this.connectArea.destY = this.centerY

//     this.bounds.right = this.width - 2
//     this.bounds.bottom = this.height - 2

//     this.colorCounter = 0
//     this.dotCount = this.width * this.height / 3000 | 0
    
//     if (this.dotCount > this.dots.length) {
//       for (let i = this.dotCount - this.dots.length; i > 0; i--) {
//         this.dots.push(
//           new Dot(
//             this.width, 
//             this.height, 
//             (((this.colorCounter += 2) < 360) ? this.colorCounter : this.colorCounter = 0)
//           )
//         )
//       } 
//     } else if (this.dotCount < this.dots.length) {

//       this.dots.splice(0, this.dotCount - this.dots.length)
 
//       for (let i = 0; i < this.dotCount; i++) {
//         if (this.dots[i].y < this.bounds.top || 
//             this.dots[i].y > this.bounds.bottom || 
//             this.dots[i].x < this.bounds.left || 
//             this.dots[i].x > this.bounds.right) {
//           this.dots[i].x = Math.random() * this.width | 0
//           this.dots[i].y = Math.random() * this.height | 0
//         }
//       }
//     }

//   }

//   onMove(evt) {
//     this.connectArea.destX = evt.clientX || evt.touches && evt.touches[0].pageX
//     this.connectArea.destY = evt.clientY || evt.touches && evt.touches[0].pageY
//   }

//   onLeave(evt) {
//     this.connectArea.destX = this.centerX
//     this.connectArea.destY = this.centerY
//   }

//   connectDots() {
//     for (let i = 0; i < this.dotCount; i++) {
//       for (let j = i+1; j < this.dotCount; j++) {

//         let dot1 = this.dots[i]
//         let dot2 = this.dots[j]

//         let xDiff = Math.abs(dot1.x - dot2.x)
//         let yDiff = Math.abs(dot1.y - dot2.y)
//         let xDiffArea = Math.abs(dot1.x - this.connectArea.x)
//         let yDiffArea = Math.abs(dot1.y - this.connectArea.y)

//         if (xDiff < this.connectArea.maxConnectionLength && yDiff < this.connectArea.maxConnectionLength &&
//             xDiffArea < this.connectArea.connectAreaRadius && yDiffArea < this.connectArea.connectAreaRadius) {

//           let gradient = ctx.createLinearGradient(dot1.x, dot1.y, dot2.x, dot1.y)
//           gradient.addColorStop(0, dot1.color)
//           gradient.addColorStop(1, dot2.color)

//           ctx.beginPath()
//           ctx.moveTo(dot1.x, dot1.y)
//           ctx.lineTo(dot2.x, dot2.y)
//           ctx.strokeStyle = gradient
//           ctx.stroke()
//         }

//       }
//     }
//   }

//   update() {
   
//     ctx.globalCompositeOperation = 'hard-light'
//     ctx.fillStyle = 'rgba(20,20,20,0.2)'
//     ctx.fillRect(0, 0, this.width, this.height)
  
//     ctx.globalCompositeOperation = 'source-over'
//   //  ctx.clearRect(0, 0, this.width, this.height)

//     let distX = this.connectArea.destX - this.connectArea.x
//     if (distX > 5 || distX < 5) this.connectArea.x += distX / 10 | 0
//     let distY = this.connectArea.destY - this.connectArea.y
//     if (distX > 5 || distX < 5) this.connectArea.y += distY / 10 | 0

//     for (let i = 0; i < this.dotCount; i++) this.dots[i].update(this.bounds)
//     this.connectDots()


//     for (let i = 0; i < this.dotCount; i++) this.dots[i].draw()
    
//   }

// }

// class Dot {
//   constructor(width, height, color) {
//     this.x = Math.random() * width | 0
//     this.y = Math.random() * height | 0
//     this.vx = (Math.random() - 0.7) / 2
//     this.vy = (Math.random() - 0.7) / 2
//     this.radius = Math.random() * 2 + 0.3
//     this.color = 'hsla(' + color + ',80%,50%,' + this.radius * .5 + ')'
//   }

//   draw() {
//     ctx.beginPath()
//     ctx.fillStyle = this.color
//     ctx.arc(this.x, this.y, this.radius, 0, PI2)
//     ctx.fill()
//   }

//   update(bounds) {
//     if (this.y < bounds.top || this.y > bounds.bottom) this.vy = -this.vy
//     else if (this.x < bounds.left || this.x > bounds.right) this.vx = -this.vx
//     this.x += this.vx
//     this.y += this.vy
//   }

// }

// let canvas = document.getElementById('connect')
// let ctx = canvas.getContext('2d')

// let connect = new Connect()

// canvas.onmousemove = (evt) => connect.onMove(evt)
// canvas.onmouseleave = (evt) => connect.onLeave(evt)
// canvas.ontouchstart = (evt) => connect.onMove(evt)
// canvas.ontouchmove = (evt) => connect.onLeave(evt)

// window.onresize = () => connect.resize()

// ;(function update() {
//   requestAnimationFrame(update)
//   connect.update()

// }());











var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.fillStyle = "#191919";
ctx.fillRect(0, 0, canvas.width, canvas.height);

var stars = [], // Array that contains the stars
    FPS = 60, // Frames per second
    x = 100, // Number of stars
    mouse = {
        x: 0,
        y: 0
    };  // mouse location

// Push stars to array

for (var i = 0; i < x; i++) {
    stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1 + 1,
        vx: Math.floor(Math.random() * 50) - 25,
        vy: Math.floor(Math.random() * 50) - 25
    });
}

// Draw the scene
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.globalCompositeOperation = "lighter";

    for (var i = 0, x = stars.length; i < x; i++) {
        var s = stars[i];

        ctx.fillStyle = "#fff";
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, 2 * Math.PI);
        ctx.fill();
        ctx.fillStyle = 'black';
        ctx.stroke();
    }

    // Calculate the center of rotation
    var centerX = canvas.width / 2;
    var centerY = canvas.height / 2;

    // Calculate the rotation angle based on time
    var rotationAngle = Date.now() * 0.001;

    // Calculate the new position of the text in a circular motion
    var orbitRadius = 20;
    var textX = centerX + orbitRadius * Math.cos(rotationAngle);
    var textY = centerY + orbitRadius * Math.sin(rotationAngle);

    ctx.font = "48px sans-serif"; // Adjust font size and style as needed
    ctx.fillStyle = "#1989ac"; // Adjust color as needed
    ctx.textAlign = "center"; // Center the text horizontally

    // First line:
    ctx.fillText("TRANSFORM YOUR BUSINESS", textX, textY - 20); // Position adjusted for two lines

    // Second line:
    ctx.font = "32px sans-serif"; // Adjust font size for the second line
    ctx.fillText("WITH OUR EXPERTISE", textX, textY + 20);

    ctx.beginPath();
    for (var i = 0, x = stars.length; i < x; i++) {
        var starI = stars[i];
        ctx.moveTo(starI.x, starI.y);
        if (distance(mouse, starI) < 150) ctx.lineTo(mouse.x, mouse.y);
        for (var j = 0, x = stars.length; j < x; j++) {
            var starII = stars[j];
            if (distance(starI, starII) < 150) {
                ctx.lineTo(starII.x, starII.y);
            }
        }
    }
    ctx.lineWidth = 0.05;
    ctx.strokeStyle = 'white';
    ctx.stroke();
}

function distance(point1, point2) {
    var xs = 0;
    var ys = 0;

    xs = point2.x - point1.x;
    xs = xs * xs;

    ys = point2.y - point1.y;
    ys = ys * ys;

    return Math.sqrt(xs + ys);
}

// Update star locations
function update() {
    for (var i = 0, x = stars.length; i < x; i++) {
        var s = stars[i];

        s.x += s.vx / FPS;
        s.y += s.vy / FPS;

        if (s.x < 0 || s.x > canvas.width) s.vx = -s.vx;
        if (s.y < 0 || s.y > canvas.height) s.vy = -s.vy;
    }
}

canvas.addEventListener('mousemove', function (e) {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
});

// Update and draw
function tick() {
    draw();
    update();
    requestAnimationFrame(tick);
}

tick();

















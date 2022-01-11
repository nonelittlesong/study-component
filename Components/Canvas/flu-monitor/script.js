(function () {
  'use strict';
  window.addEventListener('load', function () {
    const canvas = document.querySelector('#canvas');
    if (!canvas || !canvas.getContext) return false;

    function rand(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }

    const resetBtn = document.querySelector('#resetBtn');
    const stayBtn = document.querySelector('#stayBtn');
    let stay = false;
    let countSick = document.querySelector('#countSick');
    let countHealthy = document.querySelector('#countHealthy');
    const ctx = canvas.getContext('2d');
    let X = canvas.width = window.innerWidth;
    let Y = canvas.height = window.innerHeight;
    let splitNum = 16;
    
    if (X < 768) {
      splitNum = 8;
    }

    let xSplit = X / splitNum;
    let ySplit = Y / splitNum;
    let sick = 1;
    let healthy = splitNum * splitNum - 1;

    window.requestAnimationFrame =
      window.requestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function(cb) {
        setTimeout(cb, 17);
      };
    
    let rowMax = splitNum;
    let colMax = splitNum;
    let circles = [];

    function Circle(ctx, x, y, c) {
      this.ctx = ctx;
      this.init(x, y, c);
    }

    Circle.prototype.init = function (x, y, c) {
      this.ctx = ctx;
      this.x = x;
      this.y = y;
      this.x1 = this.x;
      this.y1 = this.y;
      this.v = {
        x: rand(-1, 1),
        y: rand(-1, 1)
      };
      this.c = c;
      this.r = ySplit / 8;
      // 过多久，改变运动方向
      this.l = rand(5, 30);
    };

    Circle.prototype.draw = function () {
      const ctx = this.ctx;
      ctx.beginPath();
      ctx.fillStyle = this.c;
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
      ctx.closePath();
      ctx.fill();
    };

    Circle.prototype.updateParam = function () {
      this.l -= 0.1;
      if (this.l < 0 && stay == false) {
        this.v.x = rand(-1, 1);
        this.v.y = rand(-1, 1);
        this.l = rand(1, 10);
      }
    };

    Circle.prototype.stayHome = function () {
      this.v.x = 0;
      this.v.y = 0;
    };

    Circle.prototype.resize = function () {
      this.x = rand(0, X);
      this.y = rand(0, Y);
    };

    /**
     * 判断小球是否碰撞
     */
    Circle.prototype.coll = function (i) {
      let j = i;
      for (let i = 0; i < circles.length; i++) {
        if (j !== i) {
          let sumRadius = this.r + circles[i].r;
          let a = this.x - circles[i].x;
          let b = this.y - circles[i].y;
          let c = a * a + b * b;
          if (c < sumRadius * sumRadius) {
            if (this.c !== circles[i].c) {
              this.c = 'rgb(255, 57, 57)';
            }
            // @todo 碰撞后的速度计算需要改进
            this.v.x = - this.v.x;
            this.v.y = - this.v.y;
            let colAngle = Math.atan2(this.y - circles[i].y, this.x - circles[i].x);
            this.v.x = Math.cos(colAngle);
            this.v.y = Math.sin(colAngle);
          }
        }
      }
    };

    Circle.prototype.updatePosition = function () {
      this.x += this.v.x;
      this.y += this.v.y;
    };

    Circle.prototype.wrapPosition = function () {
      if (this.x - this.r < 0) this.v.x *= -1;
      if (this.x + this.r > X) this.v.x *= -1;
      if (this.y - this.r < 0) this.v.y *= -1;
      if (this.y + this.r > Y) this.v.y *= -1;
    };

    Circle.prototype.render = function (i) {
      if (stay === true) this.stayHome();
      this.updateParam();
      this.updatePosition();
      this.coll(i);
      this.wrapPosition();
      this.draw();
    };

    function countSickSick() {
      for (let i = 0; i < circles.length; i++) {
        if (circles[i].c === 'rgb(255, 57, 57)') {
          countSick.textContent = sick;
          countHealthy.textContent = healthy;
          sick++;
          healthy--;
        }
      }
    };

    function init() {
      for (let i = 0; i < colMax; i++) {
        for (let j = 0; j < rowMax; j++) {
          let color;
          i === colMax / 2 && j === rowMax / 2 ? color = 'rgb(255, 57, 57)' : color = 'rgb(193, 242, 95)';
          let circle = new Circle(ctx, xSplit * i + xSplit / 2, ySplit * j + ySplit / 2, color);
          circles.push(circle);
        }
      }
    }

    function render(i) {
      ctx.clearRect(0, 0, X, Y);
      for (let i = 0; i < circles.length; i++) {
        circles[i].render(i);
      }
      countSickSick();
      sick = 1;
      healthy = splitNum * splitNum - 1;
      requestAnimationFrame(render);
    }

    init();
    render();

    function onResize() {
      X = canvas.width = window.innerWidth;
      Y = canvas.height = window.innerHeight;
      for (let i = 0; i < circles.length; i++) {
        circles[i].resize();
      }
    }

    window.addEventListener('resize', function () {
      onResize();
    });

    resetBtn.addEventListener('click', function () {
      circles = [];
      stay = false;
      stayBtn.textContent = 'Stay Home';
      init();
    }, false);

    stayBtn.addEventListener('click', function () {
      if (stay === true) {
        stay = false;
        stayBtn.textContent = 'Stay Home';
        for (let i = 0; i < circles.length; i++) {
          circles[i].v.x = rand(-1, 1);
          circles[i].v.y = rand(-1, 1);
        }
      } else {
        stay = true;
        stayBtn.textContent = 'Go Out';
      }
    }, false);
  });
})();

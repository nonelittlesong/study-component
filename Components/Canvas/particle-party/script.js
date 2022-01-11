(function () {
  'use strict';
  window.addEventListener('load', function () {
    const canvas = document.querySelector('#canvas');
    if (!canvas || !canvas.getContext) {
      return false;
    }

    function rand(min, max) {
      return Math.floor(Math.random(max - min + 1) + min);
    }

    const ctx = canvas.getContext('2d');
    let X = canvas.width = window.innerWidth;
    let Y = canvas.height = window.innerHeight;

    let flg = true;
    let mouseX = null;
    let mouseY = null;

    let particleNum = 500;
    let particles = [];

    if (X < 768) {
      particleNum = 250;
    }

    function Particle(ctx, x, y, r) {
      this.ctx = ctx;
      this.init(x, y, r);
    }

    Particle.prototype.init = function (x, y, r) {
      this.x = x;
      this.y = y;
      this.x1 = this.x;
      this.y1 = this.y;
      this.r = r;
      this.v = {
        // why?
        x: rand(-10, 10) * Math.random() * 0.5,
        y: rand(-10, 10) * Math.random() * 0.5
      };
      // 控制色调
      this.c = {
        r: rand(128, 255),
        g: rand(128, 255),
        b: rand(128, 255)
      };
    };

    Particle.prototype.draw = function () {
      const ctx = this.ctx;
      // 保存状态
      ctx.save();
      ctx.beginPath();
      // 透明度
      ctx.globalAlpha = 0.8;
      ctx.fillStyle = 'rgb(' + this.c.r + ', ' + this.c.g + ', ' + this.c.b + ')';
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
      ctx.fill();
      // 还原到上一次保存的状态
      ctx.restore();
    };

    Particle.prototype.updatePosition = function () {
      if (mouseX !== null) {
        // 点击鼠标
        if (flg) {
          // Math.atan2(y, x) 返回从原点 (0, 0) 到 (x, y) 点的线段与 x 轴正方向之间的平面角度(弧度值)
          const angle = Math.atan2(this.y1 - mouseY, this.x1 - mouseX);
          this.x -= Math.cos(angle) * 5;
          this.y -= Math.sin(angle) * 5;
          this.x1 = this.x;
          this.y1 = this.y;
        }
      }
      this.x += this.v.x;
      this.y += this.v.y;
    };

    Particle.prototype.wrapPosition = function () {
      if (this.x - this.r < 0) this.v.x *= -1;
      if (this.x + this.r > X) this.v.x *= -1;
      if (this.y - this.r < 0) this.v.y *= -1;
      if (this.y + this.r > Y) this.v.y *= -1;
    };

    Particle.prototype.resize = function () {
      this.x = rand(0, X);
      this.y = rand(0, Y);
    };

    Particle.prototype.render = function () {
      this.updatePosition();
      this.wrapPosition();
      this.draw();
    };

    for (let i = 0; i < particleNum; i++) {
      const particle = new Particle(ctx, rand(0, X), rand(0, Y), rand(1, 20));
      particles.push(particles);
    }

    function render() {
      ctx.clearRect(0, 0, X, Y);
      for (let i = 0; i < particles.length; i++) {
        particles[i].render();
      }
      requestAnimationFrame(render);
    }

    render();

    function onResize() {
      X = canvas.width = window.innerWidth;
      Y = canvas.height = window.innerHeight;
      for (let i = 0; i < particles.length; i++) {
        particles[i].resize();
      }
    }

    window.addEventListener('resize', function () {
      onResize();
    });

    canvas.addEventListener('click', function (e) {
      if (flg) {
        flg = false;
      } else {
        flg = true;
      }
    }, false);

    window.addEventListener('mousemove', function (e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    // 触控屏
    window.addEventListener('touchmove', function (e) {
      const touch = e.targetTouches[0];
      mouseX = touch.pageX;
      mouseY = touch.pageY;
    }, false);
  });
})();

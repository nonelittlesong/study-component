(function () {
  'use strict';
  window.addEventListener('load', function () {
    const $canvas = document.querySelector('#canvas');
    if (!$canvas || !$canvas.getContext) {
      return false;
    }

    /**
     * 随机数生成
     * @param {Number} min 
     * @param {Number} max 
     * @returns
     */
    function rand(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }

    const ctx = $canvas.getContext('2d');
    let X = $canvas.width = window.innerWidth;
    let Y = $canvas.height = window.innerHeight;

    // star
    let starNum = 300;
    if (X < 768) {
      starNum = 100;
    }
    let stars = [];

    // animation
    window.requestAnimationFrame =
      window.requestAnimationFrame ||
      function (cb) {
        setTimeout(cb, 17); // 60 fps
      };
    
    /**
     * 星星类
     * @param {Context} ctx 
     * @param {Number} x 
     * @param {Number} y 
     * @param {Number} r 
     */
    function Star(ctx, x, y, r) {
      this.ctx = ctx;
      this.init(x, y, r);
    }

    Star.prototype.init = function (x, y, r) {
      this.x = x || 0;
      this.y = y || 0;
      this.r = r;
      this.v = {
        y: 1
      };
      this.c = '255, 255, 255';
    };

    Star.prototype.draw = function () {
      const ctx = this.ctx;
      ctx.beginPath();
      ctx.fillStyle = this.gradient();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
      ctx.fill();
    };

    Star.prototype.updatePosition = function () {
      const rad = this.y * Math.PI / 180;
      // x 轴的坐标根据 y 轴坐标左右小幅度摆动
      this.x -= Math.sin(rad) * 0.1;
      this.y -= this.v.y;
    };

    Star.prototype.wrapPosition = function () {
      if (this.x < 0 - this.r) this.x = X + this.r;
      if (this.x > X + this.r) this.x = 0 - this.r;
      if (this.y < 0 - this.r) this.y = Y + this.r;
      if (this.y > Y + this.r) this.y = 0 - this.r;
    };

    Star.prototype.gradient = function () {
      const col = this.c;
      const g = this.ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.r);
      g.addColorStop(0, 'rgba(' + col + ', ' + (1 * 1) + ')');
      g.addColorStop(0.5, 'rgba(' + col + ', ' + (1 * 0.2) + ')');
      g.addColorStop(1, 'rgba(' + col + ', ' + (1 * 0) + ')');
      return g;
    };

    Star.prototype.render = function () {
      this.updatePosition();
      this.wrapPosition();
      this.draw();
    };

    for (let i = 0; i < starNum; i++) {
      let star = new Star(ctx, rand(X / 5 * 2, X / 5 * 3), rand(0, Y), rand(1, 10));
      stars.push(star);
    }

    function render() {
      ctx.clearRect(0, 0, X, Y);
      for (let i = 0; i < stars.length; i++) {
        stars[i].render();
      }
      requestAnimationFrame(render);
    }

    render();

    function onResize() {
      X = $canvas.width = window.innerWidth;
      Y = $canvas.height = window.innerHeight;
      stars = [];
      for (let i = 0; i < starNum; i++) {
        let star = new Star(ctx, rand(X / 5 * 2, X / 5 * 3), rand(0, Y), rand(1, 10));
        stars.push(star);
      }
    }

    window.addEventListener('resize', function () {
      onResize();
    });
  });
})();

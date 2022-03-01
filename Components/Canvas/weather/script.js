(function() {
  'use strict';
  window.addEventListener('load', function () {
    const canvas = document.querySelector('#canvas');
    const amount = document.querySelector('#amount');
    if (!canvas || !canvas.getContext) {
      return false;
    }

    function rand(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }

    const ctx = canvas.getContext('2d');
    let X = canvas.width = window.innerWidth;
    let Y = canvas.height = window.innerHeight;

    window.requestAnimationFrame =
      window.requestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function(cb) {
        setTimeout(cb, 17);
      };

    let cloudNum = 20;
    let cloudInt = 0; // ?

    let firstClouds = [];
    let firstCloudSpeed = 0.1;

    let secondClouds = [];
    let secondCloudSpeed = 0.05;

    let thirdClouds = [];
    let thirdCloudSpeed = 0.025;

    let rainFlg = true;

    class Cloud {
      constructor(ctx, x, y, r, c, s) {
        this.ctx = ctx;
        this.init(x, y, r, c, s);
      }

      init(x, y, r, c, s) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.c = c;
        this.s = s;
      }

      draw() {
        const ctx = this.ctx;
        ctx.beginPath();
        ctx.fillStyle = this.c;
        ctx.arc(this.x, this.y, this.r, Math.PI * 2, false);
        ctx.fill();
      }

      updatePosition() {
        this.x -= this.s;
      }

      wrapPosition() {
        if (this.x + this.r < 0) {
          this.x = X + this.r;
        }
      }

      resize() {
        this.x = rand(0, X);
      }

      render() {
        this.updatePosition();
        this.wrapPosition();
        this.draw();
      }
    }

    for (let i = 0; i < cloudNum; i++) {
      let cloud = new Cloud(ctx, cloudInt, 0, rand(50, 80), 'rgb(153, 153, 153)', firstCloudSpeed);
      cloudInt += 80;
      firstClouds.push(cloud);
    }

    cloudInt = 0;

    for (let i = 0; i < cloudNum; i++) {
      let cloud = new Cloud(ctx, cloudInt, 40, rand(50, 80), 'rgb(102, 102, 102)', secondCloudSpeed);
      cloudInt += 80;
      secondClouds.push(cloud);
    }

    cloudInt = 0;

    for (let i = 0; i < cloudNum; i++) {
      let cloud = new Cloud(ctx, cloudInt, 80, rand(50, 80), 'rgb(77, 77, 77)', thirdCloudSpeed);
      cloudInt += 80;
      thirdClouds.push(cloud);
    }

    // -------------------------------- rain

    let rainNum = 500;
    let rains = [];
    let rainSpeed = 10;
    let windDirection = 0;

    class Rain {
      constructor(ctx, x, y, l) {
        this.ctx = ctx;
        this.init(x, y, l);
      }

      init(x, y, l) {
        this.x = x;
        this.y = y;
        this.l = l;
        this.v = {
          x: windDirection,
          y: rainSpeed
        };
      }

      draw() {
        const ctx = this.ctx;
        ctx.beginPath();
        ctx.lineWidth = 1;
        ctx.strokeStyle = 'rgb(255, 255, 255)';
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x, this.y + this.l);
        ctx.stroke();
      }

      updatePosition() {
        this.y + this.v.y;
      }

      wrapPosition() {
        if (this.y > Y) {
          this.y = 0;
        }
      }

      resize() {
        this.x = rand(0, X);
        this.y = rand(0, Y);
      }

      render() {
        this.updatePosition();
        this.wrapPosition();
        this.draw();
      }
    }

    // ----------------------------- Sun
  })
})();
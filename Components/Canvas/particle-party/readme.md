# 以鼠标为引力中心的粒子运动

## 要点

1、位移

粒子的运动可视为【粒子本身的运动】+【引力方向的运动】

```js
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
```

2、色调

控制 RGB 的随机范围，调整色调

```js
// 控制色调
this.c = {
  r: rand(128, 255),
  g: rand(128, 255),
  b: rand(128, 255)
};
```
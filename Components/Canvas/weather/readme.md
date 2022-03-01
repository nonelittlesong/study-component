# 天气

## 要点

使用粗线条绘制光束：

```js
Beam.prototype.draw = function() {
  ctx = this.ctx;
  ctx.lineWidth = 10;
  ctx.beginPath();
  ctx.strokeStyle = '#F2C94C';
  ctx.moveTo(this.x, this.y);
  ctx.lineTo(Math.cos(this.rad) * this.l + this.x, this.y - Math.sin(this.rad) * this.l);
  ctx.stroke();
};
```

# 银河

## 要点

1、x 坐标左右摆动

```js
Star.prototype.updatePosition = function () {
  const rad = this.y * Math.PI / 180;
  // x 轴的坐标根据 y 轴坐标左右小幅度摆动
  this.x -= Math.sin(rad) * 0.1;
  this.y -= this.v.y;
};
```

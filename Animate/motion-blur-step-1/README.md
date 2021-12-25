# Motion blur Step 1

A Pen created on CodePen.io. Original URL: [https://codepen.io/Nealevf/pen/dyMxvKY](https://codepen.io/Nealevf/pen/dyMxvKY).

一个球从左向右翻滚，变成一个正方形。

## 要点

- `transition` — 实现动画的过渡，无需使用 `@keyframe`
- `left: <px>` — 平移
  - 使用 `transform: translateX(<px>)`，性能更好，[查看](https://codepen.io/nonelittlesong/pen/oNGovdE)
- `transform: rotate(<deg>)` — 翻滚
- `border-radius: <%>` — 圆形变正方形
- `background` — 颜色过渡

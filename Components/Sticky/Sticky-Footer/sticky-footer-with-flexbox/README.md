# Sticky Footer with Flexbox

A Pen created on CodePen.io. Original URL: [https://codepen.io/chriscoyier/pen/RRbKrL](https://codepen.io/chriscoyier/pen/RRbKrL).

## 实现

利用 flex 布局实现粘性页脚：

```css
html, body {
  /* IE 10-11 didn't like using min-height */
  height: 100%;
}
body {
  display: flex;
  flex-direction: column;
}
.content {
  flex: 1 0 auto; /* Prevent Chrome, Opera, and Safari from letting these items shrink to smaller than their content's default minimum size. */
  padding: 20px;
}
.footer {
  flex-shrink: 0; /* Prevent Chrome, Opera, and Safari from letting these items shrink to smaller than their content's default minimum size. */
  padding: 20px;
}
```

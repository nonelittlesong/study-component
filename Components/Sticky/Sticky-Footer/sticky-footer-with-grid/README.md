# Sticky Footer with Grid

A Pen created on CodePen.io. Original URL: [https://codepen.io/chriscoyier/pen/YWKNrE](https://codepen.io/chriscoyier/pen/YWKNrE).

## 实现

body 使用 grid 布局：

```css
html {
  height: 100%;
}
body {
  min-height: 100%;
  display: grid;
  grid-template-rows: 1fr auto;
}
.content {
  padding: 20px;
}
.footer {
  grid-row-start: 2;
  grid-row-end: 3;
}
```

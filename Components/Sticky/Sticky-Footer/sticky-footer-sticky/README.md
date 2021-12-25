# sticky footer sticky

A Pen created on CodePen.io. Original URL: [https://codepen.io/silvio-r/pen/gOxgJbq](https://codepen.io/silvio-r/pen/gOxgJbq).

粘性页脚的最佳实现。

## 实现

将页脚的 top 设为 100vh：

```css
html, body { height: 100%; }

body > footer {
  position: sticky;
  top: 100vh;
}
```

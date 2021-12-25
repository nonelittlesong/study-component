# Sticky Footer with calc()

A Pen created on CodePen.io. Original URL: [https://codepen.io/chriscoyier/pen/jqRXBz](https://codepen.io/chriscoyier/pen/jqRXBz).

使用 `calc()` 实现粘性页脚。

## 实现

通过 `calc()` 函数计算内容的 `min-height` 属性：

```css
.content {
  min-height: calc(100vh - 50px);
  padding: 40px 40px 0 40px;
}
.footer {
  height: 50px;
}
```

## 缺点

1. 页脚的高度需要确定

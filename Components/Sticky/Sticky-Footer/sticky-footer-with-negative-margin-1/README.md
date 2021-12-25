# Sticky Footer with Negative Margin 1

A Pen created on CodePen.io. Original URL: [https://codepen.io/chriscoyier/pen/VjZmGj](https://codepen.io/chriscoyier/pen/VjZmGj).

粘性页脚

## 1. 实现方式

### 1.1. 设置内容的 margin 为负数

设置内容的 margin-bottom 为负数（页脚高度），最小高度 100%

```css
.content {
  padding: 20px;
  min-height: 100%;
  margin: 0 auto -50px;
}
```

### 1.2. 设置页脚的 margin 为负数

同样的，设置页脚的 margin-top 为负数能达到相同的效果：

```css
.footer {
  height: 50px;
  margin-top: -50px;
}
```

## 2. 缺点

1. 页脚的高度需要确定

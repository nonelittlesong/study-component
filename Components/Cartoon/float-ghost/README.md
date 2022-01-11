# Float Ghost

A Pen created on CodePen.io. Original URL: [https://codepen.io/nonelittlesong/pen/zYEmdWx](https://codepen.io/nonelittlesong/pen/zYEmdWx).

## 要点

1、眼睛

使用 `space-around` 排列眼睛的位置：

```css
.eyes {
  height: 24px;
  display: flex;
  /* 均匀排列每个元素，每个元素周围分配相同的空间 */
  justify-content: space-around;
  /* 垂直居中对齐 */
  align-items: center;
  margin-bottom: 14px;
}
```

2、手

使用 `space-between` 排列手的位置，位于容器的两端：

```css
.hands {
  width: 180px;
  position: absolute;
  left: -20px;
  top: 80px;
  display: flex;
  /* 均匀排列每个元素，首个元素放置于起点，末尾元素放置于终点 */
  justify-content: space-between;
}
```

3、脚

使用 `flex: 1`

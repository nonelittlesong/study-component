# 树形视图

多用于文件浏览器的树形目录

## 要点

1、 如何实现【树枝】

通过 `::before` 和 `::after` 伪元素的边框实现树枝效果：

```css
.wtree li::before {
  content: '';
  counter-increment: item;
  position: absolute;
  top: -10px;
  left: -30px;
  border-left: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  width: 30px;
  height: 15px;
}

.wtree li::after {
  position: absolute;
  content: '';
  top: 5px;
  left: -30px;
  border-left: 1px solid #ddd;
  border-top: 1px solid #ddd;
  width: 30px;
  height: 100%;
}

.wtree li:last-child::after {
  display: none;
}
```

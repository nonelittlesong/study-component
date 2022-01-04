# Cloud Button

A Pen created on CodePen.io. Original URL: [https://codepen.io/nonelittlesong/pen/OJxZvpZ](https://codepen.io/nonelittlesong/pen/OJxZvpZ).

云朵效果的按钮。

## 1. 要点

### 1.1. 云朵的模拟

通过多个上升并放大的圆，模拟云朵效果：

```css
nav ul li span {
  position: absolute;
  width: 25%;
  height: 100%;
  background-color: var(--c);
  border-radius: 50%;
  transform: translateY(150%);
  left: calc((var(--n) - 1) * 25%);
  transition-duration: 0.5s;
  transition-delay: calc((var(--n) - 1) * 0.1s);
  z-index: -1;
}

nav ul li:hover span {
  transform: translateY(0) scale(2);
}
```

### 1.2. 自定义属性（变量）

自定义属性受级联的约束，并从其父级继承其值。

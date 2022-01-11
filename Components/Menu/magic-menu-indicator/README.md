# Magic Menu Indicator

A Pen created on CodePen.io. Original URL: [https://codepen.io/nonelittlesong/pen/GRMXXVX](https://codepen.io/nonelittlesong/pen/GRMXXVX).

- [ionicons 图标库](https://ionic.io/ionicons)

## 要点

1、菜单栏的圆角效果

使用 Indicator 的伪元素 `::before` 和 `::after` 遮挡菜单栏，并将 `::before` 和 `::after` 圆角化

```css
.indicator::before {
  content: '';
  position: absolute;
  top: 50%;
  left: -22.5px;
  width: 20px;
  height: 20px;
  background: #fff;
  border-top-right-radius: 20px;
  box-shadow: 0px -10px 0 0 var(--clr);
}

.indicator::after {
  content: '';
  position: absolute;
  top: 50%;
  right: -22.5px;
  width: 20px;
  height: 20px;
  background: #fff;
  border-top-left-radius: 20px;
  box-shadow: 0px -10px 0 0 var(--clr);
}
```

2、Indicator 的平移

通过 `nth-child` 计算 indicator 的位置

```css
.navigation ul li:nth-child(1).active ~ .indicator {
  transform: translateX(calc(70px * 0));
}
.navigation ul li:nth-child(2).active ~ .indicator {
  transform: translateX(calc(70px * 1));
}
.navigation ul li:nth-child(3).active ~ .indicator {
  transform: translateX(calc(70px * 2));
}
.navigation ul li:nth-child(4).active ~ .indicator {
  transform: translateX(calc(70px * 3));
}
.navigation ul li:nth-child(5).active ~ .indicator {
  transform: translateX(calc(70px * 4));
}
```


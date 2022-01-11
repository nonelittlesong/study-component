# Drop

A Pen created on CodePen.io. Original URL: [https://codepen.io/nonelittlesong/pen/MWEPoRq](https://codepen.io/nonelittlesong/pen/MWEPoRq).


## 要点

1、阴影

```css
box-shadow: inset 10px 10px 10px rgba(0, 0, 0, .05),
  15px 25px 10px rgba(0, 0, 0, .05),
  15px 20px 20px rgba(0, 0, 0, .05),
  inset -10px -10px 15px rgba(255, 255, 255, .9);
```

2、反光

```css
.drop::before {
  content: '';
  position: absolute;
  top: 35px;
  left: 25px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #fff;
}
```

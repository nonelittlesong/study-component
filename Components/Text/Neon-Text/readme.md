# 霓虹

| 组件 | 描述 |
| --- | --- |
| neon-text | 光辉效果 |
| neon-text-with-flickering | 闪烁效果 |
| neon-text-with-pulsating-effect | 脉动效果 |
| neon-text-subtle-flickering | 轻微闪烁 |

## 1. 光辉效果

使用 `text-shadow` 属性，我们可以通过逗号分隔多个阴影，实现文字的光辉效果。

`text-shadow` 接受四个值：

- 前两个值分别表示阴影的水平和垂直位置
- 第三个值表示阴影的模糊半径
- 第四个值表示阴影的颜色

## 2. 闪烁效果

使用 `@keyframes` 规则，控制发光时间，实现闪烁动画。

```css
@keyframes flicker {
    
  0%, 18%, 22%, 25%, 53%, 57%, 100% {

      text-shadow:
      0 0 4px #fff,
      0 0 11px #fff,
      0 0 19px #fff,
      0 0 40px #0fa,
      0 0 80px #0fa,
      0 0 90px #0fa,
      0 0 100px #0fa,
      0 0 150px #0fa;
  
  }
  
  20%, 24%, 55% {        
      text-shadow: none;
  }    
}
```

## 3. 脉动效果

控制光辉的大小变化：

```css
@keyframes pulsate {
  100% {
    /* Larger blur radius */
    text-shadow:
      0 0 4px #fff,
      0 0 11px #fff,
      0 0 19px #fff,
      0 0 40px #0fa,
      0 0 80px #0fa,
      0 0 90px #0fa,
      0 0 100px #0fa,
      0 0 150px #0fa;
  }
  0% {
    /* Smaller blur radius */
    text-shadow:
      0 0 2px #fff,
      0 0 4px #fff,
      0 0 6px #fff,
      0 0 10px #0fa,
      0 0 45px #0fa,
      0 0 55px #0fa,
      0 0 70px #0fa,
      0 0 80px #0fa;
  }
}
```

动画方向 `alternate` 实现脉动：

```css
h1 {
  animation: pulsate 2.5s infinite alternate;     
}
```

## 4. 轻微闪烁

通过缩短动画时间和时间函数，实现轻微闪烁的效果：

```css
h1 {
    font-size: 6.2rem;
    animation: pulsate 0.11s ease-in-out infinite alternate;     
}
```

## 5. 边框

```css
h1 {
  border: 0.2rem solid #fff;
  border-radius: 2rem;
  padding: 0.4em;
  box-shadow: 0 0 .2rem #fff,
              0 0 .2rem #fff,
              0 0 2rem #bc13fe,
              0 0 0.8rem #bc13fe,
              0 0 2.8rem #bc13fe,
              inset 0 0 1.3rem #bc13fe;
}
```

## 6. 辅助

```css
@media screen and (prefers-reduced-motion) { 
  h1 {
    animation: none;
  }
}
```

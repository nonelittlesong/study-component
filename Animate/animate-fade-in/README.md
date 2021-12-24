# Animate: Fade in

A Pen created on CodePen.io. Original URL: [https://codepen.io/team/css-tricks/pen/bGrzmow](https://codepen.io/team/css-tricks/pen/bGrzmow).


## 1. 要点

### 1.1. [place-items](https://developer.mozilla.org/zh-CN/docs/Web/CSS/place-items)

CSS 中的 `place-items` 是一个简写属性（`align-items` 和 `justify-items`）。

它允许你在相关的布局（flex 或 grid）中可以同时沿着块级和内联方向对齐元素。

如果未提供第二个值，则第一个值作为第二个值的缺省值。

### 1.2. [webkit](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Webkit_Extensions)

WebKit 支持大量的 CSS 扩展，这种 CSS 属性的前缀为 `-webkit-`。

### 1.3. [animation-fill-mode](https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation-fill-mode)

设置动画在执行之前和之后如何将样式应用于其目标。

>贴士：  
>1. 设为 `backwards`，确保 delay 期间显示动画的初始状态。

- `none` — 当动画未执行时，动画将不会把任何样式应用于目标
- `forwards` — 目标将保留由执行期间遇到的最后一个【关键帧】计算值
- `backwards` — 动画将在应用于目标时立即应用第一个关键帧中定义的值，并在 `animation-delay` 期间保留此值
- `both` — 动画将遵循 `forwards` 和 `backwards` 的规则

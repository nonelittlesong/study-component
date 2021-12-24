# Load Animation

A Pen created on CodePen.io. Original URL: [https://codepen.io/Nealevf/pen/abyQVLB](https://codepen.io/Nealevf/pen/abyQVLB).

简单的可复用的动画框架示例。

## 1. 要点

### 1.1. 尊重用户偏好

```css
@media screen and (prefers-reduced-motion: reduce) {
  .animate {
    animation: none !important;
  }
}
```

尊重用户减少动态效果的偏好。

### 1.2. 交错的延时

```css
.delay-1 { animation-delay: 0.6s; }  
.delay-2 { animation-delay: 0.7s; }
.delay-3 { animation-delay: 0.8s; }
```

### 1.3. 功能分离

将【基础动画】、【动画类型】、【延时】分离：

```css
<h2 class="animate pop">One!</h2>
<h2 class="animate pop delay-1">Two!</h2>
<h2 class="animate pop delay-2">Three!</h2>
```

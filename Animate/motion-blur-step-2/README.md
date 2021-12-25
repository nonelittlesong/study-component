# Motion Blur Step 2

A Pen created on CodePen.io. Original URL: [https://codepen.io/Nealevf/pen/oNxKZOx](https://codepen.io/Nealevf/pen/oNxKZOx).

模拟动态模糊。

## 1. 要点

### 1.1. 动态模糊

创建多个副本：

- 每个副本的动画相同，延时不同
- 设置不透明度

### 1.2. 使用动画实现动态模糊

```css
@keyframes motionblur {
  0% {
    filter: blur(0px);
  }

  50% {
    filter: blur(2px);
  }

  100% {
    filter: blur(0px);
  }
}

/* ... */

.container:hover .dot {
  animation-name: motionblur;
  animation-duration: 0.75s;
  animation-timing-function: cubic-bezier(.71,0,.33,1.56);
}
```

动画的性能可能不够好。


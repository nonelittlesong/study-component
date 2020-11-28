# 实现 DVD 屏保效果

实现一个复古的 DVD 的屏幕保护效果。  

- **初始状态**：  
  - 屏幕上有一个图标，速度固定，向一个随机的方向移动。  
- **过渡状态**：  
  - 撞到视口边界  
    - 图标翻转（或添加滤镜）
    - 背景变色
    - 撞到墙喊疼
- **结束状态**：  
  - 循环上述过程
  - 视口大小改变时，回到初始状态

## 一、技术要点

### 1.1 图标实现的三种方式

1. div
2. img
3. canvas

#### 1.1.1 [给背景图片添加滤镜](https://css-tricks.com/apply-a-filter-to-a-background-image/)

给整个元素添加滤镜，很简单，使用 `filter` 属性即可。

那么，怎么样才能只给背景添加滤镜呢？已知，我们有：

- `background-blend-mode` - 混合模式，和「滤镜」不是一回事。
- `backdrop-filter` - 可惜是元素后背的滤镜···

很不幸，我们得另想办法···

##### 伪元素

用伪元素冒充背景：

```css
.module {
  position: relative;
}
.module::before {
  content: "";
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background-image: url(graphic-to-be-filtered.jpg);
  filter: grayscale(100%);
}
.module-inside {
  /* This will make it stack on top of the ::before */
  position: relative;
}
```

##### blend mode

我们可以使用 `background-blend-mode`，这取决于你想要什么效果的滤镜。  
灰色滤镜，是能够通过[多背景](https://css-tricks.com/css-basics-using-multiple-backgrounds/)，图片上覆盖纯黑来实现的。

要注意的是，我们在处理多背景时，不能用 `solid color`，因为会转化为`background-color + background-image`。  
因此，我们用不过渡的 `linear-gradient` 伪造 `solid color`。

```css
.module {
  background-image:
    linear-gradient(black, black),
    url(image-to-be-fake-filters.jpg);
  background-size: cover;
  background-blend-mode: saturation;
}
```

##### [蛋·危的探索](https://codepen.io/danwilson/pen/dqZvmx)

蛋神用了三层：

1. 顶层 — 使用 `radial-gradient` 修饰
2. 中层 — 固定颜色
3. 下层 — 图片

`background-blend-mode` 可以像 `background` 那样，通过逗号分隔符，每层应用不同的混合模式。

### 1.2 边界的判定

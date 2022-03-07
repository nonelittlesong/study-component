# 手风琴相册

## 要点

1、倾斜效果

父元素的倾斜效果会影响子元素

```css
.container {
  transform: skew(5deg); /* 子元素也会倾斜 */
}

.container .card:hover .card__head {
  text-align: center;
  top: calc(100% - 2em);
  transform: rotate(0deg) skew(-5deg);
}
```

2、旋转的标题

```css
.container .card .card__head {
  padding: .5em;
  transform: rotate(-90deg);
  transform-origin: 0% 0%;
  transition: all .5s ease-in-out;
  min-width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
}

.container .card:hover .card__head {
  top: calc(100% - 2em);
  transform: rotate(0deg) skew(-5deg);
}
```

3、图片变灰

```css
img {
  filter: grayscale(100%);
}
```

4. 图片适应大小

```css
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

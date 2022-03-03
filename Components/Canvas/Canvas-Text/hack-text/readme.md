# 下坠文字

## 1. 白色文字的密度随时间变化

以时间为自变量，密度作为应变量

```
p = sin(t) * 51
```

```js
// j 为横坐标
j % Math.floor(Math.sin(t) * 51) === 1
  ? (ctx.fillStyle = "white")
  : (ctx.fillStyle = "green");
```

## 2. 文字随时间下降

```js
k = i * W + j;
ctx.fillText(String(t * k).charAt(0), j, Math.tan(i * j - Math.sin(k) + t) * i);
```
# [Data URLs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs)

以 `data:` 为前缀，用于嵌入小型文件。

<details>
<summary>References</summary>

- [percent-encoding](https://developer.mozilla.org/zh-CN/docs/Glossary/percent-encoding)
- [Data URLs 简介 | cnblogs](https://www.cnblogs.com/xuechenlei/p/5940371.html)

</details>

## 1. 语法

```
data:[<mediatype>][;base64],<data>
```

由四个部分组成：

1. `data:` 前缀
2. `mediatype` [MIME](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types) 类型 — 默认 `text/plain;charset=US-ASCII`
3. `;base64` 当数据不是文本时
4. `data` 数据本身

栗子：

- `data:,Hello%2C%20World!`  
  简单的 `text/plain` 类型
- `data:text/plain;base64,SGVsbG8sIFdvcmxkIQ==`  
  上面的 `base64` 编码版
- `data:text/html,%3Ch1%3EHello%2C%20World!%3C%2Fh1%3E`  
  html 的 `<h1>Hello, World!</h1>`
- `data:text/html,<script>alert('hi');</script>`

## 2. Base64

### 2.1. [JS 转换 Base64](https://developer.mozilla.org/en-US/docs/Glossary/Base64)

- [btoa()](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/btoa)
- [atob()](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/atob)

### 2.2. [NodeJS 转换 Base64](https://cloud.tencent.com/developer/ask/87776)

```js
// btoa
Buffer.from('plain string').toString('base64');
// atob
Buffer.from('base64 string', 'base64').toString();
```

### 2.3. Unix 系统

通过 `base64` 命令行（替代方法，带 `-m` 参数 的 `uuencode`）。

```sh
echo -n hello | base64
# outputs to console: aGVsbG8=

echo -n hello > a.txt
base64 a.txt
# outputs to console: aGVsbG8=

base64 a.txt > b.txt
# outputs to file b.txt: aGVsbG8=
```

### 2.4. Windows 系统

```sh
[convert]::ToBase64String([Text.Encoding]::UTF8.GetBytes("hello"))
# outputs to console: aGVsbG8=
```

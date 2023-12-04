## 从 v3.x 及以下版本迁移

Animate.css v4 带来了一些改进、优化的动画和新的动画，这使得升级变得值得。然而，它也带来了一个破坏性的改变：我们为所有 Animate.css 类添加了一个前缀，默认为 `animate__`，因此直接迁移是不可能的。

但是不要担心！虽然默认构建文件 `animate.min.css` 带有 `animate__` 前缀，但我们还提供了不带任何前缀的 `animate.compat.css` 文件，就像之前的版本（3.x 及以下）一样。

如果你正在使用包管理工具，请更新你的导入语句：

从：

```js
import 'animate.min.css';
```

改为：

```js
import 'animate.compat.css';
```

请注意，根据你的项目配置，这可能会有所不同。

如果是使用 CDN，请更新 HTML 中的链接：

从：

```html
<head>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css"
  />
</head>
```

改为：

```html
<head>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.compat.css"
  />
</head>
```

对于新项目，强烈建议使用默认的前缀版本，因为它将确保您几乎不会有与项目冲突的类。此外，在以后的版本中，我们可能会决定停止使用该 `animate.compat.css` 文件。

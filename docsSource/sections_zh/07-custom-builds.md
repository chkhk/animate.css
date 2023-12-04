## 定制构建

<p class="warning">不能从 node_modules 文件夹进行自定义构建，因为我们不在 npm 模块中提供构建工具。</p>

Animate.css 由 npm、postcss + postcss-preset-env 提供支持，这意味着您可以使用未来的 CSS 和适当的后备，轻松创建自定义构建。

首先，您需要 Node 和所有其他依赖项：

```shell
$ git clone https://github.com/animate-css/animate.css.git
$ cd animate.css
$ npm install
```

要编译自定义构建，请运行 `npm start`。将生成三个文件：

- `animate.css`：原始构建，易于阅读且没有任何优化
- `animate.min.css`：准备好用于生产的压缩构建
- `animate.compat.css`：准备好用于生产的压缩构建，但没有类前缀。这应该仅用作迁移的简单路径。

例如，如果您只使用一些 "attention seekers" 的动画，只需编辑 `./source/animate.css` 文件，删除每个 `@import` 只保留您想要使用的动画。

```css
@import 'attention_seekers/bounce.css';
@import 'attention_seekers/flash.css';
@import 'attention_seekers/pulse.css';
@import 'attention_seekers/rubberBand.css';
@import 'attention_seekers/shake.css';
@import 'attention_seekers/headShake.css';
@import 'attention_seekers/swing.css';
@import 'attention_seekers/tada.css';
@import 'attention_seekers/wobble.css';
@import 'attention_seekers/jello.css';
@import 'attention_seekers/heartBeat.css';
```

现在，只需运行 `npm start`，您的高度优化的构建就会在项目的根目录下生成。

### 更改默认前缀

要更改自定义构建中的 animate 前缀，只需在 `package.json` 文件中更改 `animateConfig` 的 `prefix` 属性，然后使用 `npm start` 重新构建库即可。

```json
/* on Animate.css package.json */
"animateConfig": {
  "prefix": "myCustomPrefix__"
},
```

然后:

```shell
$ npm start
```

非常简单!

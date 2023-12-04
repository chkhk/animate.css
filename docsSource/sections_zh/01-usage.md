## 安装及使用

### 安装

通过 npm 安装:

```shell
$ npm install animate.css --save
```

或者使用 Yarn 进行安装（这仅适用于使用合适的工具如 Webpack、Parcel 等进行打包的情况。如果你没有使用任何打包工具，可以使用最下面的 CDN 方法）：

```shell
$ yarn add animate.css
```

将其导入到你的文件中：

```js
import 'animate.css';
```

或者直接通过 CDN 将其添加到你的网页中：

```html
<head>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
  />
</head>
```

### 基础使用

在安装了 Animate.css 后，将 `animate__animated` 类添加到一个元素中，以及任何 [动画名称](#attention_seekers)（不要忘记 `animate__` 前缀！）：

```html
<h1 class="animate__animated animate__bounce">An animated element</h1>
```

就是这样！你已经获得了一个带有 CSS 动画效果的元素。太棒了！

> 动画可以改善界面的用户体验，但请记住，它们也可能会干扰用户！请阅读 [最佳实践](#best-practices) 和 [注意事项](#gotchas) 部分，以最佳方式为你的网页添加动画效果。

#### 使用 `@keyframes`

尽管该库提供了一些辅助类，比如 `animated` 类，以便快速开始使用，但你也可以直接使用提供的动画 `keyframes`。这为你在当前项目中使用 Animate.css 提供了一种灵活的方式，无需修改你的 HTML 代码。

示例:

```css
.my-element {
  display: inline-block;
  margin: 0 0.5rem;

  animation: bounce; /* 直接引用动画的@keyframe声明n */
  animation-duration: 2s; /* 别忘了设置持续时间! */
}
```

请注意，某些动画效果依赖于动画类上设置的 `animation-timing` 属性。更改或不声明该属性可能会导致意外的结果。

#### 通过 css 自定义属性 (CSS 变量)

从版本 4 开始，Animate.css 使用自定义属性（也称为 CSS 变量）来定义动画的持续时间、延迟和迭代次数。这使得 Animate.css 非常灵活和可定制。需要更改动画的持续时间？只需全局或局部设置一个新值即可。

示例:

```css
/* This only changes this particular animation duration */
.animate__animated.animate__bounce {
  --animate-duration: 2s;
}

/* This changes all the animations globally */
:root {
  --animate-duration: 800ms;
  --animate-delay: 0.9s;
}
```

自定义属性还可以轻松地动态更改所有动画的时间受限属性。这意味着您可以使用 JavaScript 单行代码实现慢动作或延时效果：

```javascript
// 所有动画的完成时间将延长一倍
document.documentElement.style.setProperty('--animate-duration', '2s');

// 所有动画的完成时间将减少一半
document.documentElement.style.setProperty('--animate-duration', '.5s');
```

尽管某些过时的浏览器不支持自定义属性，但 Animate.css 提供了适当的后备，扩大了对任何支持 CSS 动画的浏览器的支持。

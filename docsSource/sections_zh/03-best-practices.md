## 最佳实践

动画可以极大地改善界面的用户体验，但重要的是遵循一些准则，以避免过度使用动画而降低你的网页体验。遵循以下规则应该是一个很好的起点。

### 有意义的动画

你应该避免仅仅为了动画而对元素进行动画处理。要记住，动画应该明确表达一个意图。像吸引注意力的动画（弹跳、闪烁、脉冲等）应该用于将用户的注意力引导到你界面中的特别内容上，而不仅仅是为了增加它的"闪亮度"。

入场和出场动画应该用于指示界面中正在发生的事情，清晰地表明它正在过渡到新的状态。

这并不意味着你应该避免在界面中添加趣味性，只是要确保动画不会妨碍用户，并且页面的性能不会因过度使用动画而受到影响。

### 不要对大型元素进行动画处理

避免这样做，因为它不会给用户带来太多价值，并可能只会导致困惑。此外，有很大的可能性这些动画会变得很粗糙，最终导致糟糕的用户体验。

### 不要对根元素进行动画处理

对 `<html/>` 或 `<body/>` 标签进行动画处理是可能的，但您应该避免这样做。有一些报告指出这可能会引发一些奇怪的浏览器错误。此外，使整个页面弹跳很难为您的用户体验提供良好的价值。如果您确实需要这种效果，请将页面包装在一个元素中并为其设置动画，如下所示：

```html
<body>
  <main class="animate__animated animate__fadeInLeft">
    <!-- 你的代码 -->
  </main>
</body>
```

### 避免无限重复的动画

尽管 Animate.css 提供了用于重复动画的实用程序类，包括一个无限循环的类，但你应避免无尽的动画。它只会分散用户的注意力，并可能使一部分用户感到烦恼。因此，请明智地使用它！

### 注意元素的初始和最终状态

所有 Animate.css 动画都包含一个名为 `animation-fill-mode` 的 CSS 属性，该属性控制元素在动画前后的状态。你可以在这里了解更多信息 [链接](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-fill-mode)。Animate.css 默认为 `animation-fill-mode: both`，但你可以根据你的需求进行更改。

### 不要禁用 `prefers-reduced-motion` 媒体查询。

自版本 3.7.0 起，Animate.css 支持 `prefers-reduced-motion` 媒体查询，该查询根据操作系统系统对支持浏览器的偏好来禁用动画（大多数当前浏览器都支持）。这是一个关键的无障碍功能，不应被禁用！这是内置在浏览器中以帮助患有前庭和癫痫疾病的人的功能。你可以在这里了解更多信息 [链接](https://css-tricks.com/revisiting-prefers-reduced-motion-the-reduced-motion-media-query/)。如果你的网站需要动画才能正常工作，请警告用户，但不要禁用此功能。你只需使用 CSS 即可轻松实现。以下是一个简单的示例：

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="eltonmesquita" data-slug-hash="oNjGGbw" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Prefers-reduce-motion media query">
  <span>See the Pen <a href="https://codepen.io/eltonmesquita/pen/oNjGGbw">
  Prefers-reduce-motion media query</a> by Elton Mesquita (<a href="https://codepen.io/eltonmesquita">@eltonmesquita</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

<h2 id="gotchas">陷阱</h2>

### 你不能在行内元素上进行动画

尽管某些浏览器可以在行内元素上进行动画，但这违反了 CSS 动画规范，并且可能会在某些浏览器中出现错误或最终停止工作。始终在块级或行内块级元素上进行动画（网格和弹性容器以及子元素也是块级元素）。当对行内级元素进行动画时，可以将元素设置为 `display: inline-block`。

### 溢出

大多数 Animate.css 动画会将元素移动到屏幕上，并可能在你的网站上创建滚动条。使用 `overflow: hidden` 属性可以解决这个问题。没有固定的规则来说明何时何地使用它，但基本的想法是在包含动画元素的父元素中使用它。你需要自己决定何时以及如何使用它，[这个指南](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow) 可以帮助你理解它。

### 每次动画重复之间的间隔

不幸的是，目前无法仅使用纯 CSS 实现这一点。你必须使用 Javascript 来实现这个结果。

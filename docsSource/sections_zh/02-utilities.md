## 实用的附加类

Animate.css 附带了一些实用的类来简化其使用。

### 设置动画延迟 class

您可以直接在元素的 class 属性上添加延迟，就像这样：

```html
<div class="animate__animated animate__bounce animate__delay-2s">Example</div>
```

Animate.css 提供以下延迟：

| 类名                | 默认延迟时间 |
| ------------------- | ------------ |
| `animate__delay-2s` | `2s`         |
| `animate__delay-3s` | `3s`         |
| `animate__delay-4s` | `4s`         |
| `animate__delay-5s` | `5s`         |

提供的延迟为 1 到 5 秒。您可以自定义它们，将 `--animate-delay` 属性设置为更长或更短的持续时间：

```css
/* 所有的延迟类将会延长两倍的时间才开始执行 */
:root {
  --animate-delay: 2s;
}

/* 所有的延迟类将会减少一半的时间才开始执行 */
:root {
  --animate-delay: 0.5s;
}
```

### 设置动画速度为缓慢, 稍慢, 快速, 和更快的 class

您可以通过添加这些类来控制动画的速度，如下所示：

```html
<div class="animate__animated animate__bounce animate__faster">Example</div>
```

| 类名              | 默认速度时间 |
| ----------------- | ------------ |
| `animate__slow`   | `2s`         |
| `animate__slower` | `3s`         |
| `animate__fast`   | `800ms`      |
| `animate__faster` | `500ms`      |

该类 `animate__animated` 的默认速度为 1s。您还可以通过属性 `--animate-duration ` 全局或本地自定义动画持续时间。这将影响动画和实用程序类。例子：

```css
/* 所有动画都需要两倍的时间才能完成 */
:root {
  --animate-duration: 2s;
}

/* 只有这个元素需要一半的时间才能完成 */
.my-element {
  --animate-duration: 0.5s;
}
```

请注意，一些动画的持续时间可能少于 1 秒。由于我们使用了 `CSS` 的 `calc()` 函数，通过 `--animation-duration` 属性设置持续时间将会遵循这些比例。因此，当你更改全局持续时间时，所有的动画都会响应这个变化！

### 重复动画

你可以通过添加以下类来控制动画的重复次数，如下所示：

```html
<div class="animate__animated animate__bounce animate__repeat-2">Example</div>
```

| 类名                | 默认重复次数 |
| ------------------- | ------------ |
| `animate__repeat-1` | `1`          |
| `animate__repeat-2` | `2`          |
| `animate__repeat-3` | `3`          |
| `animate__infinite` | `无限次`     |

与延迟和速度类一样，`animate__repeat` 类基于 `--animate-repeat` 属性，并且默认迭代次数为 `1`。你可以通过将 `--animate-repeat` 属性设置为更长或更短的值来自定义它们：

```css
/* 该元素将重复播放动画2次
   最好在本地设置这个属性，而不是全局，否则你可能会陷入混乱的境地 */
.my-element {
  --animate-repeat: 2;
}
```

请注意 `animate__infinite` 不使用任何自定义属性，并且对 `--animate-repeat` 的更改不会产生任何效果。不要忘记阅读[最佳实践](#best-practices)部分，以充分利用重复动画。

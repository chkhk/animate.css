## 使用 Javascript

当你将 animate.css 与 Javascript 结合使用时，你可以做很多其他的事情。一个简单的例子：

```javascript
const element = document.querySelector('.my-element');
element.classList.add('animate__animated', 'animate__bounceOutLeft');
```

你可以检测到动画何时结束:

```javascript
const element = document.querySelector('.my-element');
element.classList.add('animate__animated', 'animate__bounceOutLeft');

element.addEventListener('animationend', () => {
  // do something
});
```

或更改其持续时间:

```javascript
const element = document.querySelector('.my-element');
element.style.setProperty('--animate-duration', '0.5s');
```

你可以使用一个简单的函数来添加动画类并自动删除它们。

```javascript
const animateCSS = (element, animation, prefix = 'animate__') =>
  // 我们创建一个Promise并返回它
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    const node = document.querySelector(element);

    node.classList.add(`${prefix}animated`, animationName);

    // 当动画结束时，我们清理 class 并解析 Promise
    function handleAnimationEnd(event) {
      event.stopPropagation();
      node.classList.remove(`${prefix}animated`, animationName);
      resolve('Animation ended');
    }

    node.addEventListener('animationend', handleAnimationEnd, {once: true});
  });
```

并像这样使用它:

```javascript
animateCSS('.my-element', 'bounce');

// or
animateCSS('.my-element', 'bounce').then((message) => {
  // Do something after the animation
});
```

如果你很难理解前面的 Javascript 函数，可以看看 [const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const), [classList](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList), [arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions), and [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

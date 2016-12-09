### Props are Read-Only
Whether you declare a component as a function or a class, it must never modify its own props. Consider this sum function:

```
function sum(a, b) {
  return a + b;
}
```

Such functions are called "**pure**" because they do not attempt to **change their inputs**, and always return the same result for the same inputs.

In contrast, this function is impure because it changes its own input:

```
function withdraw(account, amount) {
  account.total -= amount;
}
```
React is pretty flexible but it has a single strict rule:

All React components must act like pure functions with respect to their props.
----
Of course, application UIs are dynamic and change over time. In the next section, we will introduce a new concept of "state". State allows React components to change their output over time in ∏response to user actions, network responses, and anything else, without violating this rule.

### context
In some cases, you want to pass data through the component tree without having to pass the props down manually at every level. You can do this directly in React with the powerful "context" API.


## 闭包 / 高阶函数

比如： 有 a, b, c, 三个人,

  a 有 处理数据的方法 ( 函数 ) fn,

  b 有 需要处理的数据 data,

  需要在 c 那里执行 。

  要怎么做呢？



 比如:

  - a 中定义了一个方法 fn, fn 可以传一个参数

```
  //  in a.js
  function fn (num) {
     return num +1;
  }
```
  - b 手中有需要 fn 方法处理的 数据 data，

```
  // in b.js
  let data = 5;
```
### 第一种做法

  - a 将 方法( 函数 ) fn 给 b
  - 现在 b 有 方法，有数据，可是不应该在他这里执行。( fn(data) 不在 b 这里执行 )

  - 于是 b 定义了一个 方法( 函数 ) setFn。将 fn 和 他有的数据 num 组合，

```
  //  in b.js
  function setFn (num) {

    return function(){
      fn(num)
    }

  }
```
  - 稍微 观察下 setFn 这个方法
  - setFn 可以传参数 ，( 可以传入 b 拥有的数据 )
  - 返回 一个 匿名函数，在这个匿名函数里面调用 fn, 这样只有调用 setFn 函数的返回函数，fn 才会执行 . ( 比如这样调用： setFn(data)()  )

  - 然后 b 这个方法给 c 之前先调用一次. ( b要将自己拥有的数据 data 给先传进去 )

```
  let finalFn = setFn(data);
```

  - c 拿到 finalFn 方法后，也不需要有 方法 fn, 也不需要有数据 data, 他只需要 执行一下 finalFn(), 就得到了想要的结果。( 有点膝盖中枪的感觉。。。)

```
// in c.js
  finalFn();
```



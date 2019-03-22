<!--
 * @Author: Wy
 * @LastEditors: Wy
 * @Description: flow install and examples
 * @Date: 2019-03-20 15:59:30
 * @LastEditTime: 2019-03-22 15:43:42
 -->

## flow-test

#### 1. install

```bash
# in your project
  sudo npm install --save-dev babel-cli babel-preset-flow
  sudo npm instal -g flow-bin
# create a directory to save files writed by flow code, this step is not necessary
  mkdir flow-test
  cd flow-test
# create a empty file called `.flowconfig`
  flow init
# create a file to write code
  vi index.js
# write code in index.js
  ...
# run `flow` to run index.js
```

#### 2.examples

```javascript
// index.js
/* @flow */

// 类型推断
// example 1
function split(str) {
  return str.split(" ");
}
split(11);

// 类型注释（常见的有数组、类和对象）

// example 2
function add(x, y) {
  return x + y;
}

add("Hello", 11);

// example 3
function add(x: number, y: number): number {
  return x + y;
}
add("Hello", 11);

// example 4
function add(x: number, y: number): number {
  return x + y;
}
add(12, 11);

// example 5
var arrar: Array<number | string> = [1, 2, 3];
arrar.push("hello");

// example6
// 类
class Bar {
  x: string; // x 是字符串
  y: string | number; // y 可以是字符串或者数字
  z: boolean;

  constructor(x: string, y: string | number) {
    this.x = x;
    this.y = y;
    this.z = false;
  }
}

var bar: Bar = new Bar("hello", 4);

// 对象
var obj: { a: string, b: number, c: Array<string>, d: Bar } = {
  a: "hello",
  b: 11,
  c: ["hello", "world"],
  d: new Bar("hello", 3)
};
```

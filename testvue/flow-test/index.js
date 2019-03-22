/*
 * @Author: Wy
 * @LastEditors: Wy
 * @Description: 
 * @Date: 2019-03-20 15:42:10
 * @LastEditTime: 2019-03-22 18:12:08
 */
/*
/* @flow */

// function split(str) {
//   return str.split(' ')
// }

// split(11)


// function add(x, y) {
//   return x + y;
// }

// add("Hello", 11);



// function add(x: number, y: number): number {
//   return x + y
// }

// add('Hello', 11)



// function add(x: number, y: number): number {
//   return x + y
// }

// add(12, 11)


// 数组类型注释的格式是 Array<T>   T表示数组中每项的数据类型。
// var arrar: Array<number | string> = [1, 2, 3]
// arrar.push('hello')


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
var obj: {
  a: string,
  b: number,
  c: Array < string > ,
  d: Bar
} = {
  a: "hello",
  b: 11,
  c: ["hello", "world"],
  d: new Bar("hello", 3)
};
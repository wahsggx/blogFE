/*
 * @Author: Wy
 * @LastEditors: Wy
 * @Description: 
 * @Date: 2019-03-20 15:42:10
 * @LastEditTime: 2019-03-20 16:32:13
 */
/*
/* @flow */

function split(str) {
  return str.split(' ')
}

split(11)


function add(x: number, y: number): number {
  return x + y
}

add('Hello', 11)

function add(x: number, y: number): number {
  return x + y
}

add(12, 11)


// 数组类型注释的格式是 Array<T>   T表示数组中每项的数据类型。
var arrar: Array<number | string> = [1, 2, 3]
arrar.push('hello')


<!--
 * @Author: Wy
 * @LastEditors: Wy
 * @Description: 
 * @Date: 2019-03-20 15:59:30
 * @LastEditTime: 2019-03-20 16:47:39
 -->
# FLOW is what?

FLOW is a static type checkor for javascript. 

# why to learn FLOW?

Because we should to learn Vue source code and FLOW is used in Vue source code.

# how to learn FLOW

**go to [flow official website](http://jianshu.com)**

just followed by **"[GET STARTED](https://flow.org/en/docs/getting-started/)"** to learn

# flow-test
this is a  test about flow
- #### 1.install 
  ```javascript
  // in your project
    sudo npm install --save-dev babel-cli babel-preset-flow
    sudo npm instal -g flow-bin
  // create a directory to save files writed by flow code, this step is not necessary
    mkdir flow-test
  // create a empty file called `.flowconfig` 
    flow init
  // create a file to write code 
    vim index.js
  // write code in index.js
    ...
  // run `flow` to run your index.js
  
  ``` 
- #### 2.examples
  
  ``` javascript
  // index.js
  /* @flow */

  // 类型推断
  // example 1
  function split(str) {
    return str.split(' ')
  }
  split(11)

  // 类型注释（常见的有数组、类和对象）
  // example 2
  function add(x: number, y: number): number {
    return x + y
  }
  add('Hello', 11)

  // example 3
  function add(x: number, y: number): number {
    return x + y
  }
  add(12, 11)

  // example 4
  var arrar: Array<number | string> = [1, 2, 3]
  arrar.push('hello')
  ```
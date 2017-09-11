# 数据结构
> 数据结构分为逻辑结构和存储结构两种。  

所有代码都经过具体测试运行，具体环境为：
- Javascript执行环境： Nodejs 8.0

## 目录
-------------
* [列表](#list)
	* push(压栈)
	* pop(出栈)
	* peek(返回栈顶元素)
	* clear(返回栈顶元素)
	* length(返回栈的长度)
	* toString(返回栈)
* [栈](#stack)
* [队列](#queue)
* [链表](#chain)

## 使用
```Javascript
npm install hzl-data-structures
```

## 列表 <span id="list"></span>
列表是非常常见的一种数据结构，比如日常所见的购物清单、待办事项等等。
它提供了对列表数据的一系列操作，比如：添加、删除、修改、遍历等功能。
当我们把这样的具体问题抽象成用列表去解决的时候，往往可以简化问题。

详细：[列表笔记](笔记/列表)

```Javascript
let List = require('hzl-data-structures');
let list = new List();


```

### 栈 <span id="stack"></span>
栈也是一种非常常见的数据结构,在计算机的世界里,在计算机的世界里,
栈是一种很高效的数据结构,因为数据只能在栈顶添加或者删除.
因此栈也被称为一种后入先出的数据结构.栈的使用遍布程序语言实现的方方面面,
从表达式求值到函数调用.

详细：[栈笔记](笔记/栈)

```Javascript
let Stack = require('hzl-data-structures');
let stack = new Stack();


```

### 队列
队列是一种前进先出的数据结构. 在日常生活中非常常见:比如去银行排队办理业务.
在计算机中也极其常见, 很多情况下,当有大量任务需要完成时, 就会把任务暂时加入到
任务队列中, 执行一个删除一个,继续执行下一个任务.

### 链表
有时候数组不一定是最佳的组织数据的数据结构，因为数组通常都是固定大小的，当数据填满时，
再加入新元素就变得很困难。在数组中，添加和删除元素也很麻烦，因为要移动数组中的其他元素。
因此如果需要频繁的添加或者删除元素，可以考虑使用链表组织数据。

## 参考
-------------
* [《数据结构与算法JavaScript描述》]()
* [《学习JavaScript数据结构与算法》]()
* [《算法导论（原书第3版）》]()
* [《大话数据结构》]()
* [Javascript API手册](http://www.w3school.com.cn/jsref/jsref_obj_array.asp)
* [ECMAScript](http://www.ecma-international.org/ecma-262/6.0/)
* [Mozilla JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)


## License
-------------

MIT
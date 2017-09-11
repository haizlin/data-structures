'use strict';
/**
 * Stack 
 * haizlin 80285586@qq.com
 */

class Stack {
	constructor() {
		this.top = 0; // 栈顶元素
		this.dataStore = []; // 存储元素
	}

	// 入栈
	push(item) {
		this.dataStore[this.top++] = item;
	}

	// 出栈
	pop() {
		if (this.top <= 0) {
			return null;
		}

		return this.dataStore[--this.top];
	}

	// 返回栈顶元素
	peek() {
		if (this.top <= 0) {
			return null;
		}

		return this.dataStore[this.top - 1];
	}

	// 检测是否为空
	isEmpty() {
		return this.top === 0;
	}

	// 返回元素的个数
	length() {
		return this.top;
	}

	// 返回列表的字符串形式
	toString(flag) {
		if (flag) {
			return this.dataStore.toString();
		}
		return this.dataStore;
	}

	// 清除所有元素
	clear() {
		this.dataStore = [];
		this.top = 0;
	}
}

module.exports = Stack;
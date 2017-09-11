'use strict';
/**
 * Stack 
 * haizlin 80285586@qq.com
 */

class List() {
	constructor() {
		this.listSize = 0; //长度
		this.pos = 0; //当前位置
		this.dataStore = []; // 存储元素
	}

	// 清除所有元素
	clear() {
		this.dataStore = [];
		this.listSize = this.pos = 0;
	}

	// 返回列表的字符串形式
	toString(flag) {
		if (flag) {
			return this.dataStore.toString();
		}
		return this.dataStore;
	}

	// 返回元素的个数
	length() {
		return this.listSize;
	}

	// 查找元素
	find(item) {
		var len = this.listSize;
		for (var i = 0; i < len; i++) {
			if (this.dataStore[i] === item) {
				return i;
			}
		}

		return -1;
	}

	// 添加
	append(item) {
		this.dataStore[this.listSize++] = item;
	}

	// 插入
	insert(item) {

	}

	// 移除元素
	remove(item) {
		var index = this.find(item);
		if (index > -1) {
			this.dataStore.splice(index, 1);
			--this.listSize;
		}

		return false;
	}

	// 第一个元素
	front() {
		this.pos = 0;
	}

	// 最后一个元素
	end() {
		this.pos = this.listSize - 1;
	}

	// 前移
	prev() {
		if (this.pos > 0) {
			--this.pos;
		}
	}

	// 后移
	next() {
		if (this.pos < this.listSize - 1) {
			++this.pos;
		}
	}

	// 查看当前的索引
	currPos() {
		return this.pos;
	}

	// 移动步长
	moveTo(step) {
		this.pos = step;
	}

	// 获取当前元素
	getElement() {
		return this.dataStore[this.pos];
	}
}

module.exports = List;
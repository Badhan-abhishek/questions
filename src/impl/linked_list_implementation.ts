class LLNode {
	value: undefined | number;
	next: undefined | LLNode;

	constructor(value: undefined | number) {
		this.value = value;
	}
}

export class LinkedList {
	private ll: LLNode;
	head: LLNode | undefined;
	tail: LLNode | undefined;
	tailPtr = 0;
	headPtr = 0;

	constructor() {
		this.ll = new LLNode(undefined);
	}

	isEmpty() {
		return this.size() === 0;
	}

	_getList() {
		return this.ll;
	}

	private append(value: number) {
		if (this.isEmpty()) {
			this.ll.value = value;
			this.head = this.ll;
			this.tail = this.ll;
			this.headPtr = this.headPtr + 1;
			this.tailPtr = this.tailPtr + 1;
		} else {
			this.tail!.next = new LLNode(value);
			this.tail = this.tail!.next;
			this.tailPtr = this.tailPtr - 1;
		}
	}

	addFirst(value: number) {
		if (this.isEmpty()) {
			this.append(value);
		} else {
			const newNode = new LLNode(value);
			newNode.next = this.head;
			this.head = newNode;
		}
	}

	addLast(value: number) {
		if (this.isEmpty()) {
			this.append(value);
		} else {
			const newNode = new LLNode(value);
			this.tail!.next = newNode;
			this.tail = this.tail!.next;
			this.tailPtr = this.tailPtr + 1;
		}
	}

	removeFirst() {
		if (this.isEmpty()) {
			throw new Error("List is already empty");
		}
		this.head = this.head!.next;
		this.headPtr += 1;
		if (!this.head) {
			this.tail = undefined;
		}
	}

	removeLast() {
		if (this.isEmpty()) {
			throw new Error("List is already empty");
		}
		this.tailPtr -= 1;
	}

	index(idx: number) {
		let ptrLocation = this.headPtr + (idx + 1);
		if (ptrLocation > this.tailPtr) {
			throw new Error("Index out of bounds");
		}
		let nn = this.head;
		while (ptrLocation > 1) {
			nn = nn!.next;
			ptrLocation -= 1;
		}
		return nn;
	}

	size() {
		if (this.headPtr === 0 && this.tailPtr === 0) {
			return 0;
		}
		if (this.headPtr === this.tailPtr) return 1;
		return this.tailPtr - this.headPtr + 1;
	}
}

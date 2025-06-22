export class Stack {
	private s: number[] = [];
	private s_size: number = Number.POSITIVE_INFINITY;

	/**
	 * s_size: Define size of stack, if undefined, default will be set
	 * @default Number.POSITIVE_INFINITY
	 */
	constructor(s_size?: number) {
		if (s_size) {
			this.s_size = s_size;
		}
	}

	getStack() {
		return this.s;
	}

	push(value: number) {
		if (this.isFull()) {
			throw new Error("Stack overflow");
		}
		return this.s.push(value);
	}

	pop() {
		if (this.isEmpty()) {
			throw new Error("Stack underflow");
		}
		return this.s.pop();
	}

	isEmpty() {
		return this.size() === 0;
	}

	isFull() {
		return this.size() === this.s_size;
	}

	peek() {
		if (this.isEmpty()) {
			throw new Error("Stack empty, cannot be peeked");
		}
		return this.s[this.size() - 1];
	}

	size() {
		return this.s.length;
	}
}

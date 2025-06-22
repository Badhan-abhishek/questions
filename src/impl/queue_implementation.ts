export class Queue {
	private q: number[] = [];
	private limit: number = Number.POSITIVE_INFINITY;
	head: number = 0;
	tail: number = 0;

	/**
	 * @default limit is Infinity
	 */
	constructor(limit?: number) {
		if (limit) {
			this.limit = limit;
		}
	}

	_getQueue() {
		return this.q;
	}

	size() {
		if (!this.head && !this.tail && this.head === this.tail) {
			return 0;
		}
		return this.tail - this.head + 1;
	}

	isEmpty() {
		return this.size() === 0;
	}

	isFull() {
		return this.size() === this.limit;
	}

	peek() {
		if (this.isEmpty()) {
			throw new Error("Oh!! nothing to remove, queue is already empty");
		}
		return this.q[this.head - 1];
	}

	insert(value: number) {
		if (this.isFull()) {
			throw new Error("NAaaaaa!! queue is already full");
		}
		this.tail = this.tail + 1;
		if (this.head === 0) this.head = 1;
		this.q[this.tail - 1] = value;
	}

	private resetQueue() {
		this.head = 0;
		this.tail = 0;
		this.q = [];
	}

	dequeue() {
		if (this.isEmpty()) {
			throw new Error("HA HA HA!! you have reached end of queue");
		}
		const prev = this.q[this.head - 1];
		this.head = this.head + 1;
		if (this.head > this.tail) {
			this.resetQueue()
		}
		return prev;
	}
}

// -1, -1
// 0, 0 -> 1
// 0, 1 -> 2
// 0, 2 -> 3
// 1, 2 -> 2
//
import { Queue } from "../impl/queue_implementation";

describe("Queue", () => {
	let queue: Queue;

	beforeEach(() => {
		queue = new Queue();
	});

	test("should initialize with an empty queue and default infinite limit", () => {
		expect(queue.size()).toBe(0);
		expect(queue.isEmpty()).toBe(true);
		expect(queue.isFull()).toBe(false);
		expect(queue.head).toBe(0);
		expect(queue.tail).toBe(0);
	});

	test("should initialize with a custom limit", () => {
		const customQueue = new Queue(3);
		expect(customQueue.size()).toBe(0);
		expect(customQueue.isEmpty()).toBe(true);
		expect(customQueue.isFull()).toBe(false);
	});

	test("should add elements to the queue", () => {
		queue.insert(10);
		expect(queue.head).toBe(1);
		expect(queue.tail).toBe(1);
		expect(queue.size()).toBe(1);
		expect(queue.isEmpty()).toBe(false);
		expect(queue.isFull()).toBe(false);

		queue.insert(20);
		expect(queue.head).toBe(1);
		expect(queue.tail).toBe(2);
		expect(queue.size()).toBe(2);
	});

	test("should throw error when inserting into a full queue", () => {
		const smallQueue = new Queue(1);
		smallQueue.insert(100);
		expect(() => {
			smallQueue.insert(200);
		}).toThrow("NAaaaaa!! queue is already full");
	});

	test("should return the front element without removing it", () => {
		queue.insert(10);
		queue.insert(20);
		expect(queue.peek()).toEqual(10);
	});

	test("should throw error when peeking an empty queue", () => {
		expect(() => {
			queue.peek();
		}).toThrow("Oh!! nothing to remove, queue is already empty");
	});

	test("should remove and return the front element", () => {
		queue.insert(10);
		queue.insert(20);
		const dequeued1 = queue.dequeue();
		expect(dequeued1).toEqual(10);
		expect(queue.head).toBe(2);
		expect(queue.tail).toBe(2);
		expect(queue.size()).toBe(1);
		queue.dequeue();
		expect(queue.head).toBe(0);
		expect(queue.tail).toBe(0);
		expect(queue.size()).toBe(0);

		expect(() => {
			queue.dequeue();
		}).toThrow("HA HA HA!! you have reached end of queue");
	});

	test("should throw error when dequeuing from an empty queue", () => {
		expect(() => {
			queue.dequeue();
		}).toThrow("HA HA HA!! you have reached end of queue");
	});

	test("size should reflect the number of elements (based on head/tail difference)", () => {
		expect(queue.size()).toBe(0);

		queue.insert(1);
		expect(queue.size()).toBe(1);

		queue.insert(2);
		expect(queue.size()).toBe(2);
	});
});

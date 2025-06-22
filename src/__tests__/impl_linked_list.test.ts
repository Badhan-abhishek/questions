import { LinkedList } from "../impl/linked_list_implementation";

describe("Linked list", function () {
	let ll: LinkedList;

	beforeEach(() => {
		ll = new LinkedList();
	});

	it("should be empty", function () {
		const list = ll._getList();
		expect(list.value).toBeUndefined();
	});

	it("should have same head and tail", function () {
		ll.addLast(10);
		expect(ll.head?.value).toStrictEqual(10);
		expect(ll.tail?.value).toStrictEqual(10);
	});

	it("should have more values", function () {
		ll.addLast(10);
		ll.addLast(20);
		expect(ll.head?.value).toStrictEqual(10);
		expect(ll.tail?.value).toStrictEqual(20);
	});

	it("should remove first", function () {
		ll.addLast(10);
		ll.addLast(20);
		ll.removeFirst();
		expect(ll.head?.value).toStrictEqual(20);
		expect(ll.tail?.value).toStrictEqual(20);
	});

	it("size should be 4 with remove", function () {
		ll.addLast(10);
		ll.addLast(20);
		ll.addLast(30);
		ll.addLast(40);
		ll.addLast(40);
		ll.removeFirst();
		expect(ll.size()).toBe(4);
	});
});

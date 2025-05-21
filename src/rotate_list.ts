import type { ListNode } from "./data/linked-list";

function rotateRight(head: ListNode | null, k: number): ListNode | null {
	if (!head || head.next === null || k === 0) return head;
	let length = 1;
	let tail = head;
	while (tail.next) {
		tail = tail.next;
		length++;
	}

	k = k % length;
	if (k === 0) return head;

	tail.next = head;

	let newTail = head;
	for (let i = 0; i < length - k - 1; ++i) {
		newTail = newTail.next!;
	}

	let newHead = newTail.next;
	newTail.next = null;
	return newHead;
}

export { rotateRight };

// 0, 1, 2
// 2, 0, 1
// 1, 2, 0
// 0, 1, 2
// 2, 0, 1

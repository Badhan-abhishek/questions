export class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val ? val : 0;
		this.next = next ? next : null;
	}
}

export function getLinkedList(nodes: number[]): ListNode {
	const ll = new ListNode(nodes[0]);
	let nextNode: ListNode | null = (ll.next = new ListNode());
	for (let i = 1; i < nodes.length; ++i) {
		nextNode.val = nodes[i];
		if (i === nodes.length - 1) {
			continue;
		}
		nextNode.next = new ListNode();
		nextNode = nextNode.next;
	}
	return ll;
}

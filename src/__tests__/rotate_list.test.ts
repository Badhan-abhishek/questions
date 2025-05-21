import { rotateRight } from "../rotate_list";
import { getLinkedList } from "../data/linked-list";

const ll1 = getLinkedList([1, 2, 3, 4, 5]);
const ll1Result = getLinkedList([4, 5, 1, 2, 3]);

const ll2 = getLinkedList([0, 1, 2]);
const ll2Result = getLinkedList([2, 0, 1]);

test("Rotate list to right", function () {
	const res = rotateRight(ll1, 2);
	expect(res).toStrictEqual(ll1Result);

	const res2 = rotateRight(ll2, 4);
	expect(res2).toStrictEqual(ll2Result);
});

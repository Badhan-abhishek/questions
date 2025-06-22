import { Stack } from "../impl/stack_implementation";

describe("Stack", function () {
	const s = new Stack(5);

	it("should be empty", function () {
		expect(s.isEmpty()).toBeTruthy();
	});

	it("should allow 5 element push", function () {
		s.push(1);
		s.push(2);
		s.push(3);
		s.push(4);
		s.push(5);
		expect(s.size()).toStrictEqual(5);
	});

	it("should not allow push", function () {
		try {
			s.push(10);
		} catch (e) {
			expect(e.message).toBeTruthy();
		}
	});

	it("should be full", function () {
		expect(s.isFull()).toBeTruthy();
	});

	it("should allow pop", function () {
		s.pop();
		expect(s.peek()).toStrictEqual(4);
	});

	it("should not allow pop on emopty", function () {
		s.pop();
		s.pop();
		s.pop();
		s.pop();
		try {
			s.pop();
		} catch (e) {
			expect(e.message).toBeTruthy();
		}
	});
});

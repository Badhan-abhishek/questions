import { addTwoPromises } from "../add_two_promises";

const promise1 = new Promise<number>((resolve) =>
	setTimeout(() => resolve(2), 20),
);
const promise2 = new Promise<number>((resolve) =>
	setTimeout(() => resolve(5), 60),
);
const promise3 = new Promise<number>((resolve) =>
	setTimeout(() => resolve(10), 50),
);
const promise4 = new Promise<number>((resolve) =>
	setTimeout(() => resolve(-12), 30),
);

test("Add two promises", function () {
	addTwoPromises(promise1, promise2).then((result) => {
		expect(result).toEqual(7);
	});

	addTwoPromises(promise3, promise4).then((result) => {
		expect(result).toEqual(-2);
	});
});

type P = Promise<number>;

export async function addTwoPromises(promise1: P, promise2: P): P {
	// functional way
	return (await Promise.all([promise1, promise2])).reduce(
		(acc, i) => acc + i,
		0,
	);
}

// Little verbose solution

function mergeAlternately(word1: string, word2: string): string {
	let result = "";
	let count = 0;
	while (count <= word1.length - 1 || count <= word2.length - 1) {
		if (word1[count]) {
			result += word1[count];
		} else {
			if (word2.length > count) {
				result += word2.slice(count, word2.length);
				break;
			}
		}
		if (word2[count]) {
			result += word2[count];
		} else {
			if (word1.length > count) {
				result += word1.slice(count + 1, word1.length);
				break;
			}
		}
		count++;
	}

	return result;
}

export { mergeAlternately };

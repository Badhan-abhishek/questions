// WIP

function convert(s: string, numRows: number): string {
	if (s.length <= numRows) {
		return Array.from(s).reduce((i: string, v: string) => {
			if (i === "") {
				i = v + "\n";
			} else {
				i += v + "\n";
			}
			return i;
		}, "");
	}
	return s;
}

console.log(convert("AJSDK", 5));

// (0, 0)  ----          (0, 3)
// (1, 0)  ----   (1, 2)
// (2, 0) (2, 1)
// (3, 0)  ----

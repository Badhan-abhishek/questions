function Palindrome(str: string): boolean {
  const newStr = str.trim().replaceAll(" ", "").toLowerCase();
  if (newStr.length <= 1) return true;
  for (let i = 0; i < newStr.length / 2; ++i) {
    const rightIdx = newStr.length - 1 - i;
    if (newStr[i] !== newStr[rightIdx]) {
      return false;
    }
  }
  return true;
}

export { Palindrome };

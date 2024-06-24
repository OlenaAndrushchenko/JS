function containsEnglishWord(s) {
    return s.toLowerCase().includes("english");
}

console.log(containsEnglishWord("abcEnglishdef"));
console.log(containsEnglishWord("abcnEglishsef"));
console.log(containsEnglishWord("eNglisH"));
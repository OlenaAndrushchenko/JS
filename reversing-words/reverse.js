function reverseWords(words) {
    let trimmedWords = words.trim();
    let wordsArr = trimmedWords.split(/\s+/);
    let reversedArr = wordsArr.reverse();
    let result = reversedArr.join(' ');

    return result;

}

console.log(reverseWords("Hello World")); 
console.log(reverseWords("Hi There."));
console.log(reverseWords("   Extra   Space   Test   "));
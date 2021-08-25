// Given two strings, find the count of characters common in each.
let s1 = "aabcd";
let s2 = "abcef";

function commonCharacterCount(s1, s2) {
  let charMap = {};
  let count = 0;
  for (let i = 0; i < s1.length; i++) {
    charMap[s1[i]] = charMap[s1[i]] + 1 || 1;
  }

  for (let j = 0; j < s2.length; j++) {
    console.log(charMap);
    if (charMap[s2[j]]) {
      charMap[s2[j]] = charMap[s2[j]] - 1;
      count++;
    }
  }

  return count;
}

// Using regex, but it is most likely O(n^2) because for each character in s1 it will then traverse s2 and replace the char with !
function commonCharacterCount2(s1, s2) {
  for (let i = 0; i < s1.length; i++) {
    s2 = s2.replace(s1[i], "!");
  }

  return s2.replace(/[^!]/g, "").length;
}

console.log(commonCharacterCount2(s1, s2));

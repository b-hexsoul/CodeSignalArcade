// Given an array of strings, return another array containing all of its longest strings.

// Initial Implementaion
function allLongestStrings(inputArray) {
  let longest = 0;
  inputArray.forEach((item) => {
    if (item.length > longest) longest = item.length;
  });

  return inputArray.filter((item) => item.length === longest);
}

// O(n)

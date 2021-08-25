// Some people are standing in a row in a park.
// There are trees between them which cannot be moved.
// Your task is to rearrange the people by their heights in a non-descending order without moving the trees. \
// People can be very tall!

// For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be
// sortByHeight(a) = [-1, 150, 160, 170, -1, -1, 180, 190].

function sortByHeight(a) {
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length; j++) {
      if (a[i] === -1) break;
      if (a[i] < a[j] && a[j] !== -1) {
        [a[i], a[j]] = [a[j], a[i]];
      }
    }
  }
  return a;
}

// Interesting solution!
// making a new array.. with the sorted people
// return maping over input, if the item is not a tree (-1) then return the first item of new array (shift())
// otherwise return -1

function sortByHeight2(a) {
  var s = a.filter((h) => h > 0).sort((a, b) => a - b);
  return a.map((val) => (val === -1 ? -1 : s.shift()));
}

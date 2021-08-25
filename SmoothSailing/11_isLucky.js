// Ticket numbers usually consist of an even number of digits.
// A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.
// Given a ticket number n, determine if it's lucky or not.

function isLucky(n) {
  let arr = n.toString().split("");
  const reducer = (acc, val) => parseInt(acc) + parseInt(val);
  return (
    arr.slice(0, arr.length / 2).reduce(reducer) ===
    arr.slice(arr.length / 2, n.length).reduce(reducer)
  );
}

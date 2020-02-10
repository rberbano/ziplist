const a = ['a', 'b', 'c'];
const b = [1, 2, 3];

function ziplist(list1, list2) {
  const result = [];
  for (let i = 0; i < list1.length; i++) {
    result.push(list1[i], list2[i]);
  }
  return result;
}
console.log(ziplist(a, b));

// using the Underscore.js commands
function zipListTheSimpleWay(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}
console.log(zipListTheSimpleWay(a, b));

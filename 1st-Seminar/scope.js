/**
 * var는 function scope
 */
if (true) {
  var x = "var";
}
console.log(`var: ${x}`);

function colorFunction() {
  if (true) {
    var color = "blue";
    console.log(color);
  }
  console.log(color);
}
console.log(color); // ReferenceError: color is not defined
colorFunction();

/**
 * let은 function scope
 */
if (true) {
  let y = "let";
}
console.log(`let: ${y}`); // ReferenceError: y is not defined

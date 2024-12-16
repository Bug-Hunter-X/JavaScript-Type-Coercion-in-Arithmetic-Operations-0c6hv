function myFunction(a, b) {
  // Explicitly convert inputs to numbers
  const numA = parseInt(a, 10);
  const numB = parseInt(b, 10);

  //Check if conversion was successful
  if(isNaN(numA) || isNaN(numB)){
    return "Invalid input: Arguments must be numbers";
  }
  return numA + numB;
}

console.log(myFunction(5, '10')); // Output: 15
console.log(myFunction(5, 'abc')); // Output: Invalid input: Arguments must be numbers
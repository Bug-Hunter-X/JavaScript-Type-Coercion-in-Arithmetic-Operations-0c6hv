# JavaScript Type Coercion Bug

This repository demonstrates a common error in JavaScript related to type coercion during arithmetic operations.  The `myFunction` adds a number and a string, resulting in unexpected string concatenation instead of numerical addition.  This highlights the importance of explicit type checking and conversion in JavaScript to avoid subtle bugs.

## Bug

The `bug.js` file contains the buggy code.  The function `myFunction` takes two arguments, `a` and `b`.  If either `a` or `b` is a string, the addition operation performs string concatenation instead of numerical addition. 

## Solution

The `bugSolution.js` file shows how to fix the bug by explicitly converting the input arguments to numbers using `parseInt()` before performing the addition.

## How to reproduce

1. Clone this repository.
2. Navigate to the repository's directory.
3. Run `node bug.js` to observe the unexpected output.
4. Run `node bugSolution.js` to see the corrected output.
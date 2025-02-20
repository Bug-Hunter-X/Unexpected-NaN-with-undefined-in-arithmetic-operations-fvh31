# Unexpected NaN with undefined in arithmetic operations
This repository demonstrates an uncommon JavaScript behavior related to arithmetic operations involving `undefined` and `null`.  When adding `undefined` to a number, the result is `NaN` (Not a Number).  However, adding `null` to a number results in the number itself. This difference might lead to unexpected behavior if not handled correctly.

## Bug
The `bug.js` file showcases this behavior. Observe that adding `undefined` to a number results in `NaN`, while adding `null` results in a numeric outcome.  This asymmetry can be a source of subtle errors in JavaScript programs.

## Solution
The `bugSolution.js` provides a solution by explicitly checking for `undefined` values and handling them appropriately. This ensures more predictable and robust code.
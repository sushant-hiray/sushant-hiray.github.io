## Trignometric Module

### Current Status:

* Sin
* Cos

### Implemented Functions:

* is_canonical
* __hash__
* __eq__
* compare
* __str__
* diff
* subs

### Expected Additions (functions):

* eval ( a basic eval using lookup tables[1][2], use some library for faster implementation)
* rewrite as exponential, and other trignometric symbols.
* expand ( will be implemented after discussing with mentor)

### More definitions to be added:

* Tan
* Cot
* Trignometric Inverses (asin, acos, atan, acot , atan2: takes two args)


## Exponential Module

### Current Status
Unimplemented. `pow` class is implemented. 

###Expected Addition
Currently `pow` class is implemented. Inherit the `exp` module from it.

Some more functions:
* rewrite as cos, sin
* There are quite a few more classes implemented such as `log`, `MRVlog`,`LambertW` in SymPy. These will not be implemented
* Look into library for fast implementation of `eval`. 

## Hyperbolic Module
### Current Status
Unimplemented.

### Expected Addition
* `sinh`,`cosh`,`tanh`,`coth`,`asinh`,`acosh`,`atanh`,`acoth`
* Symbolic representation will be completed. Dependecy: Exponential Module
* Fast evaluation. Use of some library or use cmath just for starters.


##Complex Module

### Current Status
Unimplemented

###Expected Addition

* re
* img
* arg
* sign
* abs
* eval
* conjugate

Note: Handling of polar numbers will not be handled in current project


##Numbers Module
After selecting the special functions the following special numbers have to be implemented.
* Factorial
* Bernoulli


##Special Functions

There are quite a few interesting functions which have been implemented in SymPy, I've looked through the functions and decided which ones to implement and thus in turn I had to implement the above said modules, to complete the dependency list.


###Gamma Function

### Tensor Functions

[1] http://stackoverflow.com/questions/3688649/create-sine-lookup-table-in-c

[2] https://github.com/certik/sympy/blob/trig/sympy/functions/elementary/trigonometric.py

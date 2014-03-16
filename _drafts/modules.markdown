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


##Complex Module

### Current Status
Unimplemented

###Expected Addition



[1] http://stackoverflow.com/questions/3688649/create-sine-lookup-table-in-c
[2] https://github.com/certik/sympy/blob/trig/sympy/functions/elementary/trigonometric.py

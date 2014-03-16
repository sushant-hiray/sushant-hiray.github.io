# Project Details
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
After selecting the special functions the following special numbers lie in the dependency list and have to be implemented.
* Factorial
* Bernoulli
* sqrt


##Special Functions

There are quite a few interesting functions which have been implemented in SymPy, I've looked through the functions and decided which ones to implement and thus in turn I had to implement the above said modules, to complete the dependency list.

### Zeta Function
Expected Addition:
* Riemann Zeta => `eval`,`rewrite_as_dirichlet_eta`
* Dirichlet_eta => `eval` , `rewrite_as_zeta`

###Gamma Function
Expected Addition:
* Gamma
* UpperGamma
* LowerGamma

### Tensor Functions
Expected Addition:
* LeviCivita
* KroneckerDelta


#Implementation Details

##Trignometric Module

      class TF : public Function {
    private:
      RCP<const Basic> arg_; // The 'arg' in tf(arg)
    public:
      TF(const RCP<const Basic> &arg);
      virtual std::size_t __hash__() const;
      virtual bool __eq__(const Basic &o) const;
      virtual int compare(const Basic &o) const;
      virtual std::string __str__() const;
      bool is_canonical(const RCP<const Basic> &arg);
      virtual RCP<const Basic> diff(const RCP<const Symbol> &x) const;
      virtual RCP<const Basic> subs(const map_basic_basic &subs_dict) const;
      --------------------------------------------------------------------
      virtual RCP<const Basic> eval(); //eval will be a basic implementation
                                       //for instance sin using lookup tables
                                       //alternate libraries will be used for faster eval
      virtual RCP<const Basic> rewrite_as_other_tf(); // for eg: rewrite_as_sin() rewrite_as_tan();
      
    };

[1] http://stackoverflow.com/questions/3688649/create-sine-lookup-table-in-c

[2] https://github.com/certik/sympy/blob/trig/sympy/functions/elementary/trigonometric.py

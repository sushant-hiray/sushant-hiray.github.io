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
      RCP<const Basic> eval(); //eval will be a basic implementation
                                       //for instance sin using lookup tables
                                       //alternate libraries will be used for faster eval
      RCP<const Basic> rewrite_as_other_tf(); // for eg: rewrite_as_sin() rewrite_as_tan();
      
    };

##Exponential Module
      
      class exp : public Basic {
      private:
          RCP<const Basic> exp_; // base^exp
      
      public:
          exp(const RCP<const Basic> &exp);
          virtual std::size_t __hash__() const;
          virtual bool __eq__(const Basic &o) const;
          virtual int compare(const Basic &o) const;
          virtual std::string __str__() const;
          bool is_canonical(const RCP<const Basic> &exp);
          inline RCP<const Basic> get_exp() const { return exp_; }
          virtual RCP<const Basic> diff(const RCP<const Symbol> &x) const;
          virtual RCP<const Basic> subs(const map_basic_basic &subs_dict) const;
          virtual RCP<const Basic> rewrite_as_other_tf(); // for eg: rewrite_as_sin() rewrite_as_cos();
          RCP<const Basic> eval(); //alternate libraries will be used for faster eval
          
      };


##Hyperbolic Module
      class HB : public Function {
          private:
            RCP<const Basic> arg_; // The 'arg' in tf(arg)
          public:
            HB(const RCP<const Basic> &arg);
            virtual std::size_t __hash__() const;
            virtual bool __eq__(const Basic &o) const;
            virtual int compare(const Basic &o) const;
            virtual std::string __str__() const;
            bool is_canonical(const RCP<const Basic> &arg);
            virtual RCP<const Basic> diff(const RCP<const Symbol> &x) const;
            virtual RCP<const Basic> subs(const map_basic_basic &subs_dict) const;
            RCP<const Basic> eval(); //alternate libraries will be used for faster eval
            RCP<const Basic> rewrite_as_other_tf(); // for eg: rewrite_as_exp() rewrite_as_cosh();
            RCP<const Basic> _eval_conjugate(): //needs a dependency of complex module
       };

##Numbers Module
      class Factorial: public function {
            private:
                  RCP<const Basic> arg_; // The 'arg' in tf(arg)
            public:
                  Factorial(const RCP<const Basic> &arg);
                  virtual std::size_t __hash__() const;
                  virtual bool __eq__(const Basic &o) const;
                  virtual std::string __str__() const;
                  bool is_canonical(const RCP<const Basic> &arg);
                  RCP<const Basic> eval(); //gmp itself provides a fast version of eval
      };
      
      //to be decided after having a discussion with mentor
      //since bernoulli is an infinite sum, we might just get away with 
      //implementing the eval for integers
      //so a function just like in ntheory.cpp would be sufficient rather than a class
      class Bernoulli: public function {
            private:
                  RCP<const Basic> arg_; // The 'arg' in tf(arg)
            public:
                  Bernoulli(const RCP<const Basic> &arg);
                  virtual std::size_t __hash__() const;
                  virtual bool __eq__(const Basic &o) const;
                  virtual std::string __str__() const;
                  bool is_canonical(const RCP<const Basic> &arg);
                  RCP<const Basic> eval(); // arb[3] itself provides a fast version of eval
      };
  
##Special Functions
### Zeta Function
      class Zeta: public function {
            private:
                  RCP<const Basic> arg_; // The 'arg' in tf(arg)
            public:
                  Zeta(const RCP<const Basic> &arg);
                  virtual std::size_t __hash__() const;
                  virtual bool __eq__(const Basic &o) const;
                  virtual std::string __str__() const;
                  bool is_canonical(const RCP<const Basic> &arg);
                  RCP<const Basic> eval(); //dependencies: bernoulli, factorial
                  RCP <const Basic> rewrite_as_dirichlet_eta();
      };
      
### Dirichlet_eta Function
      class Dirichlet_eta: public function {
            private:
                  RCP<const Basic> arg_; 
            public:
                  Dirichlet_eta(const RCP<const Basic> &arg);
                  virtual std::size_t __hash__() const;
                  virtual bool __eq__(const Basic &o) const;
                  virtual std::string __str__() const;
                  bool is_canonical(const RCP<const Basic> &arg);
                  RCP<const Basic> eval(); //dependencies: zeta
                  RCP <const Basic> rewrite_as_zeta();
      };
[1] http://stackoverflow.com/questions/3688649/create-sine-lookup-table-in-c

[2] https://github.com/certik/sympy/blob/trig/sympy/functions/elementary/trigonometric.py

[3] http://fredrikj.net/arb/bernoulli.html

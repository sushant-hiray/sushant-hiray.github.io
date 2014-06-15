---
layout: post
category: gsoc
title: "This Week in CSymPy: #4"
tags: [readability, test]
comments: true
date: 2014-6-15 23:50:00 +0530
description: GSoC Week 4 Updates for CSymPy 
---

Week 4 for GSoC just ended and this week I completed implementing the Exponential Module.

Progress
========

I started the week by implementing `ATan2` which was not implemented in the PR of Trignometric Module.
<br/><br/>
[Pull 189](https://github.com/sympy/csympy/pull/189) looked into implementing the `ATan2` functionality. Since to implement `ATan2` we needed to find whether the signs of numerator and denominators. In case of complex symbolic expressions, we are yet to implement `numeric-eval` in CSymPy, so in those cases we just
return the object, in cases where we find the `arg` in lookup table we simplify and give out the result.
<br/>
A more detailed version of the assumptions can be found in this [comment](https://github.com/sympy/csympy/pull/189#issuecomment-45625322) in PR. It is also documented in the code.
<br/><br/>
After implementing `ATan2`, I worked on the Exponential module. [Aaron](https://github.com/asmeurer) gave some insights regarding the implementation of the exponential module, specifically he mentioned the fact that 

>	It's better to special case E in one place `(pow)` 
>	than to special case exp everywhere in the code 
>	that tries to deal with pow objects 

So discussing this with [Ondrej](https://github.com/certik) we decided to keep `exp` only as a function which just calls `pow(E, x)` underneath.
<br/><br/>
The logarithm class was similar to the current implementation of SymPy barring the part involving complex numbers. The exponential module as a whole was implemented in [pull request](https://github.com/sympy/csympy/pull/194) which has been merged into master.
<br/><br/>
I have also decided to implement the LambertW function. It wasn't a part of my original proposal but it seems pretty trivial to implement! Once this is merged into master, the exponential module will cover all major functions implemented by SymPy.


Discussions
===========

As usual most of the actual discussions happened on PR, Aaron also gave some insights on gitter! So its good to hangout there as well.


Week Highlights!
================

* This week [@isuruf](https://github.com/isuruf) started helping us out in the Number Theory module which was originally added by Thilina.
* Also I've noticed extra traffic in [CSymPy gitter](https://gitter.im/sympy/csympy). A lot of people have started following the conversations there! That is good to see :)

The Week Ahead
==============
* Add the `LambertW` class.
* Implement the `Hyperbolic Module`.

<br/><br/>
Thats all for now :) Will get back next week!

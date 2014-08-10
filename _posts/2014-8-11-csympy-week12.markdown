---
layout: post
category: gsoc
title: "GSoC Week 12: Wrapping Up"
tags: [readability, test]
comments: true
date: 2014-8-03 19:52:00 +0530
description: GSoC Week 12 Updates
---

This week was primarily focussed on adding the remaining special classes I had proposed in my [proposal](https://github.com/sympy/sympy/wiki/GSoC-2014-Application-Sushant-Hiray:-Extending-Elementary-Functions-CSymPy)

The special function module primarily included:

* Zeta function
* Gamma function
* Tensor function

Progress
========
In continuing with interfacing ARB from the previous week, [PR 265](https://github.com/sympy/csympy/pull/265) was also meant to add the Zeta Module. The Zeta Module primarily comprised of:

* Reimann-Zeta
* Dirichlet_Eta

This PR was merged after Ondrej reviewed the ARB interfacing and its use case in Bernoulli number and the Zeta Module.
<br/><br/> 
After the Zeta Module, I sent a pull request, [PR 267](https://github.com/sympy/csympy/pull/267) to implement the Tensor Module. The Tensor Module primarily comprised of:

* KroneckerDelta
* LeviCivita

`KroneckerDelta` makes uses of the Assumptions Module to define some more properties such as `is_above_fermi` `is_below_fermi`. These were not implemented as we donot have assumptions module yet in CSymPy.

`LeviCivita` accepts variable number of arguments, so it is implemented via a vector arg (`vec_basic`).

<br/><br/>
The final module to be added is the Gamma Module.
It comprises of :

* Gamma
* Upper Gamma
* Lower Gamma

[PR 269](https://github.com/sympy/csympy/pull/269) is implementing the Gamma Module. Currently only `Gamma` is implemented.

<br/><br/>
I also added the Zeta Module comprising of `zeta` and `dirichlet_eta` functions.
The `zeta` function needs `harmonic` to be implemented, which isn't implemented yet so for now, only minor simplifications are made.



The Week Ahead
==============
Complete the 2 small classes and get them reviewed!

<br/>
Thats all for now :) Will get back next week!

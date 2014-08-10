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

<br/><br/>
The final module to be added is the Gamma Module.
<br/><br/>
I put some minor hacks to make sure arb was linked and was able to find the files appropriately.
Since Ondrej was out this week, he wasn't able to suggest any better ways yet. Isuru Fernando helped me out with a much cleaner way to link the arb and flint library.
<br/><br/>
I also added the Zeta Module comprising of `zeta` and `dirichlet_eta` functions.
The `zeta` function needs `harmonic` to be implemented, which isn't implemented yet so for now, only minor simplifications are made.



The Week Ahead
==============
Get the current PR merged, add a new PR for the Tensor Module.

<br/>
Thats all for now :) Will get back next week!

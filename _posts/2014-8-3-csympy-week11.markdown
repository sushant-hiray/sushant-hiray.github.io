---
layout: post
category: gsoc
title: "GSoC Week 11: Interacing ARB"
tags: [readability, test]
comments: true
date: 2014-8-03 19:52:00 +0530
description: GSoC Week 11 Updates
---

This week was primarily focussed on interfacting [ARB](fredrikj.net/arb/) library with CSymPy.

Arb is a C library for arbitrary-precision floating-point ball arithmetic, developed by [Fredrik Johansson](fredrik.johansson@gmail.com). It supports efficient high-precision computation with polynomials, power series, matrices and special functions over the real and complex numbers, with automatic, rigorous error control.

Progress
========
I opened [PR 265](https://github.com/sympy/csympy/pull/265) to interfact ARB with CSymPy. There were some initial hiccups with using ARB for C++. I opened up an issue [arb/#21](https://github.com/fredrik-johansson/arb/issues/21) which was very promptly fixed by [@fredrik-johansson](https://github.com/fredrik-johansson) with a minor patch.
<br/><br/>
Since we were using an earlier release version 2.1.0 without this patch, [@fredrik-johansson](https://github.com/fredrik-johansson) willingly released a new version 2.2.0 so that we could interface immediately.
<br/><br/>
I was particularly in twaeaking around with CMAKE to interface ARB. I read quite a bit about it and managed to get a basic version running. But there were quite a few issues:
* flint and arb were not getting linked
* arb was not searching `/usr/local/include/flint` for appropriate files of flint.
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

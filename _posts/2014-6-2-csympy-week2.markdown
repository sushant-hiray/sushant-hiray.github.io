---
layout: post
category: gsoc
title: "This Week in CSymPy: #2"
tags: [sample post, readability, test]
comments: true
---

Week 2 for GSoC just ended and I've managed to complete the plans for this week.

Progress
========

I started off the week with analysing the inverse trignometric module in SymPy.
In SymPy particularly when `eval` is called it generates a lookup table and then searches for the argument in the table.
Since the table was made separately for each class it had the exact values needed. 

<br/><br/>
To avoid creating a lookup table each time an object is created, I created 2 global lookup tables.
`inverse_cst` (used by `asin`,`acos`,`asec`,`acsc`) and `inverse_tct` (used by `atan` and `acot`)
Since a common lookup table was created I had to tweak the return value according to the class which called it.

<br/><br/>
All the progress is in [pull 176](https://github.com/sympy/csympy/pull/176). It is almost good to merge. Once the Travis build results show up we will merge this into master.

<br/><br/>
In the midst of this week, myself and Thilina almost together  got stuck on a [bug](https://github.com/sympy/csympy/issues/174). When I posted the bug, Thilina acknowledged it failed on his system too and he shipped a fix.
Thankfully we have `CSYMPY_ASSERT()` written everywhere to catch such bugs!
A couple of days back I figured out yet another [bug](https://github.com/sympy/csympy/issues/179) because of which one of test cases was failing. We are yet to fix this one.


Discussions
===========

Most of the discussions with Ondrej and Thilina happened over the pull requests and the issues itself. Myself and Thilina did confirm the bugs on gitter just to be sure, before reporting them.


The Week Ahead
==============
Firstly merge the current PR into master. Fix [#179](https://github.com/sympy/csympy/issues/179).
We will also try to implement the `Exponential Module`. After this module we shoule be able to do things like `rewrite__as_cos` for the exponential class.
Also if Ondrej is free, he will be writing the python wrappers for `Trignometric Module` now that it is complete on the base level.

<br/><br/>
Thats all for now :) Will get back next week!

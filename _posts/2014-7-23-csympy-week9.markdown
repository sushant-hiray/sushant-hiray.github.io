---
layout: post
category: gsoc
title: "GSoC Week 9: Complexions in Complex Module"
tags: [readability, test]
comments: true
date: 2014-7-23 23:00:00 +0530
description: GSoC Week 9 Updates
---

Week 9 for GSoC ended a couple of days back. I'm still working on the Complex Module.

Progress
========

I started of the week continuing the work on [pull 248](https://github.com/sympy/csympy/pull/248).
<br/><br/>
Initially I started working on the `add` and `mul` functions and integrating the `complex` module with them. This part was pretty easy as Complex addition and Complex multiplication was completely implemented. Intially I just added special cases for the case of Complex in `pow`. But this quickly ran into issues as `is_canonical` failed in some testcases.
<br/><br/>
Next I simplified the complex power for the following cases:

* When `exp` is 1 or -1
* When the `base` is purely imaginary and `exp` is integer.

Following this I made appropriate changes to `is_canonical` for `pow`
<br/><br/>
Meanwhile [@certik](https://github.com/certik) sent a couple of PR's [sushant-hiray/csympy/#1](https://github.com/sushant-hiray/csympy/pull/1) and [sushant-hiray/csympy/#2](https://github.com/sushant-hiray/csympy/pull/2) for implementing the Python wrappers for Complex Module.
I spent some time trying to sync the wrappers and make sure they work as intended.
<br/><br/>
One important fix needed was to improve the printing. Over the entire PR, the printing has been changed multiple times to match the SymPy output. With this PR I've updated the current existing printing for `add`, `mul` as well as `pow`
<br/><br/>
The `expand` function is also updated to handle the case of Complex Numbers. Currently it doesn't expand terms like: `(2 + 3I)^n`. Apart from this all the issues which were found have been fixed.


The Week Ahead
==============
Merge the current PR and send a new PR for handling the cases like `(2 + 3I)^n` in `expand`

<br/>
Thats all for now :) Will get back next week!

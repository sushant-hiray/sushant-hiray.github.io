---
layout: post
category: gsoc
title: "This Week in CSymPy: #8"
tags: [readability, test]
comments: true
date: 2014-7-13 11:15:00 +0530
description: GSoC Week 8 Updates
---

Week 8 for GSoC just ended. I'm particularly pleased that I've managed to get a basic version of Complex Module merged into master.

Progress
========

I hadn't made much progress last week as I was traveling back home. So I had only managed to implement some of the functions. This week I implemented all the virtual functions which were necessary. Updated `Complex::from_mpq` to return the appropriate instance of `Complex` and `Rational`. [Pull 223](https://github.com/sympy/csympy/pull/223) implemented the basic version of complex module.
<br/><br/>
I also noticed that some of the files I had commented out earlier had a mismatched tab configuration. So I fixed the mismatch identation for all the files in the project. [Pull 242](https://github.com/sympy/csympy/pull/242) fixed this issue.
<br/><br/>
While writing tests for the Complex Module, I noticed that there was no explicit divide by zero check in the code and as a result, on division by zero, we were getting a coredumped. This issue was filed as [#239](https://github.com/sympy/csympy/issues/239) which was subsequently fixed via
[Pull 241](https://github.com/sympy/csympy/pull/241).
<br/><br/>
After some fixes and adding divide by zero checks in the complex module, the [Pull 223](https://github.com/sympy/csympy/pull/223)  was merged. With this in place, we can perform all basic operations on complex integers as well as rationals. The only exception being pow. It was decided that complex `pow` shouldn't evaluated by default. Also since the current definition of `pow` returns a `RCP<const Number>` so it needs to be refactored to account the current design.

The Week Ahead
==============
Make sure complex module works with all other submodules of `CSymPy` and add tests accordingly. [Pull 248](https://github.com/sympy/csympy/pull/248) has been started to deal with this.

<br/>
Thats all for now :) Will get back next week!

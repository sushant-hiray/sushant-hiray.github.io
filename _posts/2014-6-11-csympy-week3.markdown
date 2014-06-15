---
layout: post
category: gsoc
title: "This Week in CSymPy: #3"
tags: [readability, test]
comments: true
date: 2014-6-11 13:00:00 +0530
post: true
---

Week 3 for GSoC just ended and we decided to work on fixing bugs which were high priority.

Progress
========

I started off the week and decided that I'll work on the exponential module. 
<br/><br/>
However last week we had discovered a [bug](https://github.com/sympy/csympy/issues/179) in the way CSymPy was handling powers, so we decided to fix it first before moving on to the exponential Module.
<br/><br/>
The main issue in the bug was the way we were handling the `dict`. There was no uniformity so we needed up inserting `2` as well as `1/2` into the `dict`. We discussed with Aaron and the way SymPy handled the issue of powers was to make sure that the power was always positive. If not the 
reciprocal was added in the dict.
<br/><br/>
I used the convention SymPy was using and sent a [pull request](https://github.com/sympy/csympy/pull/182). However, there wasn't much of help usin this convention as we were ending up with both `2` and `1/2` in some corner cases. To avoid this, I searched the dict first if the reciprocal existed, if it existed, then I added the reciprocal or else added the number to the dict.
<br/><br/>
However as was expected using a `find` operation degraded the benchmarks heavily. So after a lot of discussion with Ondrej over the PR as well as on gitter, we figured out a way to solve the problem. The convention was to always enter the number in the form `num/den` such that `num >= den`. We updated the PR according to this convention and the issue was fixed. Consuming almost a weeks time!


Discussions
===========

Most of the discussions with Ondrej and Thilina happened over the pull requests and the issues itself. We finalized the convention over gitter.


The Week Ahead
==============

* Add the `ATan2` class.
* Implement the `Exponential Module`. After this module we shoule be able to do things like `rewrite__as_cos` for the exponential class.

<br/><br/>
Thats all for now :) Will get back next week!

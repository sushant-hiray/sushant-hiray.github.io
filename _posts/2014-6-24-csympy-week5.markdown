---
layout: post
category: gsoc
title: "This Week in CSymPy: #5"
tags: [readability, test]
comments: true
date: 2014-6-24 19:15:00 +0530
description: GSoC Week 5 Updates
---

Week 5 for GSoC just ended and this week I completed implementing the Exponential Module.

Progress
========

I started the week by implementing `LambertW` function. It wasn't a part of the original proposal but it is a nice addition to have so I implemented it.
<br/><br/>
If you're unaware, LambertW function is defined as the inverse function of x*exp(x). This function represents the principal branch  of this inverse function, which is multivalued. For more information, see:
[wiki](http://en.wikipedia.org/wiki/Lambert_W_function). [Pull 200](https://github.com/sympy/csympy/pull/200) implemented the LambertW class!
<br/><br/>
After this, I worked on Hyperbolic module, which was the main target for this week. [Pull 203](https://github.com/sympy/csympy/pull/203) implemented the hyperbolic module. 
In addition to the normal functions which were implemented as a part of the TrigFunction API, we implemented `expand_as_exp` in the Hyperbolic Module.
<br/><br/>
With this in place, we can now do things like `sinh(x)->expand_as_exp()` and it will return the exponential form: `(e^x - e^{-x})/2` using a combination of exp, adds and divs!
<br/><br/>
Follow up to this PR we have openened a couple of issues:

*	[#207](https://github.com/sympy/csympy/issues/207) is a bug which I encountered while writing test cases. Essentially same symbolic expressions written in form of add and mul are not equated as equal.
This is a crucial issue and we are yet to see how to proceed further on this. SymPy also faced the same issue [sympy/sympy#4596](https://github.com/sympy/sympy/issues/4596) where it was decided to remove
such automatic redistribution. As [@certik](https://github.com/certik) suggested, it is perhaps the best to compare underneath via expand.

*	[#210](https://github.com/sympy/csympy/issues/210) is basically a more generic way to cleanup the existing Trignometric and Hyperbolic Module. This for instance can be used to define the `subs` method in the base class rather than writing almost the same code in each subsequent inherited class.
The only reason why this was being defined in all the classes was that we needed to access the method to create the class via canonicalization. I've proposed a couple of methods in which we can approach the problem.
Once decided we can fix this issue.


Discussions
===========

As usual most of the actual discussions happened on PR, we were supposed to have a meetup on gitter but it was postponed.


Week Highlights!
================

* CSymPy just crossed the 1000 commits mark! Yay! It is [1036](https://github.com/sympy/csympy) at the time of writing.
* The issue serial number has crossed the 200 mark!

Quite an interesting week this has been as far as milestones are concerned!

The Week Ahead
==============
* Implement the long awaited `Complex` Module.

<br/>
Thats all for now :) Will get back next week!

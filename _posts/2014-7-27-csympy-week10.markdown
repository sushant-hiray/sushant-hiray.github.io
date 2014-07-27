---
layout: post
category: gsoc
title: "GSoC Week 10: Complex Complexions Resolved"
tags: [readability, test]
comments: true
date: 2014-7-23 23:00:00 +0530
description: GSoC Week 10 Updates
---

After a significant amount of work in the past couple of weeks, I've finally completed the Complex Module.

Progress
========

This week I merged [PR 248](https://github.com/sympy/csympy/pull/248) which covered almost the entire of the complex module.
<br/><br/>
After merging this PR, Complex Numbers and `I` could be used in sync with other existing modules in CSymPy.
[@certik](https://github.com/certik) refined the Python wrappers to integrate the Complex Module.
Here are the some of the things which could be done using CSymPy python wrappers:
<br/><br/>
{% highlight python %}
In [1]: from csympy import *

In [2]: I
Out[2]: I

In [3]: I**2
Out[3]: -1

In [4]: I+1
Out[4]: 1 + I

In [5]:  (I+1)**2
Out[5]: 2*I

In [6]: (1+I*2)**(-1)
Out[6]: 1/5 - 2/5*I

In [7]: x = Symbol('x')

In [8]: x+I*x
Out[8]: (1 + I)*x

In [9]: ((2*I + x)*x).expand()
Out[9]: 2*I*x + x^2

In [10]: ((x + I)**2).expand()
Out[10]: -1 + 2*I*x + x^2

{% endhighlight %}

<br/><br/>

<br/><br/>
One important fix needed was to improve the printing. Over the entire PR, the printing has been changed multiple times to match the SymPy output. With this PR I've updated the current existing printing for `add`, `mul` as well as `pow`
<br/><br/>
The `expand` function is also updated to handle the case of Complex Numbers. Currently it doesn't expand terms like: `(2 + 3I)^n`. Apart from this all the issues which were found have been fixed.


The Week Ahead
==============
Merge the current PR and send a new PR for handling the cases like `(2 + 3I)^n` in `expand`

<br/>
Thats all for now :) Will get back next week!

---
layout: post
category: gsoc
title: "GSoC Week 11: Interacing ARB"
tags: [readability, test]
comments: true
date: 2014-7-28 00:35:00 +0530
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
The other major work in this week was to work on the expansion of integral powers of complex number.
[Pull 264](https://github.com/sympy/csympy/pull/264) was created to add this functionality. We used a particularly simple yet efficient algorithm to compute the integral power.
{% highlight python %}
def powu(x, n):
    mask = 1
    r = 1
    p = x
    while (mask > 0 and n >= mask):
        if (n & mask):
            r = r*p
        mask <<= 1
        p = p*p
    return r
{% endhighlight %}
<br/><br/>
The current expand is a bit slower than what we were expecting. We will be looking to improve the speed in the coming days.
<br/><br/>

The Week Ahead
==============
As per the proposal, I will be implementing the Zeta Function.

<br/>
Thats all for now :) Will get back next week!

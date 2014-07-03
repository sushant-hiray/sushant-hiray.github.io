---
layout: post
category: gsoc
title: "This Week in CSymPy: #6-#7"
tags: [readability, test]
comments: true
date: 2014-7-05 19:15:00 +0530
description: GSoC Week 6-7 Updates
---

Week 7 for GSoC just ended. I successfully cleared the mid-term review, thanks [@certik](https://github.com/certik)

Progress
========

I started the week 6 by implementing refactoring the various instances of `subs` by adding a method `create` to construct classes with canonicalization. [#210](https://github.com/sympy/csympy/issues/210) was the relevant issue which was raised. I opened [pull 213](https://github.com/sympy/csympy/pull/213) to address this issue. This was a good addition as it reduced the line of codes by 117.

<br/><br/>
After successfully resolving #210 I started working on the Complex Module. By the end of the sixth week, I had discussed with Ondrej regarding the basic structure for the Complex Class. We had decided to use the `mpq_class` itself for the real and the imaginary part, as opposed to creating an alternate real or complex part.
<br/><br/>
[Pull 223](https://github.com/sympy/csympy/pull/223) implements the complex module. The class design structure could be found in the PR. 
<br/><br/>
In Week 7 I was travelling back from University to home, so I couldn't contribute much code for a couple of days.
By the end of Week 7, I had managed to implement some part of the basic API.
All the virtual functions are yet to be implemented, so right now I'm not returning an object in `from_mpq`
<br/><br/>
I will speed up during the next week and hope to merge the Complex Module.


Week Highlights!
================

* Somewhere around this period, I crossed 100 commits into CSymPy master. Its been a long journey since I first started contributing to CSymPy.

The Week Ahead
==============
* Complete the basic API for `Complex` Module and merge it into master.

<br/>
Thats all for now :) Will get back next week!

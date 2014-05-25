---
layout: post
category: gsoc
title: "Community Bonding and Week 1 in CSymPy"
tags: [sample post, readability, test]
comments: true
---

Week 1 for GSoC is almost about to end and I'm pretty much excited about the progress I've made.
For those who are unaware I'm working on extending elementary functions in CSymPy. You can look over
the proposal [here](https://github.com/sympy/sympy/wiki/GSoC-2014-Application-Sushant-Hiray:-Extending-Elementary-Functions-CSymPy) to get a better idea regarding the project!
<br/><br/>
The last few weeks have been fairly intensive. I shipped in a fair amount of code and we made a decent progress with the target. I'm quite ahead of my proposal now, so it gives quite a decent amount of buffer to improvise things as we keep on making progress.

Progress
========

The community bonding period started off with closing some trivial issues such as adding a gitignore ( [pull 165](https://github.com/sympy/csympy/pull/165)). This was needed big time considering the number of untracked files we had!
<br/><br/>
Next I started working on improving the trignometric module for CSymPy. It started with [pull 168](https://github.com/sympy/csympy/pull/168) which added all the remaining trignometric classes.
<br/><br/>
After adding the trignometric classes we started working on implementing `eval` for trignometric classes. This was based on Ondrej's version of [eval](https://github.com/certik/sympy/blob/trig/t.py) which he had written for SymPy.
This PR took quite over a week to complete and get merged into master.
Now with this PR being merged we can directly evaluate arguments of type `theta + k*pi/12` for all the trignometric classes.
<br/><br/>
A couple of PR's were added to improve the code quality. [PR 170](https://github.com/sympy/csympy/pull/170) looked into updating the constructors with C++11 standard and [pull 171](https://github.com/sympy/csympy/pull/171) made the argument a private member for the base class. 
<br/><br/>
The code looks quite noeat now, later on we will try to reduce the code length. But its good for now.

Discussions
===========

Most of the discussions with Ondrej happened over the pull requests. Myself, Thilina and Ondrej had an online meetup on gitter this Thursday(IST). You can follow up on the details [here](https://gitter.im/sympy/csympy)
We discussed mostly regarding our progress, we also discussed a bit about possibility of compile-time hashing.


The Week Ahead
==============
So for the next we have planned to get the basic implementation of inverse trignometric functions.
<br/><br/>
Thats all for now :) Will get back next week!
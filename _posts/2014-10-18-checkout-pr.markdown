---
layout: post
title: "Checking out github PR"
tags: [sample post, readability, test]
comments: true
---

If you work with a lot of open source projects, you may find a need to modify a GitHub Pull Request before merging to the master branch. This may be because you need to rebase, fix a failing test, or resolve a merge conflict caused by an upstream change.


GitHub provides an easy way to checkout a remote Pull Request just using Git! You can read a more detailed explaination [here](https://help.github.com/articles/checking-out-pull-requests-locally/)

From inside the root of your repository, run the following command, replacing `$NUMBER` with the Pull Request number:

    $ git fetch origin pull/$NUMBER/head:$BRANCHNAME

This will create a new branch named `$BRANCHNAME`. You can then checkout the branch:

    $ git checkout $BRANCHNAME

However, that is way too much work if you need to do this quite often. Time to use some shell magic!
    
    checkout-pr () {
      git fetch origin pull/$1/head:pr-$1 && git checkout pr-$1;
    }

You could then use this shell function to checkout a PR:

    $ checkout-pr 1024

But you know, this should rather be a git command rather than a bash script. Wrapping the whole thing up in a Git alias:

    [alias]
      pr = "!f() { git fetch origin pull/$1/head:pr-$1 && git checkout pr-$1; }; f"

Now, when you want to checkout a remote GitHub Pull Request, simply run the following command:

    $ git pr NUMBER

I have been using this alias since Summer'14, and I absolutely love it. I hope you find it useful too!

Thats it all for now. Will get back with some more interesting posts.

---
layout: post
title: "Checking out github PR"
tags: [sample post, readability, test]
comments: true
---

If you work with a lot of open source projects, you may find a need to modify a GitHub Pull Request before merging to the master branch. This may be because you need to rebase, fix a failing test, or resolve a merge conflict caused by an upstream change.
<br/><br/>
GitHub provides an easy way to checkout a remote Pull Request just using Git! You can read a more detailed explaination [here](https://help.github.com/articles/checking-out-pull-requests-locally/)
<br/><br/>
From inside the root of your repository, run the following command, replacing `$NUMBER` with the Pull Request number:
<br/><br/>

{% highlight bash %}
git fetch origin pull/$NUMBER/head:$BRANCHNAME
{% endhighlight %}
<br/><br/>
This will create a new branch named `$BRANCHNAME`. You can then checkout the branch:
<br/><br/>

{% highlight bash %}
git checkout $BRANCHNAME
{% endhighlight %}
<br/><br/>
However, that is way too much work if you need to do this quite often. Time to use some shell magic!
<br/><br/>
{% highlight bash %}    
    checkout-pr () {
      git fetch origin pull/$1/head:pr-$1 && git checkout pr-$1;
    }
{% endhighlight %}
<br/><br/>
You could then use this shell function to checkout a PR:
<br/><br/>
{% highlight bash %}
    checkout-pr 1024
{% endhighlight %}
<br/><br/>
But you know, this should rather be a git command rather than a bash script. Wrapping the whole thing up in a Git alias:
<br/><br/>
{% highlight bash %}
    [alias]
      pr = "!f() { git fetch origin pull/$1/head:pr-$1 && git checkout pr-$1; }; f"
{% endhighlight %}
<br/><br/>
Now, when you want to checkout a remote GitHub Pull Request, simply run the following command:
<br/><br/>
{% highlight bash %}
    git pr NUMBER
{% endhighlight %}
<br/><br/>
I have been using this alias since Summer'14, and I absolutely love it. I hope you find it useful too!
<br/><br/>
Thats it all for now. Will get back with some more interesting posts.

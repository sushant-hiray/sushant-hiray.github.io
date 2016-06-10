---
layout: post
title: "Getting Started with IRC"
tags: [sample post, readability, test]
comments: true
---

This is an illustrated guide of how to use your IRC client. I will try to cover some IRC clients, namely:

* irssi
* Waartaa
* Chatzilla

<h1 class="subtitle">What is IRC? </h1>

IRC stands for Internet relay chat, it basically refers to the entire system of global Servers, clients and people chatting online in global chat rooms.

![IRC]({{site.url}}/images/irc.jpg)

<h1 class="subtitle">Downloading your favorite IRC client</h1>


IRSSI 
------
* For Ubuntu, Debian users 

{% highlight bash %}
// whichever of these applies
sudo apt-get install irssi
sudo aptitude install irssi
{% endhighlight %}

* For Fedora, CentOS users 
{% highlight bash %}
sudo yum install irssi
{% endhighlight %}

Waartaa
--------
Waartaa is an easy to use web application. Go to [waartaa.com](https://try.waartaa.com/) 

Chatzilla
---------
* Fireup firefox, go to the Chatzilla Plugin Page
* Install the addon in your browser


<h1 class="subtitle">Connecting to IRC Channel</h1>

This is mainly if you're using irssi. In case you're using waarta/chatzilla/mibbit, you'll be asked in the popup windows for a nick name and the channel to connect.

{% highlight bash %}
	/nick theOneTrueKnight
	/server irc.mozilla.org (or whatever your server URI is)  
	/join #introduction (or whatever channel you wish to join) 
{% endhighlight %}



<h1 class="subtitle">FAQ's</h1>

> What is this Freenode I keep seeing everywhere? 

Freenode is one of the most popular IRC servers online. Basically, you connect to an IRC server and join an IRC channel on that server and then talk to people there.

> What are these weird things that look like \#this-is-weird? 

The `#things` looking thing you see is called an IRC channel , once you connect to a server, you need to join a channel which in crude terms is the equivalent of a chat room.


> Commonly Used Commands

* `/nick your_nick` : Change your IRC nick.
* `/server irc.mozilla.org` : Connect to a server.
* `/join #introduction` : Join a channel.
* `/quit` : Quits. Obviously.
* `/msg sushant Hi` : Private message someone. (This opens up a new window once the other party responds)
* `/away afk` : mark yourself as away citing the reason as “afk”. It’s curteous to mark yourself as away, when you’re not around.
* `/away` (or `/back`) : An away command without an explanation marks you as not-away.
* `/userlist` to get a list of users on the current channel.


> Registering your Nick

Nick registration serves a bunch of purposes, namely:

* It gives you an identity, people can recognize you from.
* You can join channels that require a registered nick, #python, #fedora are examples.
* It safegaurds and reserves your nick (the one thing people identify you with) on IRC, so that people always know it’s you they’re talking to.
* Protip: In case you've a common nick try keeping your IRC connections persistent ([irssi + screen](http://www.antonfagerberg.com/archive/my-perfect-irssi-setup/) helps to do that)

> IRC Etiquette

This is perhaps the most important section. Following are some essential etiquettes:


* Don't ask to ask
* Behave as you would do in a real life conversation
* Be patient. If there is no activity, it usually means that no one has read what you wrote yet. If no one responds, they don't know or didn't notice. You can re-try after a while, or ask if anyone has any clue with regards to your question x minutes ago.
* Don’t PM (i.e `/msg sushant`) without asking for the user’s prior permission on the channel, it’s considered rude by some people and generally not welcome without good reason.
* Be considerate of other people’s time-zones. The US is roughly 11:30 to 13:30 hours behind Indian Standard Time, Europe is roughly 4:30 to 6:30 hours behind IST, while Japan is roughly 2 hours ahead.

Thats it all for now. Will get back with some more interesting posts.

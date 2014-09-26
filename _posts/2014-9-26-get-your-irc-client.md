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

#Basic Introduction
<hr/>
##What is IRC? 

IRC stands for Internet relay chat, it basically refers to the entire system of global Servers, clients and people chatting online in global chat rooms.
<br/><br/>
<img src="{{ site.url }}/images/irc.png">
<br/><br/>
##What is this Freenode I keep hearing/reading about? 

Freenode is one of the most popular IRC servers online. Basically, you connect to an IRC server and join an IRC channel on that server and then talk to people there.

##What are these weird channel things that look like \#this-is-weird I keep hearing/seeing? 

The \#things looking thing you see is called an IRC channel , once you connect to a server, you need to join a channel which in crude terms is the equivalent of a chat room.

#Downloading your favorite IRC client

##IRSSI Install

* For Fedora, CentOS users sudo yum install irssi
* For Ubuntu, Debian users sudo apt-get install irssi or sudo aptitude install irssi
* Other Linux distributions might want to use their respective package managers.

##Waartaa

Waartaa is an easy to use web application. Go to [waartaa.com](https://try.waartaa.com/) 

##Chatzilla Install

* Fireup firefox, go to the Chatzilla Plugin Page
* Install the addon in your browser


#Connecting to IRC Channel
<hr/>
This is mainly if you're using irssi. In case you're using waarta/chatzilla/mibbit, you'll be asked in the popup windows for a nick name and the channel to connect.


	/nick theOneTrueKnight
	/server irc.mozilla.org (or whatever your server's URI is)  
	/join #introduction (or whatever channel you wish to join) 


#Commonly Used Commands
<hr/>
* `/nick your_nick` : Change your IRC nick.
* `/server your.server.url` : Connect to a server.
* `/join #channel-name` : Join a channel.
* `/quit` : Quits. Obviously.
* `/msg someone_else's_nick Hi` : Private message someone. (This opens up a new window once the other party responds)
* `/away afk` : mark yourself as away citing the reason as “afk”. It’s curteous to mark yourself as away, when you’re not around.
* `/away` (or `/back`) : An away command without an explanation marks you as not-away.
* `/userlist` to get a list of users on the current channel.


#Registering your Nick
<hr/>
Nick registration serves a bunch of purposes, namely:

* It gives you an identity, people can recognize you from.
* You can join channels that require a registered nick, #python, #fedora are examples.
* It safegaurds and reserves your nick (the one thing people identify you with) on IRC, so that people always know it’s you they’re talking to.

#IRC Etiquette
<hr/>
This is perhaps the most important section. There’s some basic etiquette that’s considered in good taste, keeping it in mind, and using your common sense, will usually save you from commiting a faux pas.

* Please don’t expect an immediate response, waiting times vary from 15 minutes to over 24 hours at times depending on channel traffic, timezone and holidays, weekends and so on. If you’ve got things to do, let the IRC client run in the background and carry on with your other work.
* Pls dnt typ lyk dis!!!1 , You won’t be taken seriously. Ever.
* Don’t PM (i.e `/msg some_user`) without asking for the user’s prior permission on the channel, it’s considered rude by some people and generally not welcome without good reason.
* Be considerate of other people’s time-zones. The US is roughly 11:30 to 13:30 hours behind Indian Standard Time, Europe is roughly 4:30 to 6:30 hours behind IST, while Japan is roughly 2 hours ahead. What’s morning for you is probably not for the rest of the world, act accordingly.

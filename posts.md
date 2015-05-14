---
layout: base
permalink: /posts/
title: All Posts
image:
  feature: journal.jpg
tagline: A List of Posts
tags: [blog]
---

<section id="post">
{% for post in site.posts %}    
  {% include post_desc.html %}
{% endfor %}
<br/>
</section>
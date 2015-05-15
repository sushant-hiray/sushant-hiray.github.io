---
layout: base
permalink: /posts/
title: All Posts
image:
  feature: journal.jpg
tagline: A List of Posts
tags: [blog]
---

<article class="post">
    <p> Only technical posts are enlisted below. If you're looking for my foodie adventures: go to <a href="{{site.url}}/food-trail/"> <u> Food Trail </u> </a> </p>
    <p class="tag read-first is-uppercase">Recent Posts</p>  
</article>


<section id="post">
{% for post in site.posts %} 
    {% if post.category != "food" %}
        {% include post_desc.html %}
    {% endif %}
{% endfor %}
<br/>
</section>
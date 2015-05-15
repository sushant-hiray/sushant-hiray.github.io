---
layout: base
permalink: /food-trail/
title: My food trail
tagline: Food Trail
tags: [blog]
---
<article class="post">
    <p>As they say, people who love to eat are always the best people. <br/>This section of the blog covers my foodie adventures. I also write for <a href="https://eatreviewrepeat.wordpress.com/"> <u>Eat Review Repeat</u> </a></p>  
    <p class="tag read-first is-uppercase">My Food Journey </p>  
</article>


<section id="post">

{% for post in site.categories.food %}    
  {% include post_desc.html %}
{% endfor %}
<br/>
</section>
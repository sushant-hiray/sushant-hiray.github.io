---
layout: base
permalink: /food-trail/
title: My food trail
tagline: Food Trail
tags: [blog]
---

<section id="post">
{% for post in site.categories.food %}    
  {% include post_desc.html %}
{% endfor %}
<br/>
</section>
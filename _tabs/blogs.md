---
layout: default
title: Blogs
permalink: /blogs/
icon: fas fa-list
order: 1
---
<link rel="stylesheet" href="{{ '/assets/css/blog.css' | relative_url }}">

<div class="blog-list">
  {% for post in site.posts %}
    <div class="blog-item">
      <!-- Title (One Line) -->
      <a href="{{ post.url }}">
        <h2 class="blog-title">{{ post.title }}</h2>
      </a>

      <!-- Excerpt & Image (60-40) Below Title -->
      <div class="blog-content-wrapper">
        <div class="blog-content">
          <p class="blog-date">{{ post.date | date: "%B %d, %Y" }} • {{ post.author }}</p>
          <p class="blog-excerpt">{{ post.excerpt | strip_html | truncate: 150 }}</p>
          <a href="{{ post.url }}" class="read-more">Read More →</a>
        </div>

        {% if post.image %}
          <a href="{{ post.url }}" class="blog-image-wrapper">
            <img src="{{ post.image }}" alt="{{ post.title }}" class="blog-image">
          </a>
        {% endif %}
      </div>
    </div>
  {% endfor %}
</div>

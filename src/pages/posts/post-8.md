---
layout: ../../layouts/MarkdownPostLayout.astro
title: My Eigth Blog Post
author: deesclouds
description: "Advanced JavaScript: Generate pages from existing tags"
image:
  url: "#"
  alt: "#"
pubDate: 2022-11-15
tags:
  [
    "astro",
    "learning in public",
    "components",
    "community",
    "layouts",
   "advanced",
   "JavaScript",
   "pages"
  ]
---

# What I've learned:

Tag pages are now being defined statically within `[tag].astro` file.

If we add a new tag to a blog post, we will have to revisit this page and update our page routes.

To replace our code on this page with code that automatically look for, and generate pages for, each tag used on our blog pages.

First we need to check if all our blog posts contain tags even if it's just one tag it should be written within an array. 

Second step is to create an array of all our existing tags. 

It’s OK if this isn’t something you would have written yourself yet!
```
  const uniqueTags = [...new Set(allPosts.map((post) => post.frontmatter.tags).flat())];
```

It goes through each Markdown post, one-by-one, and combines each array of tags into one single larger array. Then, it makes a new Set from all the individual tags it found (to ignore repeated values). Finally, it turns that set into an array (with no duplications), that you can use to show a list of tags on your page.

Now our tags will all live within an array stored inside the uniqueTags variable.

The getStaticPaths() function returns an array of page routes.

Dynamic routing is the process of creating multiple page routes from one file in Astro.

Params is the value that generates page routes dynamically.

I learned how to generate page routes dynamically and how to pass props to each page roue. 
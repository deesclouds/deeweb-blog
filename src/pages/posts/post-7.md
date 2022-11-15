---
layout: ../../layouts/MarkdownPostLayout.astro
title: My Seventh Blog Post
author: deesclouds
description: "What I've learned about the component based-design system"
image:
  url: "#"
  alt: "#"
pubDate: 2022-11-14
tags:
  [
    "astro",
    "learning in public",
    "components",
    "community",
    "layouts",
   "design",
   "system",
   "API"
  ]
---
## What I've learned:

I learned how to nest layouts and remove duplicated elements.

The component based-design system allows us to nest one layout inside of another and take advantage of a modular design system.

Multiple layouts are useful for projects that utilizes Markdown pages for projects like building a blog.

The BaseLayout.astro component allows for templating for all our pages.

Learned how to implement Astro API to work with my files and add functionality to the tags, index, and RSS feed.

Learned how to use the Astro.glob() for accessing data files within my project, how to use the getStaticPaths() to create multiple pages/routes all at once, and the Astro RSS package to create an RSS Feed.

It's fun learning how to do this by implementing blog archives. 

How to dynamically add blog posts by creating a blog post component:

First we need to generate our list of blog posts.
```
  {allPosts.map((post) => <BlogPost url={post.url} title={post.frontmatter.title} />)}

```
We will be using the map JavaScript function to pass each blog post through a the map function to produce, a new jQuery object containing the return blog posts.

Next we will create a new component titled `BlogPost.astro` within our components directory `/src/components/BlogPost.astro`.

Next we write our code to receive our title and url as Astro.props.
```
src/components/BlogPost.astro
---
const {title, url} = Astro.props;
---
```

Next we add templating to create our each element within our list.
```
<li><a href={url}>{title}</a><li>
```

Next we import our our new component within our Blog page. 
```
---
import BaseLayout from '../layouts/BaseLayout.astro';
import BlogPost from '../components/BlogPost.astro';
const allPosts = await Astro.glob('../pages/posts/*.md');
const pageTitle = "My Astro Learning Blog";
---
```

If our component contains the following line of code:
```
---
const myPosts = await Astro.glob('../pages/posts/*.md');
---
```

The syntax to represent the title of our third blog post would be:
```
myPosts[2].frontmatter.title
```

A link to our first URL of our first blog post.
```
<a href={myPosts[0].url}>My First Blog Post!</a>
```

To build a component to display the date for each of our blog post to show when it was last updated. 
```
myPosts.map((post) => <LastUpdated date={post.frontmatter.pubDate}/>)
```
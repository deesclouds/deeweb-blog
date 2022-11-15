---
layout: ../../layouts/MarkdownPostLayout.astro
title: My Sixth Blog Post
author: deesclouds
description: "Ready to take my page design to the next level"
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
    "slot",
    "nesting",
  ]
---
## What I've learned:

Learned how to refactor elements into a page layout.

Use an Astro </slot> element tag to place contents within a layout.
The slot element tag inserts a child element within the component tags from that component file.

Pass page specific values as props to its layouts.

```
---
const {pageTitle} = Astro.props;
---
```

Allows for page title to render dynamically for specific layouts.

Astro components are so functional! They can function as a page, layout, image, UI component.
Astro allows us to use plain HTML and by using scripts and components.

Titles can be displayed on a page by using a few different methods:

- By using a standard HTML element on the page with static text `<h1>Homepage<h1>`

- Using a standard HTML element on the page being referred by a variable defined within the component's frontmatter script `<h1>{pageTitle}</h1>`

- By using a layout component on the page and passing the title as a component attribute `<Baselayout title={pageTitle}/>`

Information can be passed from one component to another by importing a UI component and rendering it in the template of another component, passing props to a component where its rendered by a component's attribute, sending HTML content to be rendered within another component using `<slot/>` placeholder.

Astro was built to take advantage of component based design.

I can create an Astro layout component and I can send page specific component properties to a layout.

This is how components work together within Astro!

```
src/pages/posts/learning-astro.md
---
layout: ../../layouts/MarkdownLayout.astro
title: "Learning About Markdown in Astro"
author: Astro Learner
pubDate: 2022-08-08
---
I learned so much today! Astro allows me to write in Markdown, but also use variables from frontmatter. I can even access those variable in an Astro component.
```
```
---
import Footer from '../components/Footer.astro'
const { frontmatter } = Astro.props
---
<h1>{frontmatter.title}</h1>
<p>Written by:{frontmatter.author } on {frontmatter.pubDate}</p>
< slot />
<Footer />
```
---
title: My Fourth Blog Post
author: deesclouds
description: "Now it's time to learn how to add components to my blog site"
image: 
    url: "#"
    alt: "#"
pubDate: 2022-11-14
tags: ["astro", "learning in public", "components", "community", "refractor"]
---
<a href="/blog">Back to Blog Page</a>

Published on: 2022-11-14

## What I've learned:

I learned how to refractor my code to improve my existing code design by utilizing less code without changing the design appearance and achieved this by utilizing a reusable component.

Astro components are reusable and fragments of HTML code. The way to create a new file is by creating a new page ending with the '.astro' extension within the src/pages/ directory. 

I now know how to refractor my code by adding new and reusable components. I'm learned how to insert components within other components by implementing a footer component into this blog site. 

To receive values from a component's frontmatter, we would need to create a dynamic value within the code fences. I would look like this:

```
---
const { author, title, date} = Astro.props;
---
```

To pass values as props to a component, it would look like this:

```
<BlogPost title="My First Post" author="deesclouds" date="13 Nov 2022" />

```

I've learned how to create Astro components, how to import and use components, and how to pass props within those components.
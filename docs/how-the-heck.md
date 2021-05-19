---
title: How the heck does it even work?
slug: how-the-heck
---

First of all, if you haven't already, see the [introduction in our landing page](https://welcomments.io).

Already read it? Good!

Let's quickly go through how static site generators work in general.

We'll assume you're using Jekyll:

1. You write blog posts in Markdown.
2. You push your changes to a GitHub repository.
3. Netlify compiles the Markdown files into HTML by invoking `jekyll build`.
4. The static HTML files will be pushed to a CDN and your site is now live.

Since your website is fully static precompiled HTML, it loads fast, scales well, is SEO-friendly and cheap to host.

For the same benefits, Welcomments uses a very similar workflow for storing and displaying visitor comments on your website:

1. A visitor writes a comment on your blog post.
2. The comment form is posted to `welcomments.io/api/comments`.
3. We validate, sanitize, check for spam, and do other necessary dances.
4. The comment is turned into a JSON file and committed into the `_data/welcomments` directory of your GitHub repository.
5. Netlify compiles your website with `jekyll build`. All comment JSON files are compiled into static HTML inside the blog post HTML file.
6. The static HTML files will be pushed to a CDN. Your site is now live, and the comments are pre-rendered HTML.

You get the usual benefits from having a static site, but for your comment section!
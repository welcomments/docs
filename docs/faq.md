---
title: Frequently Asked Questions
slug: faq
---

## How can I delete a comment?

Just delete the JSON file containing the comment on GitHub.

Netlify will rebuild your website and the comment will disappear when your website is built and deployed.

## Where and how does Welcomments write the comment files?

This depends on the permalink of your article and the static site generator you're using.

Let's imagine that the permalink for your article is `https://example.com/blog/hello-world`:
* for Jekyll and Eleventy, comments on the article will be written to `_data/welcomments/hello-world/<sortable unique comment id>.json`
* for Hugo, the comment files will be at `data/welcomments/hello-world/<sortable unique comment id>.json`

## How does Welcomments prevent comment spam?

We're using [Akismet](https://akismet.com).

Being the de-facto spam filtering system for WordPress, and having been integrated in most of the WordPress blogs by default, they kinda have a track record when it comes to fighting comment spam.

## What kind of moderation tools does Welcomments provide?

Right now, you can go to your website's settings in [the Welcomments console](https://console.welcomments.io/) and tick the _"Manual comment moderation"_ checkbox.

When enabled, no comment goes through without your manual approval. The comments will appear in the _"Moderation queue"_ tab, from which you can individually approve or reject them.

## Does Welcomments support email notifications for new comments?

Yes!

In the website settings in [Welcomments console](https://console.welcomments.io/), you can tick the email notifications checkbox to get notified every time someone comments on your site. Be sure to check the email address field for correctness, and fill it out if it's empty.

If a visitor chooses to provide their email address when commenting on your website, they will get an email notification for every direct reply to their comment. They can also unsubscribe from reply notifications at any time by following an email link. We encrypt the email address at rest.

## Can the comment folder be customized?

Not at the moment.

## Can the commit message be customized?

Not yet!

---
layout: base.njk
tags: post
title: "How I Used Claude Code to Write Directly Into Google Docs (Without Breaking Everything)"
date: 2026-03-16
excerpt: "I set up a workflow where Claude plans content in conversation and then inserts it directly into my Google Docs instructor guides — here's how it works and what I'm still figuring out."
thumbnail: "/images/posts/google-docs-api.jpg"
---

<article class="post">
<div class="section-inner">

# How I Used Claude Code to Write Directly Into Google Docs (Without Breaking Everything)

<img src="{{ '/images/posts/google-docs-api.jpg' | url }}" alt="Document and writing workspace" class="post-featured-image" />

I've been working on a project that involves creating detailed instructor guides for a US History course — think structured lesson activities, worksheets, discussion prompts, teaching notes, etc., all living in Google Docs. There are a lot of small components, and while I'm working with a subject matter expert to help curate some of the content, there are still activities and pieces I'm mocking up on my own.

I already use Claude Code to help with other parts of this course project, so I started wondering: instead of drafting content here and then copying it into Google Docs manually, could I get Claude to write directly into the docs?

Turns out, yes.

## The basic idea

Google has an API that lets you read and write to Docs programmatically. Combined with Claude Code, you can set up a workflow where you plan your content in conversation, and then Claude inserts it directly into the right document with proper formatting.

In my case, the workflow looks like this:

1. I tell Claude what I want — "Let's add a new activity to the Module 8 instructor guide"
2. We plan it together in conversation
3. When I'm happy with it, Claude writes the content to a structured file and runs a script that finds the right Google Doc and inserts it in the right place
4. I open the doc and it's there

## What you need to get started

- A Google account with the docs you want to edit
- A Google Cloud project with the Docs API and Drive API enabled (free)
- OAuth2 credentials downloaded from Google Cloud Console
- Node.js installed on your computer

The credential setup is the trickiest part. You'll go through a one-time authorization flow where Google asks you to approve access, and after that it saves a token so you don't have to do it again.

## The hardest part: formatting

My biggest concern going in was that inserting content programmatically would mess up the formatting in my existing docs. These instructor guide docs have a lot going on under the hood with heading styles, paragraph styles, and unique formatting, and it's easy to break things if you're not careful.

I decided the best approach was to have the script only ever insert content, never deleting or modifying what's already there. It finds a specific landmark in the document and inserts new content just before it. Everything already in the doc stays untouched.

You do have to be careful that the new content doesn't inherit the style of whatever's nearby in the document. The fix is to explicitly set the style (Normal Text, Heading 3, etc.) on every paragraph you insert.

## Is it actually worth it?

The content isn't perfect out of the gate. I still go into the doc and clean things up, adjust wording, and add any formatting that needs a human eye. But the heavy lifting of drafting and structuring is done — though I'm still on the fence about how valuable this is for my time. Since I still have to touch every piece of the guides, doing it "automatically" through Claude Code isn't all that different from just making the updates via a regular Claude chat conversation and then pasting it in on my own.

I think I'll save this process for later, when the formatting and review work is less needy. But on other projects where I'm working on specific content to pull into Google Docs, I think it will be a useful workflow.

Next, I'm curious whether I can do something similar with PowerPoint. Here's a [GitHub repository from Anik Chakraborty](https://github.com/anikch/ppt-from-template-skill) that I want to test out.

</div>
</article>

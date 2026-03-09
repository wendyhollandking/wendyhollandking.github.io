---
layout: base.njk
tags: post
title: "Building AI Agents to Work at Scale"
date: 2026-03-09
excerpt: "How I used Playwright, the Claude API, and Claude Code to build an agent that automated a large, repetitive editing job across dozens of web pages."
thumbnail: "/images/posts/ai-agents-vscode.jpg"
---

<article class="post">
<div class="section-inner">

# Building AI Agents to Work at Scale

<img src="{{ '/images/posts/ai-agents-vscode.jpg' | url }}" alt="Code on a screen" class="post-featured-image" />

I had a large, repetitive editing job I needed to do for work that included revising dozens of web pages, each needing the same careful set of changes applied consistently. It's the kind of work that matters but doesn't exactly spark joy, so I figured there must be a way to automate at least part of it.

At first, I played with Claude Cowork. It's useful, but it's built around your desktop and local files, and my work was happening inside a browser, so that mismatch made the whole thing feel clunky. I kept having to context-switch between my desktop and the browser in ways that didn't really save me any time.

Then I tried Claude's new in-browser tool, which felt more promising. It was great for individual tasks, but my work required handling larger, repetitive tasks, and I didn't want to have to constantly stay in the browser keeping my eyes on all of the minor changes.

What I actually wanted was something that could run on its own terms, at scale, without me hovering over it. Fortunately, I eventually found a way to do just that.

I used Playwright for the browser automation, the Claude API to handle the actual editing, and Claude Code as a collaborator while I was building the thing in VS Code. I managed to get the script to open the browser, pause to let me log in, then read the HTML from each page, send that to Claude with a super detailed set of revision instructions, edit it, paste it back into the editor, save it, and move on. I set it up so it pauses after the first couple of pages and waits for me to check the work before running the rest. It felt best to require these checkpoints first so that it didn't run and do something horribly wrong at scale across all the pages.

Getting the instructions just right was the essential piece of this task. I needed to get really detailed about what kind of page it is, what should change, what should absolutely not change, and how to handle exceptions. Luckily, I have been carefully prompt engineering for years now, so it didn't take too many tries to hone in on the types of edits I wanted. I experimented with several prompts directly within Claude before solidifying my instructions as code.

Honestly, watching it run for the first time was one of those exciting moments where I just sat in awe of how far the technology has come. It's still a little scary to think about how much was automated, but the hope I keep coming back to is that the AI amplified work I already knew how to do, so at least for now, the human element is still necessary. I brought the subject matter knowledge, the editorial judgment, the understanding of what good output looks like, and the agent just applied it at a scale I couldn't have managed on my own. It also didn't completely replace my work, as I still need to review all of the edits and have other deep-thinking work that needs to happen on each page.

I'm looking forward to seeing where I can take this next!

</div>
</article>

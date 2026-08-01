---
layout: base.njk
tags: post
title: "The Improv Hub"
date: 2026-04-30
excerpt: "My 6th grader asked me to teach an improv class at her school, I found almost no useful resources online, and so I did what any instructional designer would do: I built a website."
thumbnail: "/images/posts/improv-hub-screenshot.png"
---

<article class="post">
<div class="section-inner">

# The Improv Hub

<img src="{{ '/images/posts/improv-hub-screenshot.png' | url }}" alt="Screenshot of The Improv Hub website homepage" class="post-featured-image" />

While I was recovering from my post-Europe illness and working through my spring cleaning purge (see the [previous post](/posts/sabbatical/)), I had just enough energy to slowly chip away at a side project: an improv website. Here's what it is and how I built it.

I'm not an improv expert, but my 6th grade daughter is a huge fan of the art form. She has always been a performer and enjoys singing, acting, and dancing, but over the past 2 years, she's really gotten into comedy as well. She has seen almost every clip of Studio C, watches some old SNL and Whose Line clips, and has taken a few comedy classes. We also love watching improv and are big fans of ComedySportz, a hilarious, fast-paced "competitive" comedy show. So when she asked me to teach an improv class at her school, I felt compelled to say yes, despite my lack of training. Fortunately, I do have training as a teacher, and I also am competent in searching the internet for ideas, so it wasn't long before I took to the classroom and she and her friends took to the stage.

I quickly found that there are very few centralized resources that help to teach about improv or comedy. I was certainly not the only teacher or parent in the world thrown into this new opportunity, and there had to be materials out there. I found a handful of ideas here and there, but nothing quite like what I wanted to see. So... I built a new website.

[The Improv Hub](https://wendyhollandking.github.io/the-improv-hub/index.html) is a browser-based resource for anyone who wants to learn or teach improv. It's geared toward teens (middle and high school), but the content works for anyone who's starting out, including parents, teachers, and class instructors. The site has a few main sections:

* Six learning modules that cover the basics of improv, from getting comfortable being silly all the way through sketch comedy. Each module has a short lesson, a video example, a game to try, and a reflection. I decided to build these after I developed roughly this same template/outline for teaching the class of middle schoolers.
* A games library with 34 improv games, each with rules, examples, variations, and a dozen or so starter prompts. You can filter by category (warm-ups, characters, scenes, comedy) or look for games that work for smaller groups. I wanted this to be the kind of thing where a teacher or a group of friends could open it up, pick a game, and start playing.
* AI-powered game practice, where you can play improv games with an AI scene partner. I thought this would be a great way to practice improv on your own—you can do "Yes, And" scenes, play "Fortunately/Unfortunately", do character interviews, and more. The AI acts as a scene partner and just plays along. I think it's fun, but it can be clunky and the AI partner can get frustrating (forcing the user to do all the comedy work), so I'm still working out the kinks.
* A video library with curated clips from Whose Line Is It Anyway?, Saturday Night Live, Studio C, Key & Peele, etc.. One of the things I found while teaching the class is that showing a quick clip before introducing a game makes a huge difference. The library is organized by category (warm-ups, characters, scenes, comedy patterns, sketch) and everything in it will be screened for age-appropriateness, though I already accidentally put in the Substitute Teacher clip which had more profanity than I remember. Finding random improv clips from YouTube for a class of 6th graders is not an easy task.

## How I built it

I used ChatGPT and Claude for planning and content development, and Claude Code for the actual building. For the content, I started by outlining the six modules based on what I'd been teaching in the improv class, plus relying on openly licensed sources that I had found online. Then I worked with Claude to flesh out the lessons, draft the game descriptions, find good video examples, and write the system prompts that tell the AI how to behave during the games.

For now, the site is hosted for free on GitHub Pages, since that's where I've been hosting this portfolio and other projects, but if I develop it further, I might actually consider buying a domain name.

The AI piece and making API calls was the newest challenge for me and gave me a chance to learn something new about how to successfully set that up. I ended up using Cloudflare—when a student starts a game on the site, their browser sends a message to a small program I set up on Cloudflare Workers (for free). That program is basically a gatekeeper. It holds my Anthropic API key securely (so it's never visible in the website's code), adds it to the request, forwards it to the Anthropic API, and sends the response back to the student's browser. It also has rate limiting built in, so nobody can overuse the service, and it keeps things age-appropriate by enforcing content safety rules.

Each game type has its own set of instructions (called a "system prompt") that tells the AI how to behave for that specific game. For example, the Yes, And game prompt tells the AI to keep responses short (1-3 sentences), accept and build on whatever the student says, gradually raise the stakes, and wrap up after about 6-8 exchanges with a brief encouraging comment. The Fortunately/Unfortunately prompt tells it to alternate between fortunate and unfortunate lines, escalate the story, and stay consistent with details that were introduced earlier.

We only have 2 weeks of improv class left, and I haven't yet shown this to the students, but I did use it myself as a teaching resource for the past two weeks. I think building out the video library would be a great benefit, at least for me personally, if I continue teaching the class. I think it's nice to have sample videos of the exercises to show before diving in. I might also want to add videos directly to the games pages, so that you can see a visual of how the game is played.

All in all, it's been a fun challenge and a great way to experiment with using AI tools as a creative partner.

</div>
</article>

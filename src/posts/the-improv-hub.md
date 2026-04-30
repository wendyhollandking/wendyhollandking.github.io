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

## How this started

I am not an improv expert. I want to be clear about that upfront. But my 6th grade daughter is a huge fan of the art form. She's always been a performer — singing, dancing, acting — and over the past two years she's really gotten into comedy as well. She watches Studio C religiously, has seen plenty of old SNL and Whose Line clips, and has taken a few comedy classes. We also love watching improv together; ComedySportz is a particular favorite of ours, a fast-paced "competitive" comedy show that is genuinely hilarious.

So when she asked me to teach an improv class at her school, I said yes. I'm not entirely sure I fully thought that through. But I do have training as a teacher, and I know how to search the internet for ideas, so I figured I could pull it together — and mostly I did.

What I quickly discovered is that there are very few centralized resources for teaching improv, especially to teens. I wasn't the only teacher or parent who had ever been handed this opportunity with limited preparation, and I was sure there were materials out there somewhere. I found bits and pieces scattered around the internet, but nothing that felt like the cohesive, usable resource I wanted. So, in true instructional designer fashion, I decided to build one.

## What The Improv Hub is

[The Improv Hub](https://wendyking.github.io/improv-hub/) is a browser-based resource for anyone who wants to learn or teach improv. It's aimed at teens (middle and high school), but the content works for anyone just starting out — parents, teachers, class instructors, or just curious people who want to understand what their kid is talking about at dinner.

The site has four main sections:

**Six learning modules** that cover the basics of improv, from getting comfortable being silly all the way through sketch comedy. Each module has a short lesson, a video example, a game to try, and a reflection. I developed roughly this same structure for teaching the middle schoolers, so the modules are basically a cleaned-up version of what I was already doing in the classroom.

**A games library** with 34 improv games, each with rules, examples, variations, and a dozen or so starter prompts. You can filter by category (warm-ups, characters, scenes, comedy) or find games that work for smaller groups. I wanted this to be the kind of thing where a teacher — or really just a group of friends — could open it up, pick a game, and start playing within five minutes.

**AI-powered game practice**, where you can play improv games with an AI scene partner. The idea is that you can practice on your own: "Yes, And" scenes, "Fortunately/Unfortunately", character interviews, and more. The AI just plays along as a partner. I think it's fun, though I'll be honest — it can be clunky. The AI sometimes forces you to do all the comedy work, which isn't exactly the collaborative spirit improv is going for. I'm still working out the kinks there.

**A video library** with curated clips from Whose Line Is It Anyway?, Saturday Night Live, Studio C, Key & Peele, and others. One of the things I learned while teaching the class is that showing a short clip before introducing a game makes a huge difference — kids get it immediately when they can see what you're describing. The library is organized by category and everything in it is screened for age-appropriateness, though I did accidentally include the Substitute Teacher clip, which had more profanity than I remembered. Finding improv clips that are both funny *and* appropriate for 6th graders turns out to be a genuine challenge.

## How I built it

I used ChatGPT and Claude for planning and content development, and Claude Code for the actual building. For the content, I started by outlining the six modules based on what I'd been teaching in the improv class, drawing on that material plus some openly licensed sources I'd found online. Then I worked with Claude to flesh out the lessons, draft the game descriptions, find good video examples, and write the system prompts that tell the AI how to behave during the games.

The site is hosted on GitHub Pages for now, which is free and where I've been hosting this portfolio and other projects anyway. If I develop it further, I might actually consider buying a domain name — a first for me.

The AI piece was the newest technical challenge and the part I learned the most from. When a student starts a game on the site, their browser sends a message to a small program I set up on Cloudflare Workers (also free). That program acts as a gatekeeper: it holds my Anthropic API key securely so it's never visible in the website's code, adds the key to the request, forwards everything to the Anthropic API, and sends the response back. It also has rate limiting built in so nobody can overuse the service, and content safety rules to keep things age-appropriate.

Each game type has its own system prompt that tells the AI how to behave for that specific game. The Yes, And prompt tells the AI to keep responses short (1–3 sentences), accept and build on whatever the student says, gradually raise the stakes, and wrap up after about 6–8 exchanges with a brief encouraging comment. The Fortunately/Unfortunately prompt tells it to alternate between fortunate and unfortunate lines, escalate the story, and stay consistent with details introduced earlier. Getting those prompts right was actually one of the more satisfying parts of this project — I've been prompt engineering for years now, and it was nice to do it for something purely fun.

## What's next

We only have two weeks of improv class left, and I haven't shown the students the site yet — but I have been using it as a teaching resource myself for the past couple of weeks. I think building out the video library would be the most immediately useful next step, both for me personally and for other teachers in similar situations. It would also be nice to add videos directly to the individual game pages, so you can see how a game is played before diving in.

All in all, it was a fun challenge and a genuinely good way to experiment with using AI tools as a creative partner — not just for work, but for something that started with a 6th grader asking her mom to do something a little scary.

</div>
</article>

---
title: App are a bad unit of change
---

# App are a bad unit of change

What do you get when you cross an ambitious person with a software problem?

An app idea.

It’s exciting that people feel empowered to improve the world through software. However, it’s a real bummer that the unit of change is “an app,” because apps are clunky, costly things to build.

You would never consider making an app just to solve your own problem, or the problems of your friends. It costs 100s of hours and/or $10k minimum to create even a basic app. Improving our technology is so costly that the only way to justify it is by spreading its cost around over thousands or even millions of users.

This is tragic for a few reasons.

Firstly, our software will only solves the problems of the masses, one-size-fits-all problems. The  problems that affect mere thousands, hundreds, or even one person can't be directly addressed via software. It’d be too expensive to create custom software, let alone support it as people's’ needs evolve. Today all the customization we get is a meager settings menu and maybe a few Zapier integrations.

Secondly, the cost of software creation is so high that it pushes most entrepreneurs into wacky Silicon Valley business models, where they give away large portions of their company and then grow as fast as possible to justify that investment. This is a very wasteful model. [Something about how slow software is to iterate, and how it requires full time people to test things.]

Finally, this is most tragic because people don't really want to create new software apps. They just want to slightly improve an existing piece of software. I have a friend who wanted to add a few features to mint.com: new app idea. I had a friend who wanted to improve craigslist: new app idea. These friends then proceeded to create pitch decks, talk to investors, create marketing plans to steal customers away, etc, etc. What if we could funnel all that creative energy into simply improving mint.com and craigslist directly? [1]

Unfortunately, technology doesn’t work that way.

The first problem is that mint.com and craigslist are not open-source, so you can’t improve them directly. The best you can do is a brittle Chrome extension.

Another showstopper: even if they were open-source, that’d only let you create your own separate, competing version of the same service somewhere else. [2] We’d still be stuck in a world where the smallest unit of improvement is an app.

We need what r0ml calls “liberal software,” the ability to fork and edit the runtime environment of an application.

“Imagine a world where source-code management was incorporated into a web site. Users could push their own modifications on branches and specify which version they wanted to use. Even if the source is available today, we don't know how to give people the freedom to modify our web sites at run time. We give them the source, but no way to deploy it. That is something we need to change.”

https://lwn.net/Articles/712376/


[1] Yes, there are some who only start businesses with dollar signs in their eyes, and wouldn't lift a finger to improve the world without monetary reward, but I believe that plenty, if not most, people would jump at the change to solve their own problems, and those of others, if it isn’t too costly.

[2] Yes, you could submit a pull request, but let’s assume the feature you’re adding is not broadly applicable, so not all users of the service would want it.


{% include analytics.html %}


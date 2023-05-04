---
title: "Launching my New Personal Website"
description: "A look at the journey from a static HTML/CSS website to a dynamic, reactive personal website built with NuxtJS and VueJS, showcasing the latest web development practices."
publishedAt: "2023-02-02"
aside: false
tags:
  - nuxt
---

## The Need for a New Website
I recently launched my new personal website. This journey started with a basic HTML/CSS website and ended with a dynamic, reactive, and visually appealing website built with the latest web development practices.
My previous website, while functional, was a pure HTML/CSS website that made updating projects and blog posts a tedious task. It also seemed outdated and didn't reflect my current web development skills. The need for a new website was evident to fit in with the ever evolving space.
The journey to creating a new website was filled with a lot of trail and error. I started by researching the latest web development tools and frameworks to choose the best combination of features and ease of use. After some consideration, React vs Angular vs VueJS. I decided to use VueJS and NuxtJS for my new website.

## Choosing the Right Tools
Building with NuxtJS and VueJS was a fun and challenging experience. I started by setting up my project and selecting the right tools, such as pnpm for package management and WindiCSS for styling. I also used Eslint with @antfu/eslint-config for linting and followed best practices for SEO and i18n. The website was then hosted on Vercel for a seamless deployment experience.
As I built my website, I implemented several features, such as automated generated a sitemap.xml and feed, with added automatic breadcrumbs with Schema.org. Markdown read time calculation, code file name and language support and automatic server-side icon resolving. I also integrated the website with @nuxt/image, served images using cloudinary
One of the highlights of building my new website was implementing WindiCSS. This styling library made it easy to create visually appealing and responsive designs with a small and focused set of CSS utility classes. I was also able to use line-md icons by cyberalien, which added an extra touch of design to the website.

## The Result: A Reactive and Dynamic Personal Website
The end result is a personal website that is dynamic, reactive, and visually appealing, making it a great representation of my web development skills and a pleasure to navigate and update. Looking back at my journey from a static HTML/CSS website to a modern framework, for my personal website. I can say that the experience was a great learning opportunity.

93 out of 100 overal score rating taken with [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) (When auditing a page, Lighthouse runs a barrage of tests against the page, and then generates a report on how well the page did.)

<Image src="/blog/Lighthouse-rating_amyhf6.png" alt="Lighthouse rating" />

A+ rating with a score of 100% in each category in [SSLLabs](https://www.ssllabs.com/ssltest/) SSL Server Test (performs a deep analysis of the configuration of any SSL web server on the public Internet).

<Image src="/blog/SSLLabs-Rating_vuqnmn.png" alt="SSLLabs rating" />

## Upcoming Project: A Third-Party App for the Jellyfin Ecosystem
I am excited to share my next projects, a third-party app for the Jellyfin ecosystem. The goal of the project is to interact with the Jellyfin API to monitor activity and track various statistics about the media being watched. I plan to use NuxtJS for the frontend and ExpressJS for the backend, with sqlite to store and manage the data. I am eager to take on this new challenge and continue to grow as a web developer.

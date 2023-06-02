# Chapter One: The MVP *(lol, he doesn't even know how short this will be)*
Day one:
I’ve decided it is inefficient to try and build my own ground-up implementation. Instead, I cloned the open-source Manifold Markets repo and will be adapting it to my needs
It is absolutely massive, so to make things more manageable, I’m going to work only on the web directory right now. I’m deleting anything that I don’t strictly need, but I can obviously retrieve anything I actually do need from the GH
I’ll probably be using SupaBase for my backend (running on Vercel)
I watched two 1-hour walkthroughs, one of React and one of Next.js, so I have a rudimentary understanding of them. I’m not familiar with Tailwind or TypeScript, but don’t anticipate that will be an issue.
I don’t have the time or pain-tolerance to concurrently dev for native, so phone users can suck it (IDK, something like BubbleWrap probably exists for react/next, so I can use that in a later, post-MVP stage)
I’m in the process of purging all unnecessary content. I’m checking for dependency breaking, but certain things like the mp3s folder are just getting deleted. This may cause issues, and I should make sure to add my own sounds before the final (non-MVP) release
Changed default user icon, but it looks kinda gross now. Change back? (old version is still renamed in public dir)
Make some fancy demo gifs like manifold has but for our demo pages (not for MVP, for sure, but maybe later?)
Wrote deadDeleterUtil. This should remove any dependencies of deleted layouts
Day two:
I set up git and will be using it for version control. Check my git logs for development step logs, but I’ll keep posting ideas and general notes here
I’ve settled on going through the pages, one-by-one and cleaning and adapting them. I started with the top-level ones, going down the list, and will do the few nested ones afterward. After that, I can DeadRemove the components folder and then adapt all its contents. My goal is to have at least half of the top-levels done by midnight tonight.
Design-wise, I’m going to start out with a single post functionality, and then split it out into the polls and shortforms pieces when it’s ready to be
I just finished making superficial adaptations to all top-level pages. Deeper ones, including moving away from firebase, restyling, and migrating from market terminology are still needed.
I’m going to start working on the slug-post second-level feature, and expect it will take about 45 minutes to fully adapt to a new working state.

Once I actually manage to bring this thing back online, then I can start editing page-by-page to fit my design spec.
Once I fit this, I’m going to have to go through almost line-by-line through every (used) component and page to fix any visual/functional breaking my adaptation may have caused. Then I can begin actually coding in new functionality

You. Dumb. Fuck.
I messed this thing up so badly that I’m just going to start over from the beginning. I’ll prune out pages I don’t need then write a more advanced script to delete all dependencies. One thing I won’t do, however, is delete the native folder. It did nothing to me, why couldn’t I just leave it alone?
Day 3
I’ve realized that the excess components and hooks aren’t hurting anyone. Leaving them as they are will not impact the compiled product whatsoever. I’ll just throw in some new dirs for custom elements and leave the existing ones as they are, pruning out pages I don’t need.

WOW. Okay. So, I just decided to scrap the entire project. The Graveyard contains more information, including a postmortem, but let’s just say that I think this is for the best. Now I can direct my efforts toward skilling-up in AI research, and perhaps then I can create a sentiment analysis algorithm that can scrape the web, build up detailed OSINT profiles of people it sees talking about AI, and then similarly infer what their opinions by-demographic are? This could be very interesting, though the data would likely be skewed partially by the fact that they are a specific subset of their demographic that is comfortable with sharing such personal information. Could be interesting, for sure.

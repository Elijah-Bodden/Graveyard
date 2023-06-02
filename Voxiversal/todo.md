The later Manifold-based iterations are really-dense with MIT-licened Manifold code - kind of inextricable from it - so here's the todo file I wrote for it.

- Decide whether to change back to old default user icon or not
- Regen all contents of web/public
- Add a license file correctly attributing the manifold team
- Prod.ts seems important (manifold-main\common\src\envs\prod.ts)
- Also manifold-main\common\src\envs\constants.ts
- When I edit those two, I'll have to go back through all their dependencies to fix things like renames
- Update all defs (manifold-main\common\config\defs.ts)
- Search entire repo for "placeholder" and replace all instances before deploy time
- Obviously rename + restructure i.e. contract-related components and ctrl-f for old names throughout repo to prevent dependency-breaking

- Even once I've formally adapted this to work for Voxiversal, it will still look and feel distinctly like Manifold. This will be the time to sprinkle in some spice to make it feel like its own app
- Phase out "discordHandle" as a privateUser field?
- Do something with server sitemap page
- Update report user component with appropriate reasons
- Look at where the stuff in the onboarding component dir is being used. It looks neat, and might be helpful to adapt

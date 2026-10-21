---
description: "Use when adding or changing Framer Motion, scroll-triggered reveals, transitions, or interactive animations in this portfolio."
applyTo: "components/**/*.tsx"
---
# Motion and Animation Guidelines

- Use the shared easing curve `[0.16, 1, 0.3, 1]` for Framer Motion transitions to keep motion consistent across the portfolio.
- Set `viewport={{ once: true }}` on scroll-triggered `whileInView` animations so they do not replay when scrolling back and forth.
- Keep reveal animations to opacity and transforms; avoid changing layout-affecting properties during entry to prevent flicker and layout shifts.
- Respect the user's reduced-motion preference.

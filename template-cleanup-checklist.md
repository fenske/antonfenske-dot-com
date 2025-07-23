# Template Cleanup Checklist

This checklist contains all the boilerplate content from the TailwindPlus Spotlight template that needs to be updated for your personal website.

## High Priority - Template Author References

- [ ] **Footer.tsx:34** - Update copyright from "Spencer Sharp" to your name
- [ ] **feed.xml/route.ts:13-14** - Update RSS feed author information:
  - Change `name: 'Spencer Sharp'` to your name
  - Change `email: 'spencer@planetaria.tech'` to your email
- [ ] **feed.xml/route.ts:19** - Update RSS feed description from "Your blog description" to actual description
- [ ] **layout.tsx:14-15** - Update meta description that references Spencer Sharp and Planetaria company

## Medium Priority - Template Assets

- [ ] **package.json:2** - Update project name from "tailwind-plus-template" to something more appropriate
- [ ] **projects/page.tsx:18** - Replace DevSkills project logo (currently using Planetaria template logo)
- [ ] **page.tsx:13-16** - Remove unused template logo imports:
  - `logoAirbnb`
  - `logoFacebook` 
  - `logoPlanetaria`
  - `logoStarbucks`
- [ ] **projects/page.tsx:6-9** - Remove unused template logo imports:
  - `logoAnimaginary`
  - `logoCosmos`
  - `logoHelioStream`
  - `logoOpenShuttle`

## Low Priority - Template Images & Config

- [ ] **Template logo files** - Consider removing unused template logos from `src/images/logos/`:
  - `airbnb.svg`
  - `animaginary.svg`
  - `cosmos.svg`
  - `facebook.svg`
  - `helio-stream.svg`
  - `open-shuttle.svg`
  - `planetaria.svg`
  - `starbucks.svg`
- [ ] **Template photos** - Review sample photos in `src/images/photos/` and replace if needed
- [ ] **Blog post author** - Update author in `the-5-years-that-made-me-start-a-saas-business-during-covid/page.mdx:4` from "Author Name" to your name
- [ ] **Environment setup** - Ensure `.env.local` has your actual site URL instead of example.com

## Files Already Customized ✅

- About page content (personal info, social links)
- Blog post content (DevSkills story)
- Portrait image
- Site title in layout.tsx
- Main navigation and structure

## Notes

- The blog posts appear to contain your personal content about DevSkills
- Social media links in About page are already customized
- Main site structure and navigation have been personalized
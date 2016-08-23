# aframe-presentation-kit

Official starter slides for giving talks and presentations about A-Frame.

[VIEW SLIDES](https://ngokevin.github.io/aframe-presentation-kit/)

## Installation

1. [Download the repository (.ZIP)](https://github.com/ngokevin/aframe-presentation-kit/archive/master.zip)
2. Start the local server (`npm run start`)
3. Open `http://localhost:5000` in your browser

## Modifying Content

The kit uses [reveal.js](https://github.com/hakimel/reveal.js/), an HTML
presentation framework. Read their documentation to see how to style and
present content the way you wish.

Modify the **CONTENT.md** file to edit content. Slides are written in Markdown
and separated by six hyphens `------`. You can also add vertical slides by
separating with three hyphens `---`. The slides are grouped, using vertical
slides to drill down or build on general points.

The first place to start would be to update the author, date, and location in
the title slide.

You should tailor the content to your audience. You may want to filter out
slides depending on the answers to these questions (as well as the allotted
length of your talk):

- Is your audience familiar with virtual reality?
- Is your audience familiar with WebVR?
- Is your audience interested in underlying code (i.e., JavaScript, A-Frame components, three.js)?

## Deployment

In your GitHub repository settings page under **GitHub Pages** and *Source*,
select `master branch`. Then simply push to GitHub and your slides will be live
at `https://yourusername.github.io/aframe-presentation-kit` or whatever you
named the repository. [Read
more](https://github.com/blog/2228-simpler-github-pages-publishing).

## Table of Contents

- Title
- Virtual Reality
  - Hardware
- WebVR
  - Browser Support
- A-Frame
- Why A-Frame?
  - Removes Boilerplate
  - Easy for Web Developers
- Entity-Component-System Framework
  - Syntax
  - Building a Component
- Ecosystem
  - Components
  - Scenes
- Community

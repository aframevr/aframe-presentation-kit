# aframe-presentation-kit

Official starter slides for giving talks and presentations about A-Frame.

[VIEW SLIDES](https://ngokevin.github.io/aframe-presentation-kit/)

## Installation

1. [Download the repository (.ZIP)](https://github.com/ngokevin/aframe-presentation-kit/archive/master.zip)
2. Start the local server (`npm run start`)
3. Open `http://localhost:8080` in your browser

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

## Modifying Content

The kit uses [reveal.js](https://github.com/hakimel/reveal.js/), an HTML
presentation framework. Read their documentation to see how to style and
present content the way you wish.

Modify the **CONTENT.md** file to edit content. Slides are written in Markdown
and separated by six hyphens `------`. You can also add vertical slides by
separating with three hyphens `---`. The slides are grouped, using vertical
slides to drill down or build on general points. You can add speaker notes
by putting content under `<!-- Speaker Notes -->` on each slide.

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

## Presenting

For better performance, it is recommended to serve the slides locally from your
computer so there aren't constant reflows from downloading images and videos.

Press the `f` key on your keyboard to go full screen.

Press the `s` key on your keyboard to open up the Speakers Notes window.

Press the `<esc>` or `o` key on your keyboard to see a zoomed out overview of
the slides.

There are some slides with embedded A-Frame scenes. You can play with these
scenes live from right within the slide. Click-drag to look around. You may
also enter full screen or enter VR with a headset connected, again from right
within the slide.

You may also open up a scene in the A-Frame Inspector by pressing `<ctrl> +
<alt> + i` on your keyboard. This will open up an embedded A-Frame scene in a
visual tool.

Check out these [public speaking guide](http://speaking.io/) and good luck!

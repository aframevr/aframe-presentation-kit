# aframe-presentation-kit

Official starter slides for giving talks and presentations about A-Frame.

[VIEW SLIDES](https://aframe.io/aframe-presentation-kit/#/)

## Installation

1. [Download the repository (.ZIP)](http://github.com/aframevr/aframe-presentation-kit/zipball/master) (>200MB)
2. Start the local server (`npm run start`)
3. Open `http://localhost:8080` in your browser

## Table of Contents

- Introduction
- Virtual Reality
  - Hardware
  - Friction of VR Ecosystems
- WebVR
  - Advantages
  - API
  - Browsers
  - Metaverse
  - Barrier to Entry
- A-Frame
  - Introduction
  - Hello World
  - Demo
  - Works With Everything
- Entity-Component-System
  - Concept
  - Composing an Entity
  - Registry
  - Inspector
- Community
  - Examples
  - Numbers

## Modifying Design

The kit uses [reveal.js](https://github.com/hakimel/reveal.js/), an HTML
presentation framework. If you wish to customize, read their documentation to
see how to configure and style the slide deck.

For styling, the kit theme is based on the white theme found in the reveal.js
repository. This has been copied to `src/main.css` which you can replace or
modify.

## Modifying Content

Modify the **content.md** file to edit content. Slides are written in Markdown
and separated by six hyphens `------`. You can also add vertical slides by
separating with three hyphens `---`. The slides are grouped, using vertical
slides to drill down or build on general points. You can add speaker notes
by putting content under `<!-- NOTES -->` on each slide.

Tailor the content to your audience. Filter out slides depending on the answers
to these questions (as well as the allotted length of your talk). For example:

- **Is your audience familiar with virtual reality?** - If so, you might want to skip or trim the *Virtual Reality* section.
- **Is your audience interested in underlying code (i.e., JavaScript, A-Frame components, three.js)?** - If not, then trim the *Entity-Component-System* section.

### Adding A-Frame Scenes

A-Frame scenes are embedded right within the slides so you can demo without
having to navigate away. The kit will recognize `<div
data-aframe-scene="scenes/yourscene.html"></div>` and load in the A-Frame
scene.

## Deployment

In your GitHub repository settings page under **GitHub Pages** and *Source*,
select `master branch`. Then simply push to your GitHub repo, and then your
slides will be live at `https://yourusername.github.io/aframe-presentation-kit`
or whatever you named the repository. [Read more about GitHub
Pages](https://github.com/blog/2228-simpler-github-pages-publishing).

## Presenting

Serve the slides locally from your computer for better network performance.

Press the `f` key on your keyboard to go full screen. Press the `s` key on your
keyboard to open up the **Speakers Notes** window. Press the `<esc>` or `o` key
on your keyboard to see a zoomed out overview of the slides.

There are slides with embedded A-Frame scenes. Play with these scenes live from
right within the slide. Click and drag to look around. You may enter full
screen, or if you have a headset connected, enter VR.

Open up a scene in the A-Frame Inspector by pressing `<ctrl> + <alt> + i` on
your keyboard. This will open up an embedded A-Frame scene in a visual tool.

Check out this [public speaking guide](http://speaking.io/) and good luck!

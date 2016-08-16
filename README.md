# aframe-presentation-kit

Official starter slides for giving talks and presentations about A-Frame.

[VIEW SLIDES](https://ngokevin.github.io/aframe-presentation-kit/)

## Installation

1. [Download the repository (.ZIP)](https://github.com/ngokevin/aframe-presentation-kit/archive/master.zip)
2. Start the local server (`npm run start`)
3. Open `http://localhost:5000` in your browser

## Development

The kit uses [reveal.js](https://github.com/hakimel/reveal.js/), an HTML
presentation framework. Read their documentation to see how to style and
present content the way you wish.

Modify the `index.html` file to edit slides and content. Slides are contained
within `<section>`s. The first place to start would be to update the author,
date, and location in the title slide.

We suggest tailoring the content to your audience. You may want to filter out
slides depending on the answers to these questions:

- Is your audience familiar with virtual reality?
- Is your audience familiar with WebVR?
- Is your audience interested in underlying code (i.e., JavaScript, A-Frame components, three.js)?

## Deployment

Run `npm install && npm run ghpages` to deploy the slides to GitHub pages. It
can then be accessed from anywhere via
`https://yourusername.github.io/aframe-presentation-kit` (or whatever your
repository's name is).

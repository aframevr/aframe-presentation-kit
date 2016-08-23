// https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({
  history: true,
  // https://github.com/hakimel/reveal.js#dependencies
  dependencies: [
    {src: 'src/vendor/plugin/markdown/marked.js'},
    {src: 'src/vendor/plugin/markdown/markdown.js'},
    {src: 'src/vendor/plugin/notes/notes.js', async: true},
    {src: 'src/vendor/plugin/highlight/highlight.js', async: true, callback: function () {
      hljs.initHighlightingOnLoad();
    }}
  ],
  margin: 0
});

// Fix Markdown wrapping <img> in <p>.
fixWrappedImages();
Reveal.addEventListener('ready', fixWrappedImages);
Reveal.addEventListener('slidechanged', fixWrappedImages);
function fixWrappedImages () {
  var imgs = document.querySelectorAll('section > p > img');
  for (var i = 0; i < imgs.length; i++) {
    var img = imgs[i];
    var p = img.parentNode;
    var section  = p.parentNode;
    section.insertBefore(img, p);
    section.removeChild(p);
  }
}

// Ensure videos are played on slide change
Reveal.addEventListener('slidechanged', function playVideos (evt) {
  var videos = evt.currentSlide.querySelectorAll('video');
  for (var i = 0; i < videos.length; i++) {
    videos[i].play();
  }
});

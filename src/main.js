// https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({
  history: true,
  // https://github.com/hakimel/reveal.js#dependencies
  dependencies: [
    {src: 'vendor/plugin/markdown/marked.js'},
    {src: 'vendor/plugin/markdown/markdown.js'},
    {src: 'vendor/plugin/notes/notes.js', async: true},
    {src: 'vendor/plugin/highlight/highlight.js', async: true, callback: function () {
      hljs.initHighlightingOnLoad();
    }}
  ]
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

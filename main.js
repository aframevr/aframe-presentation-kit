// https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({
  history: true,

  // https://github.com/hakimel/reveal.js#dependencies
  dependencies: [
    {src: 'plugin/markdown/marked.js'},
    {src: 'plugin/markdown/markdown.js'},
    {src: 'plugin/notes/notes.js', async: true},
    {src: 'plugin/highlight/highlight.js', async: true, callback: function () {
      hljs.initHighlightingOnLoad();
    }}
  ]
});

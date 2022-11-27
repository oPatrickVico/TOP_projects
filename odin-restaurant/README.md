# odin-restaurant

Things I learned:

- To use webpack. Webpack is tricky and I do not claim to get a full hold of it. However, I did get used to the quirk of changing the config not updating the --watch mode. Also, loading extra resources is kind of straightfoward. Kind of. I failed in trying to import ttf fonts and I don't know why (to be fair, I haven't searched for it either).
- That inline styling is a bad idea. Initially, I liked the idea of changing the styles through javascript. Turns out, everybody advices against that! I do plan on trying the document.stylesheets type of objects, but it looks like I should go to plain old css files and just import them to javascript, so I can toggle classes easily.
- That using object destructuration inside the function as a parameter centralizer bad, because it obscures the interface that editors use to show tips. Destructuring the object right in the parathensis, however, fixes that issue.
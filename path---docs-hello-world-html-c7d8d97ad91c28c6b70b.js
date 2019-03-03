webpackJsonp([0x9da9275e2a54],{931:function(e,t){e.exports={data:{markdownRemark:{html:'<p>The smallest React example looks like this:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx">ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>Hello<span class="token punctuation">,</span> world<span class="token operator">!</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">\'root\'</span><span class="token punctuation">)</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>It displays a heading saying “Hello, world!” on the page.</p>\n<p><a href="/redirect-to-codepen/hello-world" target="_blank" rel="noreferrer"><b>Попробовать на CodePen</b></a></p>\n<p>Click the link above to open an online editor. Feel free to make some changes, and see how they affect the output. Most pages in this guide will have editable examples like this one.</p>\n<h2 id="how-to-read-this-guide"><a href="#how-to-read-this-guide" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>How to Read This Guide</h2>\n<p>In this guide, we will examine the building blocks of React apps: elements and components. Once you master them, you can create complex apps from small reusable pieces.</p>\n<blockquote>\n<p>Tip</p>\n<p>This guide is designed for people who prefer <strong>learning concepts step by step</strong>. If you prefer to learn by doing, check out our <a href="/tutorial/tutorial.html">practical tutorial</a>. You might find this guide and the tutorial complementary to each other.</p>\n</blockquote>\n<p>This is the first chapter in a step-by-step guide about main React concepts. You can find a list of all its chapters in the navigation sidebar. If you’re reading this from a mobile device, you can access the navigation by pressing the button in the bottom right corner of your screen.</p>\n<p>Every chapter in this guide builds on the knowledge introduced in earlier chapters. <strong>You can learn most of React by reading the “Main Concepts” guide chapters in the order they appear in the sidebar.</strong> For example, <a href="/docs/introducing-jsx.html">“Introducing JSX”</a> is the next chapter after this one.</p>\n<h2 id="knowledge-level-assumptions"><a href="#knowledge-level-assumptions" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Knowledge Level Assumptions</h2>\n<p>React is a JavaScript library, and so we’ll assume you have a basic understanding of the JavaScript language. <strong>If you don’t feel very confident, we recommend <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript">going through a JavaScript tutorial</a> to check your knowledge level</strong> and enable you to follow along this guide without getting lost. It might take you between 30 minutes and an hour, but as a result you won’t have to feel like you’re learning both React and JavaScript at the same time.</p>\n<blockquote>\n<p>Note</p>\n<p>This guide occasionally uses some of the newer JavaScript syntax in the examples. If you haven’t worked with JavaScript in the last few years, <a href="https://gist.github.com/gaearon/683e676101005de0add59e8bb345340c">these three points</a> should get you most of the way.</p>\n</blockquote>\n<h2 id="lets-get-started"><a href="#lets-get-started" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Let’s Get Started!</h2>\n<p>Keep scrolling down, and you’ll find the link to the <a href="/docs/introducing-jsx.html">next chapter of this guide</a> right before the website footer.</p>',frontmatter:{title:"Hello World",next:"introducing-jsx.html",prev:"cdn-links.html"},fields:{path:"docs/hello-world.md",slug:"docs/hello-world.html"}}},pathContext:{slug:"docs/hello-world.html"}}}});
//# sourceMappingURL=path---docs-hello-world-html-c7d8d97ad91c28c6b70b.js.map
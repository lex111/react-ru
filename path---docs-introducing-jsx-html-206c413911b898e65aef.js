webpackJsonp([0x68ce5b727d54],{936:function(s,n){s.exports={data:{markdownRemark:{html:'<p>Рассмотрим это объявление переменной:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">const</span> element <span class="token operator">=</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>Привет<span class="token punctuation">,</span> мир<span class="token operator">!</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Синтаксис этого странного тега не является ни строкой, ни HTML.</p>\n<p>Он называется JSX, и это расширение синтаксиса JavaScript. Мы рекомендуем использовать его с React для описания того, как должен выглядеть пользовательский интерфейс. JSX может напомнить вам о языке шаблонов, но со всей полной мощью JavaScript.</p>\n<p>JSX создаёт «элементы» React. Мы рассмотрим их отрисовку в DOM в <a href="/docs/rendering-elements.html">следующем разделе</a>. Ниже вы можете найти основы JSX, необходимые для начала работы.</p>\n<h3 id="Почему-jsx"><a href="#%D0%9F%D0%BE%D1%87%D0%B5%D0%BC%D1%83-jsx" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Почему JSX?</h3>\n<p>React принимает тот факт, что логика отрисовки по сути связана с другой логикой пользовательского интерфейса: как обрабатываются события, как изменяется состояние со временем и как данные подготовлены для отображения.</p>\n<p>Вместо искусственного разделения <em>технологий</em>, помещая разметку и логику в отдельные файлы, React <a href="https://ru.wikipedia.org/wiki/%D0%A0%D0%B0%D0%B7%D0%B4%D0%B5%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5_%D0%BE%D1%82%D0%B2%D0%B5%D1%82%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D1%81%D1%82%D0%B8">разделяет <em>ответственности</em></a> с слабо связанными модулями, называемыми «компонентами», которые содержат вместе разметку и логику. Мы вернёмся к компонентам в <a href="/docs/components-and-props.html">следующем разделе</a>, но если вы ещё не очень хорошо умеет размещать разметку в JS, <a href="https://www.youtube.com/watch?v=x7cQ3mrcKaY">этот доклад</a> может убедить вас в другом.</p>\n<p>React <a href="/docs/response-without-jsx.html">не требует</a> использование JSX, но большинство людей находят его полезным в качестве визуальной демонстрации при работе с пользовательским интерфейсом внутри кода JavaScript. Он также позволяет React показывать более полезные сообщения об ошибках и предупреждения.</p>\n<p>Теперь, когда с этим разобрались, давайте начнём!</p>\n<h3 id="Встраивание-выражений-в-jsx"><a href="#%D0%92%D1%81%D1%82%D1%80%D0%B0%D0%B8%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2%D1%8B%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B9-%D0%B2-jsx" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Встраивание выражений в JSX</h3>\n<p>В приведённом ниже примере мы объявляем переменную с именем <code class="gatsby-code-text">name</code>, а затем используем ее внутри JSX, обернув ее в фигурные скобки:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="gatsby-highlight-code-line"><span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">\'Josh Perez\'</span><span class="token punctuation">;</span>\n</span><span class="gatsby-highlight-code-line"><span class="token keyword">const</span> element <span class="token operator">=</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>Привет<span class="token punctuation">,</span> <span class="token punctuation">{</span>name<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>\n</span>\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  element<span class="token punctuation">,</span>\n  document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">\'root\'</span><span class="token punctuation">)</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>В фигурных скобках JSX вы можете поместить любое корректное <a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Expressions_and_Operators#Expressions">выражение JavaScript</a>. Например, <code class="gatsby-code-text">2 + 2</code>, <code class="gatsby-code-text">user.firstName</code>, или <code class="gatsby-code-text">formatName(user)</code> — всё это допустимые выражения в JavaScript.</p>\n<p>В приведённом ниже примере мы вставляем результат вызова функции JavaScript, <code class="gatsby-code-text">formatName(user)</code>, в элемент <code class="gatsby-code-text">&lt;h1&gt;</code>.</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">function</span> <span class="token function">formatName</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> user<span class="token punctuation">.</span>firstName <span class="token operator">+</span> <span class="token string">\' \'</span> <span class="token operator">+</span> user<span class="token punctuation">.</span>lastName<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token punctuation">{</span>\n  firstName<span class="token punctuation">:</span> <span class="token string">\'Harper\'</span><span class="token punctuation">,</span>\n  lastName<span class="token punctuation">:</span> <span class="token string">\'Perez\'</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> element <span class="token operator">=</span> <span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>\n<span class="gatsby-highlight-code-line">    Hello<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token function">formatName</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">!</span>\n</span>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  element<span class="token punctuation">,</span>\n  document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">\'root\'</span><span class="token punctuation">)</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p><a href="/redirect-to-codepen/introducing-jsx" target="_blank" rel="noreferrer"><b>Попробовать на CodePen</b></a></p>\n<p>Мы разделяем JSX на несколько строк для удобства чтения. Хотя это не требуется, при этом мы также рекомендуем обёртывать его в круглых скобках, чтобы избежать ошибок, связанных с <a href="http://stackoverflow.com/q/2846283">автоматической вставкой точки с запятой</a>.</p>\n<h3 id="jsx--это-выражение-тоже"><a href="#jsx--%D1%8D%D1%82%D0%BE-%D0%B2%D1%8B%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-%D1%82%D0%BE%D0%B6%D0%B5" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>JSX — это выражение тоже</h3>\n<p>После компиляции выражения JSX становятся обычными вызовами функций JavaScript и вычисляются в объекты JavaScript.</p>\n<p>Это означает, что вы можете использовать JSX внутри операторов <code class="gatsby-code-text">if</code> и<code class="gatsby-code-text">for</code>, присваивать его переменным, принимать его в качесиве аргументов и возвращать из функций:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">function</span> <span class="token function">getGreeting</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>user<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n<span class="gatsby-highlight-code-line">    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>Привет<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token function">formatName</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">!</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>\n</span>  <span class="token punctuation">}</span>\n<span class="gatsby-highlight-code-line">  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>Привет<span class="token punctuation">,</span> незнакомец<span class="token punctuation">.</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>\n</span><span class="token punctuation">}</span></code></pre>\n      </div>\n<h3 id="Установка-атрибутов-с-помощью-jsx"><a href="#%D0%A3%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BA%D0%B0-%D0%B0%D1%82%D1%80%D0%B8%D0%B1%D1%83%D1%82%D0%BE%D0%B2-%D1%81-%D0%BF%D0%BE%D0%BC%D0%BE%D1%89%D1%8C%D1%8E-jsx" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Установка атрибутов с помощью JSX</h3>\n<p>Вы можете использовать кавычки для указания строковых литералов в качестве атрибутов:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">const</span> element <span class="token operator">=</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">tabIndex</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Вы также можете использовать фигурные скобки для вставки JavaScript-выражения в атрибут:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">const</span> element <span class="token operator">=</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>user<span class="token punctuation">.</span>avatarUrl<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>img</span><span class="token punctuation">></span></span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Не используйте кавычки вокруг фигурных скобок при вставке выражения JavaScript в атрибут. Нужно использовать либо кавычки (для строковых значений), либо фигурные скобки (для выражений), но не оба в одном и том же атрибуте.</p>\n<blockquote>\n<p>** Внимание: **</p>\n<p>Поскольку JSX ближе к JavaScript, чем к HTML, React DOM использует соглашение об именах свойств <code class="gatsby-code-text">camelCase</code> вместо имён атрибутов HTML.</p>\n<p>Например, <code class="gatsby-code-text">class</code> становится <a href="https://developer.mozilla.org/ru/docs/Web/API/Element/className"><code class="gatsby-code-text">className</code></a> в JSX, а <code class="gatsby-code-text">tabindex</code> становится <a href="https://developer.mozilla.org/ru/docs/Web/API/HTMLElement/tabIndex"><code class="gatsby-code-text">tabIndex</code></a>.</p>\n</blockquote>\n<h3 id="Установка-детей-с-помощью-jsx"><a href="#%D0%A3%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BA%D0%B0-%D0%B4%D0%B5%D1%82%D0%B5%D0%B9-%D1%81-%D0%BF%D0%BE%D0%BC%D0%BE%D1%89%D1%8C%D1%8E-jsx" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Установка детей с помощью JSX</h3>\n<p>Если тег пуст, вы можете немедленно его закрыть с помощью <code class="gatsby-code-text">/&gt;</code>, точно так же, как в XML:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">const</span> element <span class="token operator">=</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>user<span class="token punctuation">.</span>avatarUrl<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Теги JSX могут содержать дочерние элементы:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">const</span> element <span class="token operator">=</span> <span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>Привет<span class="token operator">!</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>Рад тебя видеть<span class="token punctuation">.</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<h3 id="jsx-предотвращает-атаки-инъекции"><a href="#jsx-%D0%BF%D1%80%D0%B5%D0%B4%D0%BE%D1%82%D0%B2%D1%80%D0%B0%D1%89%D0%B0%D0%B5%D1%82-%D0%B0%D1%82%D0%B0%D0%BA%D0%B8-%D0%B8%D0%BD%D1%8A%D0%B5%D0%BA%D1%86%D0%B8%D0%B8" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>JSX предотвращает атаки-инъекции</h3>\n<p>Безопасно встраивать пользовательские данные в JSX:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">const</span> title <span class="token operator">=</span> response<span class="token punctuation">.</span>potentiallyMaliciousInput<span class="token punctuation">;</span>\n<span class="token comment">// Это безопасно:</span>\n<span class="token keyword">const</span> element <span class="token operator">=</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>title<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>By default, React DOM <a href="http://stackoverflow.com/questions/7381974/which-characters-need-to-be-escaped-on-html">escapes</a> any values embedded in JSX before rendering them. Thus it ensures that you can never inject anything that’s not explicitly written in your application. Everything is converted to a string before being rendered. This helps prevent <a href="https://en.wikipedia.org/wiki/Cross-site_scripting">XSS (cross-site-scripting)</a> attacks.</p>\n<p>По умолчанию DOM React <a href="http://stackoverflow.com/questions/7381974/which-characters-need-to-be-escaped-on-html">экранирует</a> любые значения, встроенные в JSX, перед их отрисовкой. Таким образом, гарантируется, что вы никогда не сможете внедрить то, чего явно нет в вашем приложении. Перед отрисовкой все преобразуется в строку. Это помогает предотвратить атаки <a href="https://ru.wikipedia.org/wiki/%D0%9C%D0%B5%D0%B6%D1%81%D0%B0%D0%B9%D1%82%D0%BE%D0%B2%D1%8B%D0%B9_%D1%81%D0%BA%D1%80%D0%B8%D0%BF%D1%82%D0%B8%D0%BD%D0%B3">межсайтовый скриптинг (cross-site-scripting, XSS)</a>.</p>\n<h3 id="jsx-представляет-из-себя-объекты"><a href="#jsx-%D0%BF%D1%80%D0%B5%D0%B4%D1%81%D1%82%D0%B0%D0%B2%D0%BB%D1%8F%D0%B5%D1%82-%D0%B8%D0%B7-%D1%81%D0%B5%D0%B1%D1%8F-%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D1%8B" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>JSX представляет из себя объекты</h3>\n<p>Babel компилирует JSX в вызовы <code class="gatsby-code-text">React.createElement()</code>.</p>\n<p>Ниже два примера идентичны:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">const</span> element <span class="token operator">=</span> <span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>greeting<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    Привет<span class="token punctuation">,</span> мир<span class="token operator">!</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">const</span> element <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span>\n  <span class="token string">\'h1\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>className<span class="token punctuation">:</span> <span class="token string">\'greeting\'</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token string">\'Привет, мир!\'</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p><code class="gatsby-code-text">React.createElement ()</code> выполняет несколько проверок для помощи вам написать код без ошибок, но по сути он создает такой объект:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token comment">// Примечание: эта структура упрощена</span>\n<span class="token keyword">const</span> element <span class="token operator">=</span> <span class="token punctuation">{</span>\n  type<span class="token punctuation">:</span> <span class="token string">\'h1\'</span><span class="token punctuation">,</span>\n  props<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    className<span class="token punctuation">:</span> <span class="token string">\'greeting\'</span><span class="token punctuation">,</span>\n    children<span class="token punctuation">:</span> <span class="token string">\'Привет, мир!\'</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Эти объекты называются элементами «React-элементами». Можно думать о них как о том, что вы хотите видеть на экране. React считывает эти объекты и использует их для построения DOM и его обновления.</p>\n<p>Мы рассмотрим отрисовку элементов React в DOM в следующем разделе.</p>\n<blockquote>\n<p>** Совет: **</p>\n<p>Мы рекомендуем использовать <a href="http://babeljs.io/docs/editors">определение языка «Babel»</a> в вашем редакторе, чтобы как код ES6, так и JSX были правильно подсвечены. Этот сайт использует цветовую схему<a href="https://labs.voronianski.com/oceanic-next-color-scheme/">Oceanic Next</a>, которая совместима с этим определением.</p>\n</blockquote>',frontmatter:{title:"Введение в JSX",next:"rendering-elements.html",prev:"hello-world.html"},fields:{path:"docs/introducing-jsx.md",slug:"docs/introducing-jsx.html"}}},pathContext:{slug:"docs/introducing-jsx.html"}}}});
//# sourceMappingURL=path---docs-introducing-jsx-html-206c413911b898e65aef.js.map
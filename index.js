var Highlight = require('highlight-syntax')
var mount = require('choo/mount')
var html = require('choo/html')
var log = require('choo-log')
var css = require('sheetify')
var choo = require('choo')

css('highlight-syntax-pastel')
css('tachyons')

var highlight = Highlight([ require('highlight-syntax/js') ])
var prefix = css`
  :host { background-color: rgb(255, 195, 228) }
`

function code (str) {
  return html`
   <pre class="center lh-copy tl measure-wide-l mt0-ns db bg-dark-gray pa4 mv0 f3 overflow-auto"><code>${
     toHtml(highlight(str.trim(), { lang: 'js' }))
   }</code></pre>
  `
}

var slides = [
  html`
    <main class="mw7">
      <h1 class="f-subheadline f-subheadline-ns bold sans-serif mb4">
        In-depth asynchronous message passing strategies
      </h1>
      <h2 class="f2 mt0 bold">
        <em>A seminar by Y. Wuyts</em>
      </h2>
    </main>
  `,
  html`
    <main class="mw7">
      <h1 class="f-subheadline f-subheadline-ns bold sans-serif mb4">
        just kidding
      </h1>
    </main>
  `,
  html`
    <main class="mw7">
      <h1 class="f-subheadline f-headline-ns bold sans-serif mb4">
        Choo for designers
      </h1>
      <h2 class="f2 mt0 bold">
        <em>@yoshuawuyts</em>
      </h2>
    </main>
  `,
  html`
    <main class="mw7">
      <h1 class="f-subheadline f-headline-ns bold sans-serif mb4">
        (loud applause)
      </h1>
    </main>
  `,
  html`
    <main class="mw7">
      <h1 class="f-subheadline f-headline-ns bold sans-serif mb4">
        HELLO MY NAME IS YOSH
      </h1>
      <h2 class="f2 mt0 bold">
        (hi yosh)
      </h2>
    </main>
  `,
  html`
    <main class="mw7">
      <h2 class="f-5 bold ttu">
        Today's seminar:
      </h2>
      <ul class="list f1 lh-copy">
        <li class="underline">
          ___Talk a lil about frameworks__
        </li>
        <li class="underline">
          _________COMPONENTS___.
        </li>
        <li class="underline">
          _Tooling et. al.___
        </li>
        <li class="underline">
          (and that's it, 20 minutes isn't much)
        </li>
      </ul>
    </main>
  `,
  html`
    <main class="mw7">
      <h2 class="f-subheadline bold">
        [ PROGRESSIVE ENCANCEMENT ]
      </h2>
    </main>
  `
]

var app = choo()
app.use(log())

app.model({
  namespace: 'slides',
  state: {
    slide: (function () {
      var loc = window.location.hash.replace('#', '')
      return (!loc) ? 0 : Number(loc.replace('slide-', ''))
    })(),
    max: slides.length - 1
  },
  reducers: {
    set: function (state, data) {
      return { slide: data }
    }
  },
  effects: {
    left: function (state, data, send, done) {
      var num = state.slide - 1
      var uri = (num <= 0) ? '/' : '#slide-' + num
      if (!(num < 0)) {
        send('slides:set', num, function () {
          send('location:set', uri, done)
        })
      }
    },
    right: function (state, data, send, done) {
      var num = state.slide + 1
      var uri = '#slide-' + num
      if (!(num > state.max)) {
        send('slides:set', num, function () {
          send('location:set', uri, done)
        })
      }
    }
  },
  subscriptions: {
    keydown: (send, done) => {
      document.body.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowLeft' || e.key === 'h') send('slides:left', done)
        if (e.key === 'ArrowRight' || e.key === 'l') send('slides:right', done)
      })
    }
  }
})

app.router(slides.map((slide, i) => {
  var index = (!i) ? '/' : 'slide-' + i
  return [index, wrap(slide)]

  function wrap (slide) {
    return function () {
      // we gotta deep clone nodes or else vdom mutation
      // comes to ruin the party
      return html`
        <body
          style="height: 100vh;"
          class=${prefix + ' flex justify-center items-center tc'}>
          ${slide.cloneNode(true)}
        </body>
      `
    }
  }
}))

mount('body', app.start())

function toHtml (str) {
  var el = html`<div></div>`
  el.innerHTML = str
  return el.childNodes[0]
}

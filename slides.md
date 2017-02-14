```
┌─────────────────────────┐
│                         │██
│        P A R T          │██
│           I             │██
│                         │██
│       FRAMEWORKS        │██
│                         │██
└─────────────────────────┘██
  ███████████████████████████
```

---
## ✨✨✨✨✨✨✨✨✨✨✨✨✨
Sooooooooo I built a framework...

---
## So what's a framework anyway?
```
┌─────────────────────────┐
│                         │██
│    Frameworks are a     │██
│    big ball of glue,    │██
│    libraries &          │██
│    opinions             │██
│                         │██
└─────────────────────────┘██
  ███████████████████████████
```

---
## What's a framework good for?

[ Ad lib ]

---
## So what's this choo thing
- routing
- components
- structure for logic
- 5kb-ish

---
```
┌─────────────────────────┐
│                         │██
│        P A R T          │██
│           II            │██
│                         │██
│       COMPONENTS        │██
│                         │██
└─────────────────────────┘██
  ███████████████████████████
```

---
## So what's an element anyway
```html
<button class="my-button">
  Click me!
</button>
```
```css
.my-button { background-color: blue }
```

---
## Directory layout
```txt
my-project/
  html/
    my-button.html
  css/
    my-button.css
```

---
## Directory layout

E.g. about 3+ files per component

---
## Component directories
```txt
my-project/
  elements/
    my-button.js
```

---
## Components
```js
var css = require('sheetify')
var html = require('bel')

css`.my-button { background-color: blue }
html`<button class="my-button">Click me</button>`
```

---
## Why JS?

- super flexible
- lots of tools top optimize
- lowest level abstraction

---
## Ok, breaking it down
```js
// I M P O R T S
var css = require('sheetify')
var html = require('bel')
```

---
## Ok, breaking it down
```js
// H T M L
html`<button class="my-button">Click me</button>`
```

---
## Ok, breaking it down
```js
// C S S
css`.my-button { background-color: blue }
```

----
## D E M O
[ code, yosh, code ]

---
## Making it interactive
```js
html`
  <button onclick=${onclick}>
    Click me
  </button>
`

function onclick () {
  console.log('click it')
}
```

----
## D E M O
[ code, yosh, code ]

---
```
┌─────────────────────────┐
│                         │██
│        P A R T          │██
│           II            │██
│                         │██
│        TOOL_ING         │██
│                         │██
└─────────────────────────┘██
  ███████████████████████████
```

---

## Sheetify
- import CSS from npm
- never use BEM ever again
- import CSS from files
- run transforms

----
## Base-elements
- grab elements from npm
- yay

---
## Bankai
- full blown server
- production && development
- includes sheetify
- does JS, HTML & assets too!

---
## Nanocomponent
- lifecycles
- caching
- works in any framework

---
## Thanks!

- twitter.com/yoshuawuyts
- github.com/yoshuawuyts

Slides available on:
- https://github.com/yoshuawuyts/choo-for-designers-talk

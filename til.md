# Today I Learned

## 2017-04-20
- Rebuild native modules (e.g. `npm rebuild node-sass`) in DeployBot build scripts for when they update node versions in their build images

## 2017-04-19
- http://wiki.flightgear.org/Virtual_airlines

## 2017-04-18
- https://en.wikipedia.org/wiki/Greenfield_project - lacks constraints imposed by prior work

## 2017-04-06
- https://github.com/bugsnag/chromatic-sass - Better looking gradients

## 2017-04-03
- Writing seeds is a good way to get familiar with db structure

## 2017-04-01
- https://cloud.google.com/shell/ - Free shell with $HOME persisted for up to 5GB

## 2017-03-30
- https://redis.io/commands#geo - Redis has geospatial commands

## 2017-03-29
- https://packetmozart.com/ - Make Wi-Fi traffic visible and use your Mac as a home security system.
- https://pymotw.com/3/textwrap/ - textwrap
- https://fly.io/ - Load balancing service

## 2017-03-28
- https://en.wikipedia.org/wiki/Sparse_image
- https://github.com/acg/timebox - Politely timebox unix programs
- https://endcrawl.com/ - A startup that does movie end credits

## 2016-10-06

- https://checkout.stripe.com/v3/data/zipCodes/PH.json?crossDomain=true - Get city, state & zip pairings from Stripe

## 2016-02-10

### Safari inputs break when user selection is disabled

Don't do `* { -webkit-user-select: none }` unless you want to break your inputs in Safari.

## 2015-11-23

### Turn a Python module into anything

```python
import sys
sys.modules[__name__] = ANYTHING
```

_**Caveat**: Django's dev server requires `sys.modules` entries to be hashable._

## 2015-10-16

### Typekit Synced Fonts Location

#### Windows

`%APPDATA%\Adobe\CoreSync\plugins\livetype\r`

#### OSX

`~/Library/Application Support/Adobe/CoreSync/plugins/livetype/.r`

http://stackoverflow.com/questions/19257422/where-does-adobe-cc-store-typekit-files-locally

## 2015-09-07

### You can get an `<input/>`'s form in its attributes

```html
<form id="what-the"><input /></form>
```

```js
var input = document.querySelector('input');
input.form
// <form id="what-the">...</form>
```

## 2015-09-06

### Export `.env` files

```bash
export $(cat .env | xargs)
```

## 2015-07-12

### Split browserify bundles into multiple files

Taken directly from https://github.com/substack/factor-bundle:

x.js:

``` js
var z = require('./z.js');
var w = require('./w.js');
console.log(z(5) * w(2));
```

y.js:

``` js
var z = require('./z.js');
console.log(z(2) + 111);
```

z.js:

``` js
module.exports = function (n) { return n * 111 }
```

w.js:

``` js
module.exports = function (n) { return n * 50 }
```

Now run factor-bundle as a plugin (new in browserify 3.28.0):

``` sh
browserify x.js y.js -p [ factor-bundle -o bundle/x.js -o bundle/y.js ] \
  -o bundle/common.js
```

## 2015-06-20

### `sort` can compare human readable numbers (e.g., 2K 1G)

```bash
du -h -d 1 | sort -h
8.0K    ./.asciinema
12K     ./.divshot
32K     ./.config
160K    ./.gem
168K    ./.ssh
288K    ./.docker
4.4M    ./.oh-my-zsh
24M     ./.node-gyp
32M     ./.nvm
76M     ./.cache
103M    ./go
125M    ./.virtualenvs
173M    ./.npm
179M    ./.local
241M    ./.rbenv
396M    ./Dotfiles
4.9G    ./Projects
```

## 2015-05-28

### Replaced elements can't have `:before` or `:after` pseudo classes

Example of [replaced elements](https://developer.mozilla.org/en-US/docs/Web/CSS/Replaced_element)
are `img`, `object`, `video` and `input`. Their [specification](http://www.w3.org/TR/CSS21/generate.html#before-after-content)
doesn't fully define the interaction of `:before` and `:after`.

## 2015-05-19

### Flask reloader screws up module loading

#### Doesn't work

```python
# package/runserver.py
from .app import app
app.run(debug=True)
```

#### Works

```python
# runserver.py
from package import app
app.run(debug=True)
```

## 2015-05-13

### Javascript string replace only replaces first occurence

```js
"BAllS".replace('l', 'L')
// "BALlS"
"BAllS".replace(/l/g, 'L')
// "BALLS"
```

## 2015-04-29

### Prevent react-select from clearing its value on state change using LinkedStateMixin

```js
render() {
  let something = this.linkState('something')
  return (
    <Select
      value={something.value || null}
      onChange={something.requestChange}
    />
  )
}
```

## 2015-04-28

### Django template markdown filter using mistune

```python
import mistune
from django import template

register = template.Library()


@register.filter(name='markdown', is_safe=True)
def markdown(value):
    return mistune.markdown(value)
```

## 2015-04-09

### The word: dregs

/dreɡz/

_noun_

> the remnants of a liquid left in a container, together with any sediment or grounds.

_"coffee dregs"_

synonyms:	sediment, deposit, residue, accumulation, sludge, lees, grounds, remains; technicalresiduum

## 2015-03-21

### Deploy to DO with Docker's orchestration tools

1. Install tools

  ```bash
  # Docker
  brew install docker
  # Docker machine
  brew cask install docker-machine
  # Docker compose
  curl -L https://github.com/docker/compose/releases/download/1.1.0/docker-compose-`uname -s`-`uname -m` > /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose
  ```

1. Create machine

  ```bash
  docker-machine --driver digitalocean \
    --digitalocean-image docker \
    --digitalocean-size 1gb \
    --digitalocean-region sgp1 \
    --digitalocean-access-token ACCESS_TOKEN
  ```

2. Build images

  ```bash
  docker-compose build
  ```

3. Start containers

  ```bash
  docker-compose up -d
  ```

## 2015-03-13

### Wrap selected text in Vim

In visual mode: `gq`

## 2015-03-10

### Sphinx in GitHub Pages

I wanted to use [Sphinx](http://sphinx-doc.org/) for this year's
[PyCon PH website](https://github.com/pythonph/pycon-2015).
Last year, I used [Pelican](http://blog.getpelican.com/) and
[auto-deployed](http://blog.marksteve.com/push-to-deploy-static-sites-with-pelican-flask-and-github)
the pages using GitHub's webhooks and a simple [Flask](http://flask.pocoo.org) app.
But now I know a [neat trick](#2015-02-26) to extract parts of a repo into
another branch (or repo). I used that to deploy Sphinx built html in GitHub Pages:

1. Setup `html_extra_path` in your `conf.py`. Make sure you have a `.nojekyll` file in your html build root. Sphinx puts your static files inside the `_static` folder w/c Jekyll ignores because of the `_` prefix.

  ```python
  html_extra_path = [
    'CNAME',
    '.nojekyll',
  ]
  ```

2. Add a `deploy` target in your `Makefile`.

  ```makefile
  deploy:
	  git subtree push --prefix=$(BUILDDIR)/html origin gh-pages
  ```

Now you just need to run `make deploy` and your built html
files will be pushed to the `gh-pages` branch.

## 2015-03-06

### Trim images using ImageMagick

```bash
convert image.png -trim trimmed-image.png
```

### Archive repos using `git subtree`

We had old repos in our PythonPH GitHub organization that I wanted to archive.
I wanted to put everything in one repo while retaining their histories.
How do we do this? Using `git subtree`!

```bash
git subtree add --prefix=repo https://github.com/pythonph/repo master
```

This command pulls from the remote repo `pythonph/repo` and adds its tree
to the current repo under the prefix `repo`.

Here's the actual archive repo: https://github.com/pythonph/archive

## 2015-02-26

### Extract a part of a Git repo and push it to another repo

```bash
git subtree push --prefix=docs origin gh-pages
```

## 2015-02-24

### How to eat Tim Tam the Aussie way

1. Take a **small** bite at one corner of the Tim Tam
2. Take another bite on the opposite end

  <img src="https://i.imgur.com/V5q0t7j.png" width="135">

3. Use the Tim Tam as straw to sip hot milk

  <img src="https://i.imgur.com/pRKg9zf.png" width="146">

4. As soon as you get milk, put **whole** Tim Tam inside your mouth
5. Profit

## 2015-02-20

### The `months` argument in Javascript's `Date` constructor is zero-based

In Javascript, the `Date` constructor takes in months starting from `0`:

```javascript
> new Date(2015, 2, 20)
Fri Mar 20 2015 00:00:00 GMT+0800 (PHT)
```

`¯\_(ツ)_/¯`

## 2015-02-19

### Using dataset to pass values instead of binding them

#### Bind

```jsx
...
selectOption(option) {
  this.props.onChange(option)
},
render() {
  return (
    <ul>
      {this.props.options.map((option) => {
        return <li onClick={this.selectOption.bind(this, option.value)}>{option.text}</li>
      })}
    </ul>
  )
}
...
```

#### Dataset

```jsx
...
selectOption(e) {
  this.props.onChange(e.target.dataset.value)
},
render() {
  return (
    <ul>
      {this.props.options.map((option) => {
        return <li data-value={option.value} onClick={this.selectOption}>{option.text}</li>
      })}
    </ul>
  )
}
...
```


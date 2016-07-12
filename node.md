---
layout: page
title: Node.js
id: node
---

# {{ page.title }}

---

Some parts of **artoo.js**, such as its [scraping]({{ site.baseurl }}/scrape) utilities or [helpers]({{ site.baseurl }}/helpers), can be used within a Node.js environment if needed.

The library can therefore be used to parse XML and HTML in a very easy and maintanable way.

---

* [Installation](#installation)
* [Scraping with cheerio and artoo.js](#scraping)
* [Helpers](#helpers)
* [Paths](#paths)

---

<h2 id="installation">Installation</h2>

You can simply install the latest version of **artoo.js** with npm:

```bash
npm install artoo-js
```

Or if you need the latest development version:

```bash
npm install git+https://github.com/medialab/artoo.git
```

Then require it in any of your scripts likewise:

```js
var artoo = require('artoo-js');
```

---

<h2 id="scraping">Scraping with cheerio and artoo.js</h2>

When using **artoo.js** within node.js, the library will switch to [cheerio](https://github.com/cheeriojs/cheerio) instead of jQuery.

If you are not familiar with **artoo.js**' scraping utilities, you should go read the [quick start]({{ site.baseurl }}/quick_start) before continuing.

*Usage*

There are two ways of using scraping utilities along with cheerio

You can bootstrap your cheerio object so you can use the `$().scrape` shorthands.

```js
var artoo = require('artoo-js'),
    cheerio = require('cheerio');

// Bootstrapping cheerio
artoo.bootstrap(cheerio);

var $ = cheerio.load(myXMLString);

var data = $('ul > li').scrape(params);
```

Or else you can set artoo's own context to be a specific cheerio instance (a dollar variable typically). Please note that this is not ideal when dealing with asynchronous processes run in parallel.

```js
var artoo = require('artoo-js'),
    cheerio = require('cheerio');

var $ = cheerio.load(myXMLString);

// Setting artoo's context
artoo.setContext($);

var data = artoo.scrape('ul > li', params);
```

Note that you can also use `scrapeOne` and `scrapeTable`.

---

<h2 id="helpers">Helpers</h2>

Most of the library's [helpers]({{ site.baseurl }}/helpers), writers and parsers included, can be used within node.js.

*Example*

```js
var artoo = require('artoo-js');

var tabularData = [['John', 'Tell'], ['Mary', 'Proudlike']];

var csvString = artoo.writers.csv(tabularData);
```

---

<h2 id="paths">Paths</h2>

When **artoo.js** is built for npm, it bundles some other version of the library such as the one running with the [Chrome extension]({{ site.baseurl }}/chrome) and the Phantom.js one.

You can access their paths in node likewise if needed:

```js
var artoo = require('artoo-js');

artoo.paths.browser;
artoo.paths.chrome;
artoo.paths.phantom;
```
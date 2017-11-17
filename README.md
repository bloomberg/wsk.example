wsk.example
===========

> A sample starter project using [wsk](https://github.com/bloomberg/wsk). View at: https://bloomberg.github.io/wsk.example

## Table of contents

* [How to use](#how-to-use)
  - [Download](#download)
  - [With `degit`](#with-degit)
  - [With `git clone`](#with-git-clone)
* [What is this project?](#what-is-this-project)
  - [Project commands](#project-commands)
* [Tasks](#tasks)
* [Project commands](#project-commands)
  - [Main commands](#main-commands)
    - [dev](#editing-the-project)
    - [view](#viewing)
  - [Internal / other commands](#internal--other-commands)
    - [build](#building-files)
    - [build-view](#building-and-viewing)
* [File structure](#file-structure)
  - [Editing HTML](#editing-html)
    - [Template Helpers](#template-helpers)
    - [Hyperlink formatting](#hyperlink-formatting)
    - [ArchieML and templating](#archieml-and-templating)
    - [Child Templating](#child-templating)
  - [Editing CSS](#editing-css)
  - [Editing JavaScript](#editing-javascript)

## How to use

Use one of the methods below to use this repo as your project scaffold. When you have it downloaded, change your project template values in `config.json`. See [Project Commands](#project-commands) below to start the build.

### Download

You can download the latest version of master [here](https://github.com/bloomberg/wsk.example/archive/master.zip) or using the `Clone or download` button above. Rename the folder to what you want, `git init` and you're all set.

### With `degit`

If you're using Node 8 or higher, you can use [degit](https://github.com/Rich-Harris/degit).

```sh
# if you don't have it already, install degit globally
npm install -g degit

# creates a new folder `my-project-name` and initializes wsk.example into it
degit bloomberg/wsk.example my-project-name
```

### With `git clone`

```sh
# clone to your working directory
git clone --depth 1 https://github.com/bloomberg/wsk.example.git

# rename
mv wsk.example my-project-name

# Remove the git folder and start fresh
cd my-project-name
rm -rf .git && git init
```

## What is this project?

This repository contains the code used to generate the [documentation for wsk](http://github.com/bloomberg/wsk). It also serves as an example repository for how to build out a complete wsk project. It uses the following technologies

* [Underscore.js](https://underscorejs.org) for templating.
* [Rollup](https://rollupjs.org/) for JavaScript bundling.
* [Stylus](http://stylus-lang.com/) for CSS.
* [fs-extra](https://github.com/jprichardson/node-fs-extra) and Node's built-in `fs` for handling static files.

## Tasks

Each of the tasks in `build/tasks/` has a `README.md` that explains its files and logic. They aim to be as consistent as possible according to the wsk architecture [described in the wsk `README.md`](http://bloomberg.github.io/wsk.docs#architecture) while accommodating the quirks of target libraries.

## Project commands

All of the commands to develop, build and preview this project are accessible via [npm script commands](https://github.com/mhkeller/npm-things/blob/master/docs/2-run-commands.md). As shown below, run each of these with `npm run <command-name>`.

The commands listed below will be your go-tos but there others that are used mostly internally. For a full list of possible commands, look at the `scripts` section of [`package.json`](package.json).

* [Main commands](#main-commands)
  * [dev](#editing-the-project)
  * [view](#viewing)
* [Internal / other commands](#internal--other-commands)
  * [build](#building-files)
  * [build-view](#building-and-viewing)

### Main commands

---

#### Editing the project

```shell
npm run dev
```

**What does it do?**: If you're editing a project it handles all the file building and browser live-reloading for you. So if you have it running while working on a project, it compiles your Stylus files (images, csvs, etc.) and refreshes your browser for you. It's like a big comfy chair that takes care of everything as long as it's running.

1. It compiles your `src/` files into the `public/` folder.
  * Stylus and JavaScript files are packaged into their corresponding bundles
  * Static files such as csvs and images are simply copied over to their corresponding folders in `public/`
2. It launches a live-reload server at <http://localhost:8000>.
3. It watches your files in [`src/`](src) for changes and recompiles them when they do change.

**When do I use it?**: When you are editing this project and you want your changes to the JavaScript, HTML and Stylus files to automatically update in your browser. This is your go-to command for working on this project.

![npm run dev](files/readme-assets/npm-run-dev.gif)

---

### Viewing

```shell
npm run view
```

**What does it do?**: This command creates an http server at <http://localhost:8000>. If you modify any files in `public`, it will live reload.

**When do I use it?**: If you want to view the project without modifying any files such as if you are presenting it or opening up someone else's project and want to test it locally. Or, if you ran `npm run build` and you want to make sure project looks okay to publish.

![npm run view](files/readme-assets/npm-run-view.gif)

## Internal / other commands

---

### Building files

```shell
npm run build
```

**What does it do?**: This command will compile your `src/` files into `public/` folder and minify your CSS and JS. Unlike `npm run dev`, this does not watch files for changes and does not create a server.

**When do I use it?**: You don't need to call this directly because `npm run prelight` will call it automatically. If you are 3,000 percent sure your project is good to publish and you want to bypass `npm run preflight`, you can run this command to bundle and minify your files so they are ready to be published.

![npm run build](files/readme-assets/npm-run-build.gif)

---

### Building and viewing

```shell
npm run build-view
```

**What does it do?**: It's a simple combination of `npm run build` and `npm run view`. After your project builds, you can preview it.

**When do I use it?**: This is used internally after your project passes its preflight checks. You could also use it whenever you would otherwise want to use `npm run build` since it launches a preview server as soon as your project is done building, which is handy to make sure everything looks good.

![npm run build-view](files/readme-assets/npm-run-build-view.gif)

---

## File structure

> What files do I edit where?

With the exception of `config.json`, you'll only want to be editing files in `src/`. Any edits you make to files in `public/` will be overwritten the next time the project builds.

A new project file tree looks like this:

```
my-project
├─ files/ (ancillary project files are kept here, they are not part of the build process)
├─ build
│  ├─ tasks/
│  └─ other build files...
├─ src
│  ├─ data/
│  ├─ img/
│  ├─ css
│  │  ├─ modules/
│  │  ├─ thirdparty/
│  │  └─ styles.styl
│  ├─ js
│  │  ├─ modules/
│  │  ├─ thirdparty/
│  │  └─ main.js
│  └─ html
│     ├─ story-copy.aml
│     └─ index
│        ├─ body.partial.html
│        ├─ index.partial.html
│        └─ metatags.partial.html
├─ public
│  ├─ index.html
│  ├─ css
│  │  ├─ thirdparty/
│  │  └─ styles.css
│  ├─ data
│  ├─ img
│  └─ js
│     ├─ thirdparty/
│     └─ main.pkgd.js
├─ config.json
└─ package.json
```

---

#### Editing HTML

> tl;dr The main HTML file you want to edit is `src/html/body.partial.html`. The template values are stored in `config.json`.

The task files live at [build/tasks/html](build/tasks/html).

Project HTML is stored in the `src/html/<html file name>/` folder as separate HTML partial files. It uses [Underscore](https://underscorejs.org) templates with a slightly modified syntax that uses hard brackets instead of `%` (see examples below) so that build step templates won't conflict with client side templates.

* Normal: `<%= title %>` becomes `<[= title ]>`
* Escaped: `<%- title %>` becomes `<[- title ]>`
* No return: `<% var foo = 'title' %>` becomes `<[ var foo = 'title' ]>`

When the build step runs, an HTML file is created in `public/` for every folder in `src/html/`. For example, the partial HTML files in `src/html/index/` will come together to create `public/html/index.html`. For arbitrarily-named HTML folders, it will create a folder. For example, if we had `src/html/embed/`, that would create `public/html/embed/index.html`. The HTML build task has a `simpleHtml` option, which would create a top-level HTML file such as `public/html/embed.html`.

These are the starter files and what they do.

```
src
└─ html
   ├─ story-copy.aml
   └─ index
      ├─ body.partial.html (your project markup)
      ├─ index.partial.html (a file that orchestrates all the others)
      └─ metatags.partial.html (your project metatags, values come from config.json)
```

You'll notice that in places like the page title, you have template brackets like so:

```html
<title><[- hed ]></title>
```

These HTML templates inherit their values from `config.json`. So modify these values in that file to change them on the page.

##### Template helpers

Sometimes you might want to run your text through a formatting function. The `build/template-helpers.js` file lets you easily add functions which you then have access to in your templates under the `h` namespace.

If you want to add your own function, do it like so:

```js
// template-helpers.js

// This will get rid of the letter `e` in a string:
exports.banishAllEs = function banishAllEs (str) {
  return str.replace(/e/ig, '')
};
```

```html
<title><[- h.banishAllEs(hed) ]></title>
```

###### Hyperlink formatting

Temaplate helpers includes a formatter to turn the following formatted links into hyperlinks:

```md
[The text to hyperlink](http://example.com)
```

Becomes:

```html
<a href="http://example.com" target="_blank" rel="noopener">The text to hyperlink</a>
```

Use it in your copy with `<[= h.formatLinks(myText) ]>`.

##### ArchieML and templating

Each new project comes with a `src/html/story-copy.aml` file. This is where you should store your story copy. The file format [is ArchieML](http://archieml.org).

The values in `src/html/story-copy.aml` should be loaded into your project via `config.json` such as:

```
"storyCopy": "<[= h.import('src/html/story-copy.aml') ]>"
```

With this line, your aml file is converted to JSON and its values are now accessible in your html templates via the `storyCopy` variable like so:

```html
<[= storyCopy.my_paragraph ]>
```

The `h.import` function is a wrapper around Indian Ocean's [`readDataSync`](http://mhkeller.github.io/indian-ocean/#readDataSync) (so you can read in many file formats) and the `prettyCopy` function in `build/template-helpers.js`. If you want

How you structure your story copy is up to you. The default project comes with an multiline string like so:

```
intro:

paragraph number one
paragraph number two

:end
```

You could access this multiline string in your template like so:

```html
<[ storyCopy.intro.split(/\n+/).forEach(function (graf) { ]>
  <p><[= graf ]></p>
<[= }) ]>
```

**Hint:** There's a template helper that simplifies this for you:

```js
// template-helpers.js
exports.printGrafs = function printGrafs (str) {
  return str.split(/\n+/)
    .filter(d => d.trim())
    .map(d => `<p>${d}</p>`)
    .join('');
};
```

And use it like so

```html
<[= h.printGrafs(storyCopy.intro) ]>
```

Outputs:

```html
<p>paragraph number one</p>
<p>paragraph number two</p>
```

##### Child Templating

You can import partials using the `h.readTemplate` helper. This also uses Indian Ocean's [`readDataSync`](http://mhkeller.github.io/indian-ocean/#readDataSync) so it can read multiple file formats. Here's an example:

```html
<!-- body.partial.html -->
<p>Here is some text</p>
<[= h.readTemplate('src/html/_partials/my-page.partial.html', {customObject: {data: 'Other data'}}) ]>
```

```html
<!-- my-page.partial.html -->
<!-- child templates have access to the same variable namespace as top-level templates -->
<[= storyCopy.intro ]>
<!-- And also get any object optionally passed in as the second argument -->
<[= customObject.data ]>
```

---

#### Editing CSS

> tl;dr The main Stylus file to edit is `src/css/styles.styl`. If you like making smaller Stylus files, put them in `src/css/modules/` and use `@include 'path-to-module.styl'` syntax in `styles.styl`.
 If you want to include some Vanilla CSS files, put them in `src/css/thirdparty/` and add `<link>` tag to the bottom of `src/html/<html file name>/metatags.partial.html`.

The task files live at [build/tasks/stylus](build/tasks/stylus).

These are the starter files and folders for editing CSS:

```
src
└─ css
   ├─ modules/ (add stylus modules here)
   ├─ thirdparty/ (add vanilla css files here, manually add them to your html)
   └─ styles.styl
```

It gets compiled to:

```
public
└─ css
   ├─ thirdparty/
   └─ styles.css
```

---

#### Editing JavaScript

> tl;dr The main JS file to edit is `src/js/main.js`. If you like making smaller JS files that can be rolled up, put them in `src/js/modules/` and use `import myModule from './modules/myModule'` syntax in your `main.js`. If you want to include some normal JS libraries, put them in `src/js/thirdparty/` and add `<script>` tag to the bottom of `src/html/<html file name>/body.partial.html` before the line that loads `main.pkgd.js`.

The task files live at [build/tasks/rollup](build/tasks/rollup).

These are the starter files and folders for editing JavaScript:

```
src
└─ js
   ├─ modules/ (add browserify modules here and require them in your script)
   ├─ thirdparty/ (add normal js libs here, manually add them to your html)
   └─ main.js
```

They get compiled to:

```
public
└─ js
   ├─ thirdparty/
   └─ main.pkgd.js
```

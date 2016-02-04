## Overview

 Hugo Skeleton is a supersimple theme for rapid website development with [Hugo](https://github.com/spf13/hugo), [SASS](http://sass-lang.com/) and [gulp](https://github.com/gulpjs/gulp).

 Look how easy it is to use:

 `$ gulp`

## Features
- Layout templates based on [HTML5 Boilerplate](https://github.com/h5bp/html5-boilerplate).
- Simple gulp workflow:
  - SASS Transpiler, Autoprefixer and Minifier.
  - JS Linter and Minifier.
  - Watch by default
- Boilerplate for SASS code organization inspired by the [Sass Guidelines project](http://sass-guidelin.es/#architecture).
- No over-engineering.

## Who should use it
 - You want to quickly create websites or prototypes.
 - You think Hugo is really good at generating static sites but lacks an asset pipeline.
 - You are comfortable with Gulp as a task runner but don't want to spend too much time configuring it.
 - You favor SASS over another transpiler to generate CSS. You also understand the importance of proper SCSS organization.

## Installation
Please make sure that you have `npm` [installed](https://nodejs.org/en/download/) and [updated](https://docs.npmjs.com/getting-started/installing-node).

1. Use the [installation instructions in the Hugo documentation to install Hugo.](http://gohugo.io/overview/installing/)
2. Clone this project into your `themes/` directory.
3. `cd` into `themes/hugo-skeleton` and run `npm install`.
4. Optional: Add `theme = "hugo-skeleton"` to your config.toml, so you don't have to pass the theme name as a command line argument.

## Running
Instructions are based on a standard Hugo installation.

1. Run `hugo server --verbose`. Verbose flag is highly recommended for debugging purposes.
2. Run `gulp`.
3. Enjoy.

## Project structure
The project follows the structure when [creating a new Hugo theme](http://gohugo.io/tutorials/creating-a-new-theme/). You should be familiar with the files when you finished the (excellent) tutorial. Additionally there is a `src` folder which contains all the JS and SCSS source files and some configuration files.

```
├── ...   
├── layouts/          # Layout files based on HTML5 Boilerplate
├── src/              # JS and CSS source...
├── static/           # ... gets compiled into static
├── ...    
├── gulpfile.js       # Gulp Config
└── ...
```

## License
The MIT License (MIT)

Copyright (c) 2016 Savio van Hoi

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Credits
Thanks to all the hard working and smart people out there who constantly push the edge of technology.

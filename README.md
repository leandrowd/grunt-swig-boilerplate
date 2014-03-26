# Grunt Swig Boilerplate

This project is a **boilerplate (skeleton)** for a backend agnostic website. You can use it with any backend language you want (minor changes can be needed).

We are using [grunt](http://gruntjs.com/) as a builder, so you don't need to worry with other software to compile/compress/pre-process your assets.

Grunt will perform almost every task need to build and optimize your website.

# Attention

- All the templates at `/src` and `/www` folders are automatically generated. To change their content go to /swig folder. (Swig engine will be installed when you do `npm install`).

## Dependencies

This project depends on [Node.js](http://nodejs.org/), [Grunt](http://gruntjs.com/) and [Bower](http://bower.io/).

Follow this steps to install these dependencies in an osX environment:

- `brew install node`
- `npm install -g grunt-cli bower`

## How to install

- `git clone git@github.com:leandrowd/grunt-swig-boilerplate.git`

## How to run

- Open the project folder
- `npm install`
- `bower install`
- `grunt`

## To install a new dependency:
- `bower install <dependency-name>` or
- `bower install <github-user>/<repo-name>#<tag-version>`
- open the `/assets/js/config.js`
- include the new dependency on the require configs

# Environments

## Development mode

Just enter `grunt` on the terminal and your environment will be ready to work.

#### Script description:
- Static site server: `http://localhost:8000`
- Livereload watching for changes on html, css and js files
- Swig compiler
- Sass compiler
- Js Hint (Validator)

## Production environment - How to deploy

Open the terminal and enter `grunt build`

- copy the content on `www` and do the upload on your server
- done!

#### Script description:
- Static site server: `http://localhost:9000`
- Swig compiler
- Sass compiler and compress
- Js hint, compiler, compress and uglify
- Image optimization
- Folders copy

## Files
- `src` (development mode)
 - `assets`
   - `css` - Compiled css files
   - `fonts` - Font files
   - `img` - Image files
   - `js` - Javascript files
   - `scss` - Sass / Compass files
- `swig` (development mode)
  - `base` - dependencies of the main layout / configs
  - `layouts` - layouts
  - `macros` - macros
  - `modules` - all your modules

- `.bowerrc` - Bower configs
- `.editorconfig` - Automatic config for your editor (I strongly recommend sublime or atom)
- `.gitignore` - Basic git ignore setup
- `.jshintrc` - Js hint setup
- `Gruntfile.js` - Scripts and tasks for run and compile the website
- `bower.json` - Bower Dependencies
- `package.json` - Npm Dependencies

## TODO:

- Create upload task;

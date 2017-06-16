# Structure

## /assets/less

This folder contains all SASS files and is compiled with the gulp sass task,
which puts the output CSS into `/public/css`

## /assets/raster

All raster images. Will be symlinked into `/public/img`.

## /assets/svg

All SVG images. Will be symlinked into `/public/img` in development ENV,
and minified to the same location in production ENV.

## /assets/static

This contains all static content. All files in here are symlinked into
`/public`, while retaining its relative path. IE `/static/fonts/font.otf` gets
symlinked to `/public/fonts/font.otf`.

The only special files are robots.txt. In all ENV besides production
`robots.txt` will be symlinked, in production environment
`robots-production.txt` will be used instead.

## /client

This contains all isomorphic and pure browser JavaScript for the admin
dashboard. Currently coded using ridge.

The Gulp Rollup task bundles these files (entry point is `app.js`) and outputs
`public/app.js`.

## /gulpfile.js

Runs the code in `/gulp`.

## /gulp

This contains ALL gulp logic. Is usually a git submodule tracking
<https://github.com/thebitmill/gulp.git>.

## /public

This directory is maintained by gulp. All assets get symlinked in here,
and any built code is also placed here.

This folder should not be edited directly, or commited to git. It is
removed everytime gulp initializes.

## /server

This directory contains all JavaScript that only has to do with running your
server instance.

## /server/config

All configuration for the server. Most files export different options
depending on the environment. A file might look like this:

```js
module.exports = {
  development: {},
  testing: {},
  staging: {},
  production: {}
}[process.env.NODE_ENV];
```

If you want defaults applied, you might do something like this:

```js
const defaults = {}

module.exports = Object.assign({}, defaults, {
  production: {}
}[process.env.NODE_ENV]);
```

In which case defaults will be used for all environments except
`production`, in which the production settings will override
any settings in defaults.

If you don't want to override, do this instead:

```js
const defaults = {}

module.exports = {
  production: {}
}[process.env.NODE_ENV] || defaults);
```

## /server/middleware

Generic middleware that do not belong to a specific service.

Should export a single middleware function, or a namespaced object of
functions.

## /server/services

Instead of splitting models, middlewares and routers into three seperate
folders, we create service directories that contain files relating
to the same functionality.

## /server/templates

Functions that return html strings. Need to be requirable.

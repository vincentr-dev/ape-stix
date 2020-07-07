# ape-stix

A fire starter for front-end development.

Uses webpack to bundle resources using webpack available loader. Default setup includes: 

* ts-loader
* sass-loader
* file-loader (for loading static resources; i.e. png|svg|jpg|gif)


## requirements

* Node.js v10+


## get started

* Install

* Build Files for Distribution

        #production
        npm run build -- --mode production

        # development
        npm run build -- --mode development

* Getting ready for Development

    You cans execute a watcher to monitor file changes as you code, with:

        # executes webpack in watch mode
        npm run watch --mode develop

    OR, you can run a separate Express server along-side the *watcher* service to preview your changes with hot-reload.

        # run webpack in watch mode, and Express concurrently
        npm start


### tips

* install bundles to be packaged for production with `--save`
* for bundles used during development (i.e. linters, test frameworks, libraries), use `--save-dev`
* for development, enable sourcemap by adding `sourceMap: true`
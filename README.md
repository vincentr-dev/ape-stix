# ape

webpack bolier-plate with typescript

## requirements

* Node.js v10+


## getting started

* setup typescript with `tsconfig.json`
    * enable sourcemap by adding `sourceMap: true`

### build

    # production
    npm run build -- --mode production

    # development
    npm run build -- --mode development

## start server (for development)

    npm run server

## tips

* install bundles to be packaged for production with `--save`
* for bundles used using development (i.e. linters, test frameworks, libraries), use `--save-dev`
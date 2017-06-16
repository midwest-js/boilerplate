# Bitmill Boiler Plate

## Set up

1. `$ git clone git@github.com:thebitmill/bp.git project-name && cd project-name`
2. `$ git submodule init`
3. `$ git submodule update`
4. Update config
  1. `$ ag change-this` or `grep -r change-this`
  2. Change all results
5. `$ npm install`
6. `$ npm run gulp`

### Make it your own

1. `$ rm -rf .git`
2. `$ git init`
3. `$ git add -A`
4. `$ git commit -m "Initial commit"`

1. [Structure](./doc/structure.md)
2. [Routes](./doc/routes.md)
3. [Developing](./doc/developing.md)
4. [Testing](./doc/testing.md)
5. [Deploying](./doc/deploying.md)

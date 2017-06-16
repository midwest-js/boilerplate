# Developing

1. `$ git clone [change-this-fool]`
2. `$ git submodule init`
3. `$ git submodule update`
4. `$ npm install`
5. `$ npm run gulp`

Navigate to localhost:1337 (Node app runs on the port given in
`server/config/port`, but Gulp starts a
[BrowserSync](https://github.com/BrowserSync/browser-sync) proxy that reloads
your browser automatically when you change certain files).

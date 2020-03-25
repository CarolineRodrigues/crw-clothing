This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify


### Advanced Configuration
You can adjust various development and production settings by setting environment variables in your shell or with .env.

Note: You do not need to declare REACT_APP_ before the below variables as you would with custom environment variables.

Variable	Development	Production	Usage
BROWSER	✅ Used	🚫 Ignored	By default, Create React App will open the default system browser, favoring Chrome on macOS. Specify a browser to override this behavior, or set it to none to disable it completely. If you need to customize the way the browser is launched, you can specify a node script instead. Any arguments passed to npm start will also be passed to this script, and the url where your app is served will be the last argument. Your script's file name must have the .js extension.
BROWSER_ARGS	✅ Used	🚫 Ignored	When the BROWSER environment variable is specified, any arguments that you set to this environment variable will be passed to the browser instance. Multiple arguments are supported as a space separated list. By default, no arguments are passed through to browsers.
HOST	✅ Used	🚫 Ignored	By default, the development web server binds to all hostnames on the device (localhost, LAN network address, etc.). You may use this variable to specify a different host.
PORT	✅ Used	🚫 Ignored	By default, the development web server will attempt to listen on port 3000 or prompt you to attempt the next available port. You may use this variable to specify a different port.
HTTPS	✅ Used	🚫 Ignored	When set to true, Create React App will run the development server in https mode.
WDS_SOCKET_HOST	✅ Used	🚫 Ignored	When set, Create React App will run the development server with a custom websocket hostname for hot module reloading. Normally, webpack-dev-server defaults to window.location.hostname for the SockJS hostname. You may use this variable to start local development on more than one Create React App project at a time. See webpack-dev-server documentation for more details.
WDS_SOCKET_PATH	✅ Used	🚫 Ignored	When set, Create React App will run the development server with a custom websocket path for hot module reloading. Normally, webpack-dev-server defaults to /sockjs-node for the SockJS pathname. You may use this variable to start local development on more than one Create React App project at a time. See webpack-dev-server documentation for more details.
WDS_SOCKET_PORT	✅ Used	🚫 Ignored	When set, Create React App will run the development server with a custom websocket port for hot module reloading. Normally, webpack-dev-server defaults to window.location.port for the SockJS port. You may use this variable to start local development on more than one Create React App project at a time. See webpack-dev-server documentation for more details.
PUBLIC_URL	✅ Used	✅ Used	Create React App assumes your application is hosted at the serving web server's root or a subpath as specified in package.json (homepage). Normally, Create React App ignores the hostname. You may use this variable to force assets to be referenced verbatim to the url you provide (hostname included). This may be particularly useful when using a CDN to host your application.
CI	✅ Used	✅ Used	When set to true, Create React App treats warnings as failures in the build. It also makes the test runner non-watching. Most CIs set this flag by default.
REACT_EDITOR	✅ Used	🚫 Ignored	When an app crashes in development, you will see an error overlay with clickable stack trace. When you click on it, Create React App will try to determine the editor you are using based on currently running processes, and open the relevant source file. You can send a pull request to detect your editor of choice. Setting this environment variable overrides the automatic detection. If you do it, make sure your systems PATH environment variable points to your editor’s bin folder. You can also set it to none to disable it completely.
CHOKIDAR_USEPOLLING	✅ Used	🚫 Ignored	When set to true, the watcher runs in polling mode, as necessary inside a VM. Use this option if npm start isn't detecting changes.
GENERATE_SOURCEMAP	🚫 Ignored	✅ Used	When set to false, source maps are not generated for a production build. This solves out of memory (OOM) issues on some smaller machines.
NODE_PATH	✅ Used	✅ Used	Same as NODE_PATH in Node.js, but only relative folders are allowed. Can be handy for emulating a monorepo setup by setting NODE_PATH=src.
INLINE_RUNTIME_CHUNK	🚫 Ignored	✅ Used	By default, Create React App will embed the runtime script into index.html during the production build. When set to false, the script will not be embedded and will be imported as usual. This is normally required when dealing with CSP.
IMAGE_INLINE_SIZE_LIMIT	🚫 Ignored	✅ Used	By default, images smaller than 10,000 bytes are encoded as a data URI in base64 and inlined in the CSS or JS build artifact. Set this to control the size limit in bytes. Setting it to 0 will disable the inlining of images.
EXTEND_ESLINT	✅ Used	✅ Used	When set to true, ESLint configs that extend eslint-config-react-app will be used by eslint-loader. Any rules that are set to "error" will stop the application from building.
TSC_COMPILE_ON_ERROR	✅ Used	✅ Used	When set to true, you can run and properly build TypeScript projects even if there are TypeScript type check errors. These errors are printed as warnings in the terminal and/or browser console.
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Organization

The code for this app is organized into two sections:

In the 'server' folder, a server handling the serving of the app and an api route is written in javascript, using a node/express server. The data from this api call is cleaned using the npm package 'html-entities'

In the 'src' folder, the components are written in Typescript, which is compiled during the build. The css is also in this folder.

## Available Scripts

In the project directory, you can run:

### `npm start`

Builds the app for production, and then starts a server on port 8080 to serve the app.

### `npm run start-dev`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The proxy is set up to query a locally hosted node server at port 8080.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

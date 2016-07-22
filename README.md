# React Universal Starter Build

This is my attempt at reverse engineering: https://github.com/erikras/react-redux-universal-hot-example. Which was a really great example of how to do this and I very thankful for [@erikras](https://github.com/erikras) for making this.  

These are the changes I made so far:

* Replaced https://github.com/Rezonans/redux-async-connect with https://github.com/makeomatic/redux-connect
* Removed all the ApiClient stuff as well the clientMiddleware. (Want to try a different solution see: https://github.com/reactjs/redux/issues/99#issuecomment-128119382)
* Removed bootstrap. 
* Added thunk middleware to try handling async actions with thunks. (I want to move this example into saga eventually).
* Refactored the webpack configs to use a global shared file.
* Made a separate .babelrc (.babelrc.webpack.dev.server) file for the webpack-dev-server to include all the HMR stuff. Considering integrating directly into main server.
* Added envify to isomorphically use environment vars
* Reconfigured some folder structure to something I'm more comfortable with.
* Ditched all the react front end stuff. its just some crappy test dom and dumb gifs.
* Probably other stuff I forgot


This is still in development and should not be used by anyone for anything yet.
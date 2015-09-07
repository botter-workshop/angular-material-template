# Angular Material Template

This project provides a template for building an Angular Material app that is Web and Cordova ready. The build chain
is Grunt-based and facilitates building for both the Web and supported Cordova platforms.

One of the goals of this project is to provide a well defined means of organizing an Angular Material app so that 
it is scalable and manageable.

## Getting Started
To get started all you need to do is to run the following:

1. `git clone https://github.com/botter-workshop/angular-material-template.git`
2. `cd angular-material-template`
3. `npm install && bower install`
4. `grunt serve`
5. Open a web browser and point it to `http://localhost:8080`.

## Building for the Web
When you're ready to deploy your build the production files by running the default task:

`grunt`

Production files are placed in the `dist/` folder. To test
the production files you can run:

`grunt serve:dist`

## Building for Cordova
For Cordova use this project supports the following the platforms (although it may work on others that aren't listed).

* iOS 8+
* Android 4+ (Using Crosswalk)

Make sure you install the appropriate SDK for your target platforms before attempting to build.

In the following commands replace **platform** with either **ios** or **android**.

To build the app:

`grunt cordova:build:platform`

To emulate the app:

`grunt cordova:emulate:platform`

To run the app:

`grunt cordova:run:platform`

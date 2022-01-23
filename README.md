# Web Server

Created a Web server that handles requests from client side. 

## Description

This simple application is created using node js. It comprises of backend code which handles http requests coming from the client. The client Side is created using handlebars which renders dynamic html page back to the client, corresponding to the route triggered from the client. As a whole, the application function is to retrieve the weather of a particular Region as typed on the "/weather"  route. TThis is enabled with the help of 3rd party APIs: to mention Map box Api that maps a region's name to geographical coordinates. The coordinates are then passed to geolocation API that retrieves the weather information of the specified region coordinates. Hence higher accuracy. 

## Getting Started

### Dependencies

* Generally You will need a Browser E.G chrome browser to render visually.
* You need to have nodejs installed on your machine. 
* To download the project, you will need to have git Installed on your local computer.
```
git clone https://github.com/hane-smitter/node-weather-website
```

### Installing

* You can go to https://github.com/hane-smitter/node-weather-website and download this project as A zip. If you have git installed on your machine, you can Install It using the git commands:
```
git clone https://github.com/hane-smitter/node-weather-website
```
* Before running the project you may want to consider having an active internet connection. 

### Executing program

* Sign up with mapbox and geolocation from their website to get an api key that will allow you to access their services. 
* Add these API keys to your project. Map box API key goes to src/utils/forecast.js and geolocation API key goes to src/utils/geolocation.js
* Open terminal at the project root and run 
```
npm start
```
* Wait for the project to build successfully  and then head to the browser at "localhost:3000"

## Authors

Written and engineered by [Zacky](https://lookupzach.netlify.app)

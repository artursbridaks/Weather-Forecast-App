![cloud-logo-min](https://user-images.githubusercontent.com/48471924/89308421-e8e69080-d67a-11ea-8190-d66723906947.png "weather forecast cloud logo")


# 5-Day Weather Forecast App

A simple app which displays 5-day weather forecast using the OpenWeatherMap API. Built using React.

## Visual representation

![weather-edit](https://user-images.githubusercontent.com/48471924/89307711-11ba5600-d67a-11ea-8f5e-fd61cee30f03.gif)


## Run
Clone the project to your local machine and run:

```
npm i
```

## Start the server
```
npm start
```
## Build
If for some reason it doesn't work, run the following command:
```
npm run build
```
## Overview and improvements

- [x] Detect location automatically using geolocation (latitude, longitude)
- [x] If the user blocks the location, a default location is chosen (currently set to London)
- [x] If the user allows the location, it dynamically calculates the geolocation according to users real-life location.
- [x] Use real data from an OpenWeatherMap API 
- [x] Use a loading spinner icon on page load
- [x] Display forecasts every three hours
- [ ] Better overall quality of the code
- [ ] Better data extraction and more precise results
- [ ] Better UI
- [ ] Implement Redux
- [ ] Tests using Jest + Enzyme
- [!] The main issue - wasn't able to succesfully implement API iteration due to the lack of experience within React. Will work on it until I can do it.


## Notes

Since I'm relatively new at React, I ran into issues of keeping the code clear and well organised. Even though the app does work and it does show real data from an API, the code, in my opinion, turned out to be horrendous. Definitely needs a lot of improvement. Learned a lot during the process nevertheless.

### Tech Stack

* React.js
* JavaScript (ES6)
* HTML5
* SCSS
* React Bootstrap
* Axios


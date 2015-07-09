# JSON and AJAX

## Overview

* Introduction to JSON
* Introduction to AJAX
* AJAX with Spotify's Chart API
* Resources

## Introduction to JSON

JSON stands for JavaScript Object Notation and it has become the defacto standard for computer-to-computer communiation (APIs). Sites like Flickr, WeatherUnderground, and Spotify expose at least some of their data in a JSON format. 

Before we get our hands dirty, install the Chrome extension [JSONView](https://github.com/jamiew/jsonview-chrome) and then open this page using a Chrome browser. Now that you've installed the extention, which will just make JSON easier to read, take a look at OpenWeatherMap's data for the weather in New York today here:

[http://api.openweathermap.org/data/2.5/weather?q=New%20York,us](http://api.openweathermap.org/data/2.5/weather?q=New%20York,us)

The page you opened probably looks something like this:

```json
{  
   "coord":{  
      "lon":-74.01,
      "lat":40.71
   },
   "weather":[  
      {  
         "id":721,
         "main":"Haze",
         "description":"haze",
         "icon":"50d"
      }
   ],
   "id":5128581,
   "name":"New York",
   "cod":200,
   "etc.":"..."
}
```

Here's another example, it's Spotify's data for the most streamed songs in the US today:

[http://charts.spotify.com/api/tracks/most_streamed/us/daily/latest](http://charts.spotify.com/api/tracks/most_streamed/us/daily/latest)

This object that you see on the page linked above is a JSON object. The property `tracks` points to an array of popular songs. The first item in this array is the most streamed song on Spotify today. 

## Introduction to AJAX

[AJAX](http://stackoverflow.com/a/1510156/2890716) stands for Asynchronous Javascript And Xml. In a nutshell, it allows your browser to send and fetch information to and from APIs without a page refesh. Pretty much, AJAX makes it possible to update parts of a web page, without reloading the whole page.

How awesome is this? The awesomest! AJAX rules because page refeshes take a long time and users these days are impatient. Who wants to wait while a page loads, just to click a button that will load another page?!? Not me. 

## AJAX with Spotify's Chart API

The eventual goal of this section is for you to add the name of the most streamed song on Spotify to the end of this HTML page. To accomplish this goal, we'll break up the task into these five steps:

* Making an AJAX Request
* Processing the Request's Data
* Printing the Song Object to the Console
* Printing the Song Title to the Console
* Adding the Song Title to the DOM

#### Making an AJAX Request

The first step is to load the data []() here in our browser. To do this, we'll use jQuery's `ajax()` function:

```javascript
$.ajax(…) // we'll add code here later
```

The `ajax()` function accepts an object literal. This object is where you can specify the url, what kind of request you're making (post/get/patch/etc.), and what kind of datatype you want. While we do want JSON, we're going to specify JSONP. Don't worry too much about this for now, but if you insist on worrying about it, read [this](http://json-jsonp-tutorial.craic.com/index.html).

Okay, so this is what we have so far:

```javascript
$.ajax({
  "url":  "http://charts.spotify.com/api/tracks/most_streamed/us/daily/latest",
  "method": "GET",
  "dataType": "JSONP"
}) // we'll add code here in a second
```

#### Processing the Request's Data

The second step to making an AJAX "GET" request is to process the data the request returns when the request is successful. Let's chain a method onto the return value for this AJAX request. When the request is successful, we want to do some parsing of the data we get back, so we'll chain on the `.success()` function:

```javascript
$.ajax({
  "url":  "http://charts.spotify.com/api/tracks/most_streamed/us/daily/latest",
  "method": "GET",
  "dataType": "JSONP"
}).success(…);
```
The `success()` function takes one argument, a function. This function should also accept one argument, the name of the data that will get returned:

```javascript
$.ajax({
  "url":  "http://charts.spotify.com/api/tracks/most_streamed/us/daily/latest",
  "method": "GET",
  "dataType": "JSONP"
}).success(function(spotifyData) {
  // we'll code here in a second
});
```

#### Printing the Song Object to the Console

When the code block above runs, `spotifyData` will be that big JSON object you see when you visit the chart page (remember, it looks like [this](http://charts.spotify.com/api/tracks/most_streamed/us/daily/latest)). However, we don't want to log this huge amount of data. Let's just log the first track:

```javascript
$.ajax({
  "url":  "http://charts.spotify.com/api/tracks/most_streamed/us/daily/latest",
  "method": "GET",
  "dataType": "JSONP"
}).success(function(spotifyData) {
  var firstTrack = spotifyData.tracks[0];
  console.log(firstTrack);
});
```

In early July, 2015, this first track looks like this:

```javascript
{
  "track_name": "Love Me Like You Do",
  "artist": "Ellie Goulding",
  "album": "Fifty Shades of Grey",
  "etc": "Links to the song, album, and artwork also appear here"
{
```

#### Printing the Song Title to the Console

Since we don't want to print all the song's title, not its artist, album, etc. we can use dot notation:

```javascript
$.ajax({
  url:  "http://charts.spotify.com/api/tracks/most_streamed/us/daily/latest",
  method: "GET",
  dataType: "JSONP"
}).success(function(spotifyData) {
  var firstTrack = spotifyData.tracks[0];
  var songTitle = firstTrack.track_name;
  console.log(songTitle);
});
```

The first two lines of the `success()` function can be combined into one if you're into that sort of thing:

```javascript
$.ajax({
  url:  "http://charts.spotify.com/api/tracks/most_streamed/us/daily/latest",
  method: "GET",
  dataType: "JSONP"
}).success(function(spotifyData) {
  var songTitle = spotifyData.tracks[0].track_name;
  console.log(songTitle);
});
```

Back in early July 2015, this code logged the following to the console:

```shell
"Love Me Like You Do"
```

Unless Ellie Golding's track stays number one on Spotify for forever, this code should print a different song title for you.

#### Adding the Song Title to the DOM

Non-developers never open the console, or if they do it's by complete accident, so logging this song title to the console will be completely invisible to them. Let's change the `console.log()` function into a jQuery function that will add append text as an H2 to the DOM's `<body>` tag.

```javascript
$.ajax({
  url:  "http://charts.spotify.com/api/tracks/most_streamed/us/daily/latest",
  method: "GET",
  dataType: "JSONP"
}).success(function(spotifyData) {
  var songTitle = spotifyData.tracks[0].track_name;
  $("body").append("<h2> "+ songTitle + "</h2>")
});
```

Assuming the Spotify Chart API is functional, running the code above from your browser should add some content to the end of this page. Try it out for yourself! 

## Resources

* [Wikipedia - APIs](https://en.wikipedia.org/wiki/Application_programming_interface)
* [SquareSpace Docs - What is JSON?](http://developers.squarespace.com/what-is-json/)
* [Copter Labs - JSON: What It Is and How to Use It](http://www.copterlabs.com/blog/json-what-it-is-how-it-works-how-to-use-it/)
* [StackOverflow - How Does AJAX Work?](http://stackoverflow.com/questions/1510011/how-does-ajax-work)
* [jQuery Documentation](http://jquery.com/)

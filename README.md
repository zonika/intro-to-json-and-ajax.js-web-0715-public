---
tags: json, parse, parsing, jQuery
language: JavaScript, JS
resources: 4
---

# JSON

## Objectives

* Gain a working knowledge of JSON.
* Learn how to convert an object into JSON and back again.

## Overview

* Intro to JSON
* First Code Along - AJAX with Spotify's Chart API
* Parsing and Stringifying JSON
* Second Code Along - Stringifying/Parsing a Custom Object Literal
* Resources

## Introduction to JSON

JSON stands for JavaScript Object Notation and it has become the defacto standard for computer-to-computer communiation (APIs). Sites like Flickr, WeatherUnderground, and Spotify expose at least some of their data in a JSON format. 

Before we get our hands dirty, install the Chrome extension [JSONView](https://github.com/jamiew/jsonview-chrome) and then open this page using a Chrome browser. Now that you've installed the extention, which will just make JSON easier to read, take a look at OpenWeatherMap's data for the weather in New York today here:

[http://api.openweathermap.org/data/2.5/weather?q=New%20York,us](http://api.openweathermap.org/data/2.5/weather?q=New%20York,us)

Here's another example, it's Spotify's data for the most streamed songs in the US today:

[http://charts.spotify.com/api/tracks/most_streamed/us/daily/latest](http://charts.spotify.com/api/tracks/most_streamed/us/daily/latest)

This object that you see on the page linked above is a JSON object. The property `tracks` points to an array of popular songs. The first item in this array is the most streamed song on Spotify today. 

## First Code Along

Our challenge is to load this JSON in JavaScript (with jQuery's help), use jQuery's `ajax()` function (docs [here](http://api.jquery.com/jquery.ajax/)). This function accepts an object literal where you specify the url, whether you're posting/getting/patching/etc., and what datatype you want. While we do want JSON, we're going to specify JSONP. Don't worry too much about this for now, but if you insist on worrying about it, read [this](http://json-jsonp-tutorial.craic.com/index.html).

Okay, so this is what we have so far:

```javascript
$.ajax({
  url:  "http://charts.spotify.com/api/tracks/most_streamed/us/daily/latest",
  method: "GET",
  dataType: "JSONP"
}) // we'll add code here in a second
```

Now we're going to chain a method onto the return value for this AJAX request. When the request is successful, we want to do some parsing of the data we get back, so we'll chain on the `.success()` function:

```javascript
$.ajax({
  url:  "http://charts.spotify.com/api/tracks/most_streamed/us/daily/latest",
  method: "GET",
  dataType: "JSONP"
}).success(…);
```
The `success()` function takes one argument, a function. This function should also accept one argument, the name of the data that will get returned:

```javascript
$.ajax({
  url:  "http://charts.spotify.com/api/tracks/most_streamed/us/daily/latest",
  method: "GET",
  dataType: "JSONP"
}).success(function( spotifyData ) {
  // we'll code here in a second
});
```

Here, `spotifyData` will be that big JSON object you see when you visit the chart page (remember, it looks like [this](http://charts.spotify.com/api/tracks/most_streamed/us/daily/latest)). However, we don't want to log this huge amount of data. Let's just log the first track:

```javascript
$.ajax({
  url:  "http://charts.spotify.com/api/tracks/most_streamed/us/daily/latest",
  method: "GET",
  dataType: "JSONP"
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

## Parsing and Stringifying JSON

Let's imagine you've purchased some furniture from a store, and you want it delivered. In the shop, the chest-of-drawers you've purchased is a living object:

```javascript
var chestOfDrawers = {
  color: 'red',
  numberOfDrawers: 4
}
```
*  It's easier to ship if the company dismantles it 

```javascript
JSON.stringify(chestOfDrawers)
  --> '{"color":"red","numberOfDrawers":4}'
```

*  Now it's in flat pack form making it easier to transport. (Notice in JSON all properties get  double quotes and strings also get double quotes. In fact single quotes are forbidden. Numbers and booleans do not neccesarily need quotes. All other syntax rules follow the same as Javascript Object notation rules.)
*  To ship/get the furniture, you use To "assemble" the furniture you receive, you have to rebuild it. the chest-of-drawers (using jQuery's `$.parseJSON()` function). It's now back in an object form.

## Second Code Along

* Open up this page in Chrome or Firefox and then open up the browser console.
* Make sure jQuery is loaded by typing `jQuery` or `$`
* Create "ride" that will behave as seen below:

```javascript
ride.make             // Returns 'Yamaha'
ride.model            // Returns 'V-Star Silverado 1100'
ride.year             // Returns 2005
ride.purchased        // Returns Tue Apr 12 2005 00:00:00 GMT-0400 (EDT)
ride.owner.firstName  // Returns 'Spike'
ride.owner.lastName   // Returns 'Spiegel'
ride.product          // Returns [Function]
ride.product();       // Returns 'Yamaha V-Star Silverado 1100'
```

* Log "ride" to the console
* Convert "ride" into JSON, set this equal to the variable "JSONride"
* Declare the variable "parseJSONride" and set it equal to the value of parsing "JSONride"
* Log "parseJSONride" to the console. How does it compare it to the value of "ride"?

## Resources

* [jQuery Documentation](http://jquery.com/) - [Parsing JSON](http://api.jquery.com/jquery.parsejson/)
* [Wikipedia - APIs](https://en.wikipedia.org/wiki/Application_programming_interface)
* [SquareSpace Docs - What is JSON?](http://developers.squarespace.com/what-is-json/)
* [Copter Labs - JSON: What It Is and How to Use It](http://www.copterlabs.com/blog/json-what-it-is-how-it-works-how-to-use-it/)

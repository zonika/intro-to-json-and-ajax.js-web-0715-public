---
  tags: json, WIP, parse, parsing, jQuery
  language: JavaScript, JS
  resources: 1
---

# JSON

## Objectives

* Gain a working knowledge of JSON.
* Learn how to convert an object into JSON and back again.

## Introduction to JSON

JSON stands for JavaScript Object Notation and it has become the defacto standard for computer-to-computer communiation (APIs). Sites like Flickr, WeatherUnderground, and Spotify expose at least some of their data in a JSON format. For instance, take a look at Spotify's data for the most streamed songs in the US today:

[http://charts.spotify.com/api/tracks/most_streamed/us/daily/latest](http://charts.spotify.com/api/tracks/most_streamed/us/daily/latest)



## Example

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

## Code Along

1. Create "ride" that will behave as seen below:
```javascript
  ride.make
    --> 'Yamaha'
  ride.model
    --> 'V-Star Silverado 1100'
  ride.year
    --> 2005
  ride.purchased
    --> Tue Apr 12 2005 00:00:00 GMT-0400 (EDT)
  ride.owner.firstName
    --> 'Spike'
  ride.owner.lastName
    --> 'Spiegel'
  ride.product
    --> [Function]
  ride.product();
    --> 'Yamaha V-Star Silverado 1100'
```
2. Log "ride" to the console
3. Convert "ride" into JSON, set this equal to the variable "JSONride"
4. Declare the variable "parseJSONride" and set it equal to the value of parsing "JSONride"
5. Log "parseJSONride" to the console. How does it compare it to the value of "ride"?

## Resources
* [jQuery Documentation](http://jquery.com/) - [Parsing JSON](http://api.jquery.com/jquery.parsejson/)

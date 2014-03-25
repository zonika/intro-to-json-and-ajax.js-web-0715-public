---
tags: json, WIP
language: JavaScript, JS
---

# JSON

##Objectives:
To gain a working knowledge of JSON.

##Instructions:

* What is JSON?
  *  JSON stands for Javascript Object Notation
  *  Let's imagine you've purchased some furniture from a store, and you want it delivered. In the shop, the chest-of-drawers you've purchased is a living object:
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
  *  Now it's in flat pack form making it easier to transport.
  *  Notice in JSON all properties get  double quotes and strings also get double quotes. In fact single quotes are forbidden. Numbers and booleans do not neccesarily need quotes. All other syntax rules follow the same as Javascript Object notation rules.
  *  To "assemble" the furniture you receive, you have to rebuild it. the chest-of-drawers (using $.parseJSON();). Its now back in an object form.

The reason behind JSON/ XML and YAML is to enable data to be transferred between programming languages in a format both participating languages can understand; you can't give PHP or C++ your JavaScript object directly; because each language represents an object differently under-the-hood. However, because we've stringified the object into JSON; i.e. a standardized way to represent data, we can transmit the JSON representation of the object to another langauge (C++, PHP, Ruby, Python), they can recreate the JavaScript object we had into their own object based on the JSON representation of the object.
*/

Regional Radar Conditions
=========================

To get the specific look and feel I desired I ended up using two different services. One for the map layer and one for the current precipitation layer. It required a bit of tinkering to get the two layers to line up properly, but the end result turned out pretty well. 

Map - Base Layer
----------------

The map layer uses the Google Maps API with a few custom attributes set. 25,000 requests/day. No worries here on daily limit.

[Documentation](https://developers.google.com/maps/documentation/javascript/tutorial)

Radar - Overlay Layer
---------------------

The radar layer uses the Wunderground API to produce a transparent png of the current radar. 500 requests/day.

[Documentation](http://www.wunderground.com/weather/api/d/docs?d=layers/radar)
Local 7 Day Forecast
====================

Creating the 7 day local forecast was definitely the most involved. It uses the Forecast.io API. Forecast.io provides you with a JSON-formatted object that includes the entire 7 day forecast for a specified location. It is then up to you to parse out as little or as much as you'd like. The tricky part is to determine how detailed you want to get in your forecast images. For example, if its calling for rain, you'll have to use a conditional statement to combine that with precipIntensity so that you can display appropriate rain image (ie sprinkles, light rain, rain, heavy rain). 1000 requests/day.

[Documentation](https://developer.forecast.io/docs/v2)
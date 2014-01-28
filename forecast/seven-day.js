var numberOfDays = 7;
var daysOfWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
var monthsOfYear = ["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"];
var current = 0;
var days = [];
var dates = [];
var highs = [];
var lows = [];
var icons = [];
var summaries = [];

jQuery(document).ready(function($) {
	/* REPLACE API BELOW */
	$.ajax({ url : "https://api.forecast.io/forecast/a84cda6fd8c40ad234eb78c85c15d4b1/39.7751,-86.1084",
		dataType : "jsonp",
		success : function(parsed_json) {
			current = Math.round(parsed_json.currently.temperature);
			$('#day0 > .current').html('<span class="today-current">Currently &nbsp;</span>'+current+'<span>&deg;F</span>');
			for (i=0;i<numberOfDays;i++)
			{
				if (i===0) {
					days[i] = "Today";
				} else{
					days[i] = daysOfWeek[(new Date((parsed_json.daily.data[i].time)*1000)).getDay()];
				}
				dates[i] = monthsOfYear[(new Date((parsed_json.daily.data[i].time)*1000)).getMonth()] +
										' ' + (new Date((parsed_json.daily.data[i].time)*1000)).getDate();
				highs[i] = Math.round(parsed_json.daily.data[i].temperatureMax);
				lows[i] = Math.round(parsed_json.daily.data[i].temperatureMin);
				icons[i] = parsed_json.daily.data[i].icon;
				summaries[i] = parsed_json.daily.data[i].summary;
				
				$('#day'+i+' > .day').html(days[i]);
				$('#day'+i+' > .date').html(dates[i]);

				if (i===0) {
					$('#day'+i+' > .high').html('<span class="today-high">High &nbsp;</span>'+highs[i]+'<span>&deg;F</span>');
					$('#day'+i+' > .low').html('<span class="today-low">Low &nbsp;</span>'+lows[i]+'<span>&deg;F</span>');
				} else{
					$('#day'+i+' > .high').html(highs[i]+'<span>&deg;F</span>');
					$('#day'+i+' > .low').html(lows[i]+'<span>&deg;F</span>');
				}
				
				if (icons[i] == "clear-day") {
					$('#day'+i+' > .icon').html('<img src="images/sunny.png">');
				} else if (icons[i] == "rain") {
					if (parsed_json.daily.data[i].precipIntensity < 0.02) {
						$('#day'+i+' > .icon').html('<img src="images/sprinkles.png">');
					} else if (parsed_json.daily.data[i].precipIntensity >= 0.02 && parsed_json.daily.data[i].precipIntensity <= 0.2 ) {
						$('#day'+i+' > .icon').html('<img src="images/rain.png">');
					} else if (parsed_json.daily.data[i].precipIntensity > 0.2 ) {
						$('#day'+i+' > .icon').html('<img src="images/heavy_rain.png">');
					} else {
						$('#day'+i+' > .icon').html('<img src="images/rain.png">');
					}
				} else if (icons[i] == "snow") {
					$('#day'+i+' > .icon').html('<img src="images/snow.png">');
				} else if (icons[i] == "sleet") {
					$('#day'+i+' > .icon').html('<img src="images/sleet.png">');
				} else if (icons[i] == "wind") {
					$('#day'+i+' > .icon').html('<img src="images/wind.png">');
				} else if (icons[i] == "fog") {
					$('#day'+i+' > .icon').html('<img src="images/fog.png">');
				} else if (icons[i] == "partly-cloudy-day" || icons[i] == "cloudy") {
					if (parsed_json.daily.data[i].cloudCover < 0.2) {
						$('#day'+i+' > .icon').html('<img src="images/mostly_sunny.png">');
					} else if (parsed_json.daily.data[i].cloudCover >= 0.2 && parsed_json.daily.data[i].cloudCover <= 0.49 ) {
						$('#day'+i+' > .icon').html('<img src="images/partly_cloudy.png">');
					} else if (parsed_json.daily.data[i].cloudCover >= 0.5 && parsed_json.daily.data[i].cloudCover < 0.8 ) {
						$('#day'+i+' > .icon').html('<img src="images/mostly_cloudy.png">');
					} else if (parsed_json.daily.data[i].cloudCover >= 0.8 ) {
						$('#day'+i+' > .icon').html('<img src="images/cloudy.png">');
					} else {
						$('#day'+i+' > .icon').html('<img src="images/cloudy.png">');
					}
				} else if (icons[i] == "hail") {
					$('#day'+i+' > .icon').html('<img src="images/hail.png">');
				} else if (icons[i] == "thunderstorm") {
					$('#day'+i+' > .icon').html('<img src="images/tstorms.png">');
				} else if (icons[i] == "tornado") {
					$('#day'+i+' > .icon').html('<img src="images/tornado.png">');
				} else{
					$('#day'+i+' > .icon').html('<img src="images/partly_cloudy.png">');
				}

				$('#day'+i+' > .summary').html(summaries[i]);
			}
		}
	});
});
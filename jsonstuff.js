$.ajax({
  "url":  "http://charts.spotify.com/api/tracks/most_streamed/us/daily/latest",
  "method": "GET",
  "dataType": "JSONP"
}).success(function(spotifyData) {
  var firstTrack = spotifyData.tracks[0].track_name;
  $("body").append("<h2> "+ firstTrack + "</h2>");
})

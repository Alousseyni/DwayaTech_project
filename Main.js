//javascript.js
//set map options
var myLatLng = { lat: 35.6987388, lng: -0.6349319 };
var mapOptions = {
    center: myLatLng,
    zoom: 7,
    mapTypeId: google.maps.MapTypeId.ROADMAP

};

//create map
var map = new google.maps.Map(document.getElementById('googleMap'), mapOptions);

//create a DirectionsService object to use the route method and get a result for our request
var directionsService = new google.maps.DirectionsService();

//create a DirectionsRenderer object which we will use to display the route
var directionsDisplay = new google.maps.DirectionsRenderer();

//bind the DirectionsRenderer to the map
directionsDisplay.setMap(map);
//-------------------------------------------------
// function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
//     var R = 6371; // Radius of the earth in km
//     var dLat = deg2rad(lat2-lat1);  // deg2rad below
//     var dLon = deg2rad(lon2-lon1); 
//     var a = 
//       Math.sin(dLat/2) * Math.sin(dLat/2) +
//       Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
//       Math.sin(dLon/2) * Math.sin(dLon/2)
//       ; 
//     var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
//     var d = R * c; // Distance in km
//     return d;
//   }  


//-------------------------------------------------
//define calcRoute function
function calcRoute() {
    //create request
    var request = {
        origin: document.getElementById("from").value,
        destination:document.getElementById("to").value,           // this parts should be change base on the location of pharmacy
        travelMode: google.maps.TravelMode.DRIVING, //WALKING, BYCYCLING, TRANSIT
        unitSystem: google.maps.UnitSystem.METRIC
    }

    //pass the request to the route method
    directionsService.route(request, function (result, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            //Get distance and time
            const output = document.querySelector('#output');
            output.innerHTML = "<div class='alert-info'>From: " + document.getElementById("from").value + ".<br />To: " + document.getElementById("to").value + ".<br /> Driving distance <i class='fas fa-road'></i> : " + result.routes[0].legs[0].distance.text + ".<br />Duration <i class='fas fa-hourglass-start'></i> : " + result.routes[0].legs[0].duration.text + ".</div>";
            //display route
            directionsDisplay.setDirections(result);
        } else {
            //delete route from map
            directionsDisplay.setDirections({ routes: [] });
            //center map in London
            map.setCenter(myLatLng);

            //show error message
            output.innerHTML = "<div class='alert-danger'><i class='fas fa-exclamation-triangle'></i> Could not retrieve driving distance.</div>";
        }
    });

}



//create autocomplete objects for all inputs
var options = {
    types: ['(cities)']
}

var input1 = document.getElementById("from");
var autocomplete1 = new google.maps.places.Autocomplete(input1, options);

var input2 = document.getElementById("to");
var autocomplete2 = new google.maps.places.Autocomplete(input2, options);

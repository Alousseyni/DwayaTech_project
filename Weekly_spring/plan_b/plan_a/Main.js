
function myposition(){
    navigator.geolocation.getCurrentPosition(function(position){
        const initialPosition = position.coords;
        let lat = initialPosition.latitude;
        let lon = initialPosition.longitude;
        var myLatLng = { lat: lat, lng: lon };
        var mapOptions = {
        center: myLatLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById('googleMap'), mapOptions);
        directionsDisplay.setMap(map);
        new google.maps.Marker({
        position: myLatLng,
        map,
        });
   });
}

window.onload = myposition();

//create a DirectionsService object to use the route method and get a result for our request
var directionsService = new google.maps.DirectionsService();

//create a DirectionsRenderer object which we will use to display the route
var directionsDisplay = new google.maps.DirectionsRenderer();

// --------------------------------------------------------------------------------------
async function NearByPharmacy () {
   distances=new Array(3);
   let reponse = new Array(3)
    let pharmaciesNames=["Pharmacie Ghenimi, Es Sénia, Algérie","Pharmacie HAI, Oran, Algérie","Pharmacie TRIKI, Oran, Algérie"]
    for (let name = 0; name < pharmaciesNames.length; name++) {
        const pharmacie = pharmaciesNames[name];
        var request = {
        origin: document.getElementById("from").value,
        destination:pharmacie,           // this parts should be change base on the location of pharmacy
        travelMode: google.maps.TravelMode.DRIVING, //WALKING, BYCYCLING, TRANSIT
        unitSystem: google.maps.UnitSystem.METRIC
       }
      reponse[name] = directionsService.route(request);
      await reponse[name]
      .then(function (result){
        return result;
    }).then(function (rep){
        distances[name] =  rep.routes[0].legs[0].distance.value;
    })
    }

    let min_dist = Math.min(...distances);
    let index_min = distances.indexOf(min_dist);
    let nearByPharmacy = pharmaciesNames[index_min];

    return nearByPharmacy;
}

// -------------------------------------------------------------------------------------
async function calcRoute() {
    let pharmacy = NearByPharmacy();
    let NearPharmacy = await pharmacy.then((value)=>{return value})

    //create request
    var request = {
        origin: document.getElementById("from").value,
        destination: NearPharmacy,           // this parts should be change base on the location of pharmacy
        travelMode: google.maps.TravelMode.DRIVING, //WALKING, BYCYCLING, TRANSIT
        unitSystem: google.maps.UnitSystem.METRIC
    }
    // //pass the request to the route method
    directionsService.route(request, function (result, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            //Get distance and time
            const output = document.querySelector('#output');
            output.innerHTML = "<div class='alert alert-success'><u>Détails:</u><br>From: " + document.getElementById("from").value + ".<br />To: " + NearPharmacy + ".<br /> Driving distance <i class='fas fa-road'></i> : " + result.routes[0].legs[0].distance.text + ".<br />Duration <i class='fas fa-hourglass-start'></i> : " + result.routes[0].legs[0].duration.text + ".</div>";
            //display route
            directionsDisplay.setDirections(result);
            const out = document.querySelector('.out');
            out.innerHTML = "<div class='alert alert-success'>La pharmacie la plus proche depuis "+document.getElementById("from").value +" est la "+ NearPharmacy +".</div>";
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

// create autocomplete objects for all inputs
var options = {
    types: ["establishment"]
}
var input = document.getElementById("from");
var autocomplete = new google.maps.places.Autocomplete(input, options);
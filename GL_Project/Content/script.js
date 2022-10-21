//Get my current position
let myposition = document.getElementById("location");

myposition.onclick = function (){
  navigator.geolocation.getCurrentPosition(function(position){
    let lat = position.coords.latitude;
    let lng = position.coords.longitude;
  });
};    


// Initialize and add the map
function initMap() {
    let myLatLng = { lat: 35.6987388, lng: -0.6349319 };

    let map = new google.maps.Map(document.getElementById("googleMap"), {
      zoom: 15,
      center: myLatLng,
    });
    let marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
    });
  }
  
  window.initMap = initMap;

  //create a direction
 
let directionsService = new google.maps.DirectionsService();
let directionsDisplay = new google.maps.DirectionsRenderer();

directionsDisplay.setMap(map);

function calcRoute(){
    let request =  {
        origin: document.getElementById("from").value,
        destination: document.getElementById("to").value,
        travelMode: google.maps.TravelMode.DRIVING,
        unitSystem: google.maps.UnitSystem.METRIC
    }

 directionsService.route(request, function(result, status){
    if(status == google.maps.DirectionsStatus.OK){
        let output = document.getElementById("output");
        output.innerHTML = "<div class='alert-info'> From: "+document.getElementById("from").value + ".<br> To: "+document.getElementById("to").value + ".<br> Driving distance: "+ result.routes[0].legs[0].distance.text+ ".<br> Duration: "+ result.routes[0].legs[0].duration.text +".</div>";
        directionsDisplay.setDirections(result);
    }
    else{
        directionsDisplay.setDirections({routes: []});
        map.setCenter(myLatLng);
        output.innerHTML = "<div class='alert-danger'> Could not retrieve driving distance.</div>"
    }
 });  
}
  //Autocomplete name of place

const options = {
  fields: ["address_components", "geometry", "icon", "name"],
  strictBounds: false,
  types: ["establishment"],
};

const input1 = document.getElementById("from");
const autocomplete1 = new google.maps.places.Autocomplete(input1, options);


const input2 = document.getElementById("to");
const autocomplete2 = new google.maps.places.Autocomplete(input2, options);

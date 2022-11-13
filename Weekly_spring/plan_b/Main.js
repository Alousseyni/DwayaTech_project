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
// -------------------------------------------------------------------------------------
//define calcRoute function
function calcRoute() {
    var distances=new Array(3);
    //trouver la pharmacie la plus proche parmi nos pharmacie
    let userCurrentLocation=document.getElementById("from").value;
    let productNameToSearch=document.getElementById("to").value;
    //Now we need to have the destination name
    alert(userCurrentLocation,productNameToSearch);
//-------------------------------------------------------------------------------------
    var pharmaciesNames=['Oran','Mostaganem','Tlemcen'];
    for (let i = 0; i < pharmaciesNames.length; i++) 
    {
        var pharmacie = pharmaciesNames[i];
        var request = {
        origin: userCurrentLocation,
        destination:pharmacie,           // this parts should be change base on the location of pharmacy
        travelMode: google.maps.TravelMode.DRIVING, //WALKING, BYCYCLING, TRANSIT
        unitSystem: google.maps.UnitSystem.METRIC
       }
       directionsService.route(request, function (result, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            distances[i]=result.routes[0].legs[0].distance.value;
            if (i==2) {
                const min = arr => arr.reduce((x, y) => Math.min(x, y));
                let nearestPharmacy=pharmaciesNames[distances.indexOf(min(distances))];
                alert(nearestPharméacy);
//-------------------------------------------------------------------------------------
                let request =  {
                            origin: userCurrentLocation,
                            destination: nearestPharmacy,
                            travelMode: google.maps.TravelMode.DRIVING,
                            unitSystem: google.maps.UnitSystem.METRIC
                        }
                        directionsService.route(request, function(result, status){
                                if(status == google.maps.DirectionsStatus.OK){
                                    let output = document.getElementById("output");
                                    output.innerHTML = "<div class='alert-info'> From: "+userCurrentLocation + ".<br> To: "+nearestPharmacy+ ".<br> Driving distance: "+ result.routes[0].legs[0].distance.text+ ".<br> Duration: "+ result.routes[0].legs[0].duration.text +".</div>";
                                    directionsDisplay.setDirections(result);
                                }
                                else{
                                    directionsDisplay.setDirections({routes: []});
                                    map.setCenter(myLatLng);
                                    output.innerHTML = "<div class='alert-danger'> Could not retrieve driving distance.</div>"
                                }
                              });  
            }
        }
       });
    }

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
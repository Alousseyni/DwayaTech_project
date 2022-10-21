<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DwayaTech</title>
    <link rel="stylesheet" href="..\Content\css\bootstrap.min.css">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <script src="https://kit.fontawesome.com/11dd9aa6a8.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins&display=swap">
    <link rel="stylesheet" href="..\Content\style.css">
    <script src="..\Content\script.js"></script>
</head>
<body>
    <div class="jumbotron container">
        <div class="container-fluid">
            <h1>DwayaTech</h1>
            <h2>Trouver la pharmacie la plus proche d'où vous êtes!</h2>
            <form method="post" action="traitement.php" class="form-horizontal ">
                <div class="form-group row">
                    <label for="from" class="col-sm-0 col-form-label"><i class="fa-regular fa-circle-dot fa-xl"></i></label>
                    <div class="col-4">
                      <input class="form-control" type="text" placeholder="Où suis-je?" id="from">  
                    </div>
                </div>
                <div class="form-group row">
                    <label for="to" class="col-sm-0 col-form-label"><i class="fa-solid fa-pills fa-xl"></i></i></label>
                    <div class="col-4">
                      <input class="form-control" type="text" placeholder="Produit rechercher" id="to">  
                    </div>
                </div>
            </form>
            <div class="col-offset-2 col-10">
                <button type="submit" name="search" class="btn btn-info"><i class="fa-sharp fa-solid fa-magnifying-glass-location fa-xl"></i></button>
            </div>
        </div>
        <div class="col-3 float-right m-2">
        Où suis-je ? <button id="location" class="btn btn-info"><i class="fa-solid fa-location-crosshairs fa-xl"></i></button>
            </div>
        <div class="container-fluid">
            <div id="googleMap">

            </div>
            <div id="output">

            </div>
        </div>
    </div>

<!-- google maps link-->
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAoV_49xD7z5ajFcpjwt2WCD5xT3UtVpvg&callback=initMap"></script>
</body>
</html>
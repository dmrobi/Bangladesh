angular.module('starter.controllers', [])

.controller('AppCtrl', function ($scope, $ionicModal, $timeout) {

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    // Form data for the login modal
    $scope.loginData = {};

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/login.html', {
        scope: $scope
    }).then(function (modal) {
        $scope.modal = modal;
    });

    // Triggered in the login modal to close it
    $scope.closeLogin = function () {
        $scope.modal.hide();
    };

    // Open the login modal
    $scope.login = function () {
        $scope.modal.show();
    };

    // Perform the login action when the user submits the login form
    $scope.doLogin = function () {
        console.log('Doing login', $scope.loginData);

        // Simulate a login delay. Remove this and replace with your login
        // code if using a login system
        $timeout(function () {
            $scope.closeLogin();
        }, 1000);
    };
})


.controller('HomeCtrl', function ($scope, districtsServe) {
    $scope.districts = districtsServe.districts;
})

.controller('DistrictCtrl', function ($scope, $stateParams, $filter, districtsServe, $cordovaGeolocation) {
    $scope.districts = districtsServe.districts;
    $scope.id = $stateParams.id;

    $scope.district = $filter('filter')($scope.districts, function (data) {
        return data.id == $scope.id;
    })[0];


    var lat, lng;

    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({
        'address': $scope.district.disname
    }, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            //console.log("location : " + results[0].geometry.location.lat() + " " + results[0].geometry.location.lng());
            lat = results[0].geometry.location.lat();
            lng = results[0].geometry.location.lng();
        } else {
            console.log("Something got wrong " + status);
        }
    });
    
    var options = {
        timeout: 10000,
        enableHighAccuracy: true
    };

    $cordovaGeolocation.getCurrentPosition(options).then(function (position) {
        console.log(lat + " " + lng);
        var latLng = new google.maps.LatLng(lat, lng);
        
        var mapOptions = {
            center: latLng,
            zoom: 10,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);

    }, function (error) {
        console.log("Could not get location");
    });
})

//.controller('MapCtrl', function ($scope, $stateParams, $cordovaGeolocation) {
//    $scope.name = "Google Map";
//    var options = {
//        timeout: 10000,
//        enableHighAccuracy: true
//    };
//    
//    $cordovaGeolocation.getCurrentPosition(options).then(function (position) {
//
//        var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
//
//        var mapOptions = {
//            center: latLng,
//            zoom: 10,
//            mapTypeId: google.maps.MapTypeId.ROADMAP
//        };
//
//        $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);
//
//    }, function (error) {
//        console.log("Could not get location");
//    });
//
//});
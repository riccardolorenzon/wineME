angular.module('starter.controllers', [])

.controller('ChoiceController', function($scope, $location) {
    $scope.goToCamera = function(){
        window.location.href = "#/camera";
    };
})
.controller('LoginController', function($scope, $location) {
    $scope.goToCamera = function(){
        window.location.href = "#/choice";
    };
})
.controller('ResultController', function($scope, $location) {

})
.controller('CameraController', function($scope, Camera) {
    $scope.loadPhoto = function(){
        window.location.href = "#/result";
    };
    $scope.getPhoto = function() {
        console.log('Getting camera');
        Camera.getPicture().then(function(imageURI) {
            console.log(imageURI);
            $scope.lastPhoto = imageURI;

        }, function(err) {
            console.err(err);
        }, {
            quality: 75,
            targetWidth: 320,
            targetHeight: 320,
            saveToPhotoAlbum: true
        });
    }
});



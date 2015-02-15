angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})
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
.controller('MosaicController', function($scope, $location) {
    $scope.goToCamera = function(){
        window.location.href = "#/mosaic";
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
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});



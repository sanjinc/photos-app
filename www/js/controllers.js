angular.module('starter.controllers', [])

.controller('PhotosCtrl', function($scope, PhotoService) {
  $scope.photos;

  PhotoService
    .getPhotos('Basel')
    .success(function(data){
      $scope.photos = data;
    });
})

.controller('FavoritesCtrl', function($scope, PhotoService) {
  $scope.photos;

  PhotoService
    .getFavorites('Basel')
    .success(function(data){
      $scope.photos = data;
    });
})

.controller('FriendsCtrl', function($scope, PhotoService) {
  $scope.photos;

  PhotoService
    .getFriends('Basel')
    .success(function(data){
      $scope.photos = data;
    });
})

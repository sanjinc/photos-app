angular.module('starter.services', [])

.factory('PhotoService', ['$http', function($http) {

  // 500px API URL
  var url = 'https://api.500px.com/v1/photos';

  // Your unique Consumer Key
  var key = 'EOugLffKwqetoVQ753pfYaoQ5fFb6nP910YLv58R';

  // API for this service
  var Service = {};

  /**
   * Get all photos from the user
   * @param user User name
   */
  Service.getPhotos = function(user) {
    return $http.get(url, {
      params : {
        'feature'      : 'user',
        'consumer_key' : key,
        'username'     : user
      }
    });
  }

  /**
   * Get user favorite photos
   * @param user User name
   */
  Service.getFavorites = function(user) {
    return $http.get(url, {
      params : {
        'feature'      : 'user_favorites',
        'consumer_key' : key,
        'username'     : user
      }
    });
  }

  /**
   * Get user friends photos
   * @param user User name
   */
  Service.getFriends = function(user) {
    return $http.get(url, {
      params : {
        'feature'      : 'user_friends',
        'consumer_key' : key,
        'username'     : user
      }
    });
  }

  return Service;
}])

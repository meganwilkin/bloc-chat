(function() {
  function User($firebaseArray) {
    var ref = firebase.database().ref().child("users");
    var users = $firebaseArray(ref);
    
    
      
  }

  angular
    .module('blocChat')
    .factory('User', ['$firebaseArray', User]);
})();
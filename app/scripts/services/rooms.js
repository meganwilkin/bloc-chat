(function() {
  function Room($firebaseArray) {
    var ref = firebase.database().ref().child("rooms").orderByValue();
      var rooms = $firebaseArray(ref);
        
    var addRoom = function(roomName) {
        rooms.$add(roomName);
    };
      
      
    return {
        all: rooms,
        add: addRoom
    };
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
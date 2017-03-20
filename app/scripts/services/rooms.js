(function() {
  function Room($firebaseArray) {
    var ref = firebase.database().ref().child("rooms").orderByValue();
      var rooms = $firebaseArray(ref);
        
    var addRoom = function(roomName) {
        rooms.$add(roomName);
    };
      
    var roomExists = function(roomName) {
      for (var i=0; i < rooms.length; i++) {
          if (rooms[i].$value.toUpperCase() === roomName.toUpperCase()) {
              return true;
          }
      }
      return false;
    };
      
    return {
        all: rooms,
        add: addRoom,
        exists: roomExists
    };
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
(function() {
  function Message($firebaseArray) {
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);
    
    return {
      getByRoomId: function (roomId) {
        var filteredRef = ref.orderByChild('roomId').equalTo(roomId);
        var filteredArray = $firebaseArray(filteredRef);
        return filteredArray;
      },
      addMessage: function(username,content,roomId){
          var messageData = {
              username: username,
              content: content,
              sentAt: Date.now(),
              roomId: roomId.$id
          };
          messages.$add(messageData);
          
      },
      messages: messages          
    }
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();
(function() {
    function RoomsCtrl($scope, Room, Message) {
        this.rooms = Room.all;
        
        var self = this;
        
        $scope.setRoom = function(room){
            $scope.selected = {
                room: room
            };
            
            self.messages = Message.getByRoomId(room.$id);
        };
        
        
        $scope.addMessage = function(){
          Message.addMessage('Skippy',$scope.messageText,$scope.selected.room);
        };
    }
    
    angular
        .module('blocChat')
        .controller('RoomsCtrl', ['$scope','Room','Message',RoomsCtrl]);
})();
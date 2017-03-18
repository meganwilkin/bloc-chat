(function () {
    function RoomsCtrl($scope, Room, Message, $cookies, $rootScope, $uibModal) {
        this.rooms = Room.all;

        var self = this;

        $scope.setRoom = function (room) {
            $scope.selected = {
                room: room
            };

            self.messages = Message.getByRoomId(room.$id);
        };


        $scope.addMessage = function () {
            Message.addMessage($rootScope.currentUser, $scope.messageText, $scope.selected.room);
            $scope.messageText = "";

        };

        $scope.logout = function () {
            $cookies.remove('blocChatCurrentUser');
            $rootScope.currentUser = undefined;
            
            $scope.selected = {
                room: undefined
            };
            
            self.messages = undefined;
            
            $uibModal.open({
                animation: true,
                templateUrl: '/templates/newUsers.html',
                controller: 'NewUserModalInstanceCtrl',
                size: 'sm',
                backdrop: 'static',
                keyboard: false
            });

        };
        
        $scope.clearTextBox = function(){
            $scope.messageText = "";
        }
    }

    angular
        .module('blocChat')
        .controller('RoomsCtrl', ['$scope', 'Room', 'Message', '$cookies', '$rootScope', '$uibModal', RoomsCtrl]);
})();

(function () {
    function RoomsCtrl($scope, Room, Message, $cookies, $rootScope, $uibModal, $anchorScroll, $location,$timeout) {
        this.rooms = Room.all;

        var self = this;

        var previousMessageYear = "";
        var previousMessageMonth = "";
        var previousMessageDay = "";

        $scope.setRoom = function (room) {
            $scope.selected = {
                room: room
            };

            self.previousMessageYear = "";
            self.previousMessageMonth = "";
            self.previousMessageDay = "";
            self.messages = Message.getByRoomId(room.$id);
        };


        $scope.addMessage = function () {
            Message.addMessage($rootScope.currentUser, $scope.messageText, $scope.selected.room);
            $scope.messageText = "";
            $timeout(function () {
                $("html, body").animate({ scrollTop: $(document).height() }, 1000);
            })
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

        $scope.clearTextBox = function () {
            $scope.messageText = "";
        };

        $scope.alphaRoomSort = function (room) {
            return room.$value.toLowerCase();
        };

        $scope.test = function (message) {
            var dateSentYear = new Date(message.sentAt).getFullYear();
            var dateSentMonth = new Date(message.sentAt).getMonth();
            var dateSentDay = new Date(message.sentAt).getDay();

            if (dateSentYear !== self.previousMessageYear || dateSentMonth !== self.previousMessageMonth || dateSentDay !== self.previousMessageDay) {
                self.previousMessageYear = dateSentYear;
                self.previousMessageMonth = dateSentMonth;
                self.previousMessageDay = dateSentDay;
                return true;
            }

            return false;
        };
        
        $scope.setIconClass = function(message) {
            if (message.content.toUpperCase().includes ("WOOF")) {
                return "woof";
            }
            if (message.content.toUpperCase().includes ("MEOW")) {
                return "meow";
            }
            
            return "";
        }
    }

    angular
        .module('blocChat')
        .controller('RoomsCtrl', ['$scope', 'Room', 'Message', '$cookies', '$rootScope', '$uibModal', '$anchorScroll', '$location','$timeout',RoomsCtrl]);
})();

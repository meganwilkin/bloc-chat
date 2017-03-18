(function () {
        function NewRoomModalCtrl($scope, $uibModal, $log) {

            $scope.animationsEnabled = true;

            $scope.open = function (size) {

                var modalInstance = $uibModal.open({
                    animation: $scope.animationsEnabled,
                    templateUrl: '/templates/newChatRoom.html',
                    controller: 'NewRoomModalInstanceCtrl',
                    size: size
                });
               
            };

        }

    angular
    .module('blocChat')
    .controller('NewRoomModalCtrl', ['$scope','$uibModal',NewRoomModalCtrl]);
})();


//tidy up!
//set username 
//format date 
//clear message on send or new room
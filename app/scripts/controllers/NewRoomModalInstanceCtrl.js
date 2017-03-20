(function () {
        function NewRoomModalInstanceCtrl($scope, $uibModalInstance,Room) {
    
            $scope.ok = function () {
                if ($scope.roomname.trim === "") {
                    return;
                }
                
                // Should put up warning message here
                if (Room.exists($scope.roomname)) {
                    return;
                }
                
                Room.add($scope.roomname);
                $uibModalInstance.close();
            };

            $scope.cancel = function () {
                $uibModalInstance.dismiss('cancel');
            };
         }
            
    angular
    .module('blocChat')
    .controller('NewRoomModalInstanceCtrl', ['$scope','$uibModalInstance','Room',NewRoomModalInstanceCtrl]);
})();
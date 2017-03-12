(function () {
        function NewRoomModalInstanceCtrl($scope, $uibModalInstance,Room) {
    
            $scope.ok = function () {
                //console.log($scope.roomname);
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
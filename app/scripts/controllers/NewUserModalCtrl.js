(function () {
        function NewUserModalCtrl($scope, $uibModal, $log) {

            $scope.animationsEnabled = true;

            $scope.open = function (size) {

                var modalInstance = $uibModal.open({
                    animation: $scope.animationsEnabled,
                    templateUrl: '/templates/newUsers.html',
                    controller: 'NewUserModalInstanceCtrl',
                    size: size
                });
               
                
            };

        }

    angular
    .module('blocChat')
    .controller('NewUserModalCtrl', ['$scope','$uibModal',NewUserModalCtrl]);
})();
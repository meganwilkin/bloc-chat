(function () {
        function NewUserModalInstanceCtrl($scope, $uibModalInstance,$cookies,$rootScope) {
    
            $scope.ok = function () {
                
                if ($scope.username.trim() === "")
                {
                    return;
                }

                $cookies.put('blocChatCurrentUser',$scope.username);
                
                $rootScope.currentUser = $scope.username;
                
                $uibModalInstance.close();
            };
         }
            
    angular
    .module('blocChat')
    .controller('NewUserModalInstanceCtrl', ['$scope','$uibModalInstance','$cookies','$rootScope',NewUserModalInstanceCtrl]);
})();
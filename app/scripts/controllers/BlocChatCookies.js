(function() {
  function BlocChatCookies($cookies, $uibModal, $rootScope) {
      
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {

        $uibModal.open({
                animation: true,
                templateUrl: '/templates/newUsers.html',
                controller: 'NewUserModalInstanceCtrl',
                size: 'sm',
                backdrop  : 'static',
                keyboard  : false
            });
    } else {
        $rootScope.currentUser = currentUser;
    }
    
    
  }

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', '$rootScope' , BlocChatCookies]);
})();
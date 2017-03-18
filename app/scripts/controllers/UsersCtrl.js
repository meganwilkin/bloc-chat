(function() {
    function UsersCtrl($scope) {
        console.log('hello');
    }
    
    angular
        .module('blocChat')
        .controller('UsersCtrl', ['$scope', UsersCtrl]);
})();
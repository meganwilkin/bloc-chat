(function() {     
    function config($stateProvider, $locationProvider) {     
        $locationProvider
        .html5Mode({ 
            enabled: true,
            requireBase: false
        });
    
    $stateProvider
         .state('home', {
                url: '/',
                views: {
                    'messages': {
                        templateUrl: '/template/messages.html',
                        controller: 'MessagesCtrl as messages'
                    },
                    'rooms': {
                        templateUrl: '/templates/room_new.html',
                        controller: 'RoomsCtrl as room'
                    },
                    'users': {
                        templateUrl: '/templates/room.html',
                        controller: 'UsersCtrl as users'
                    }
                }
        })
     }
    

 
    angular
         .module('blocChat', ['ui.router', 'firebase', 'ngAnimate','ui.bootstrap', 'ngCookies'])
         .config(config);
 })();
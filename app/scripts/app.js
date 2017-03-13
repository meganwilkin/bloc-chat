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
                        templateUrl: '/templates/room.html',
                        controller: 'RoomsCtrl as room'
                    }
                }
        })
     }
    

 
    angular
         .module('blocChat', ['ui.router', 'firebase', 'ngAnimate','ui.bootstrap'])
         .config(config);
 })();
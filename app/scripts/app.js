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
             controller: 'RoomsCtrl as home',    
             templateUrl: '/templates/home.html'
           })
//        .state('newChatRoom', {
//             url: '/newChatRoom',
//             controller: 'NewroomCtrl as newroom',
//             templateUrl: '/templates/newChatRoom.html'
//        });        
     }
    

 
    angular
         .module('blocChat', ['ui.router', 'firebase', 'ngAnimate','ui.bootstrap'])
         .config(config);
 })();
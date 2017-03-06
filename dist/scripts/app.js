(function() {     
    function config($stateProvider, $locationProvider) {     
        $locationProvider
        .html5Mode({ 
            enabled: true,
            requireBase: false
        });
    
    $stateProvider
         .state('main', {
             url: '/',
             controller: 'MainCtrl as main',    
             templateUrl: '/templates/main.html'
         })
        .state('chat', {
             url: '/chat',
             controller: 'ChatCtrl as chat',    
             templateUrl: '/templates/chat.html'
         });
        
        console.log($stateProvider);
     }
    

 
    angular
         .module('blocChat', ['ui.router', 'firebase'])
         .config(config);
 })();
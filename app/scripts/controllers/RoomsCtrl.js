(function() {
    function RoomsCtrl(Room) {
        this.rooms = Room.all;
        //console.log(this.rooms);
    }
    
    angular
        .module('blocChat')
        .controller('RoomsCtrl', ['Room',RoomsCtrl]);
})();
(function() {
    function RoomsCtrl(Room) {
        this.rooms = Room.all;
        //console.log(this.rooms);
        this.banana = [ 'room1', 'room2', 'room3'];
        console.log(this.banana);
    }
    
    angular
        .module('blocChat')
        .controller('RoomsCtrl', ['Room',RoomsCtrl]);
})();
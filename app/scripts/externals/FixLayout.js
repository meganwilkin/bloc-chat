$(window).ready(function () {
    // Because of timing issues need to add a delay...
    setTimeout(function () {
        var height = window.innerHeight;
        var innerHeight = height - 60;
        $('#sidebar').height(innerHeight);
    }, 1500);


});

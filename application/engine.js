(function (plat) {

    window.requestAnimFrame = (function () {
        if (window.requestAnimationFrame) {
            plat
        }
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function (callback) {
                window.setTimeout(callback, 1000/60);
            };
    })();
}(window.plat));
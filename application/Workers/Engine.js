(function (plat, window) {

    var Workers = plat.Workers;

    Workers.Engine = function() {

    };

    Workers.Engine.prototype.start = function() {

    };

    Workers.Engine.prototype.requestAnimationFrame = (function () {

        // TODO: add which one was chosen to the engine model
        return  window.requestAnimationFrame    ||
            window.webkitRequestAnimationFrame  ||
            window.mozRequestAnimationFrame     ||
            window.oRequestAnimationFrame       ||
            window.msRequestAnimationFrame      ||
            function (callback) {
                window.setTimeout(callback, 1000/60);
            };
    }());

}(plat, window));
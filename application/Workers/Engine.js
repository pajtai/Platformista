(function (plat, window) {

    var Workers = plat.Workers,
        time = plat.utilities.time,
        Engine = function(model) {

        this.model = model;
    };

    Engine.prototype.start = function() {

        var model = this.model;

        this.model.set('engineStart', time.ms());

        window.setInterval(this.updateGame, this.model.get('gps'));

        this.requestAnimationFrame(this.updateUi.bind(this));
    };

    Engine.prototype.updateUi = function() {

        console.log("update ui");
        this.requestAnimationFrame(this.updateUi.bind(this));
    };

    Engine.prototype.requestAnimationFrame = (function(){

        return (window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame  ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function(callback) {

                this.setTimeout(callback, 1000 / 60);
            }).bind(window);
    })();

    Engine.prototype.updateGame = function() {

        console.log("update game");
    };

    Workers.Engine = Engine;
}(plat, window));
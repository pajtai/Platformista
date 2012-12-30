(function (plat, window) {

    var Workers = plat.Workers,
        time = plat.utilities.time,
        Engine = function (model) {

            this.model = model;
        };

    // Retrieve data from the model
    Engine.prototype.get = function(modelKey) {
        return this.model.get(modelKey);
    };

    Engine.prototype.start = function () {

        this.model.set('engineStart', time.ms());

        // Run first update immediately and then at gps speed
        this.updateGame();
        window.setInterval(this.updateGame.bind(this), 1000 / this.model.get('gps'));

        this.requestAnimationFrame(this.updateUi.bind(this));
    };

    // Set the maximum number of UI updates per second
    Engine.prototype.setMaxFps = function (fps) {

        this.model.set('fps', fps);
        this.model.set('msFps', 1000/fps);
    };

    Engine.prototype.pause = function () {

    };

    Engine.prototype.updateUi = function () {
        var fps = this.model.get('fps'),
            msFps = this.model.get('msFps'),
            now = time.ms(),
            previous = this.model.get('msPreviousUiTick');

        // Only update the UI if enough time has passed as described by the fps
        if (now - previous >= msFps) {
            this.model.set('uiTicks', this.model.get('uiTicks') + 1);
            this.model.set('msPreviousUiTick', now);
        }
        this.requestAnimationFrame(this.updateUi.bind(this));
    };

    Engine.prototype.timeSinceLastUpdate = function() {

    };

    Engine.prototype.requestAnimationFrame = (function () {

        return (window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function (callback) {

                this.setTimeout(callback, 1000 / 60);
            }).bind(window);
    })();

    Engine.prototype.updateGame = function () {
        this.model.set('gameTicks', this.model.get('gameTicks') + 1);
    };

    Workers.Engine = Engine;
}(plat, window));
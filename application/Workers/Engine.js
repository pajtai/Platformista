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

        this.model.set('run', true);
        // Run first update immediately and then at gps speed
        this.updateGame();

        // TODO: does it make sense to set these on the model, instead of as a property
        // this will only be used by the Engine
        this.model.set('gameInterval', window.setInterval(this.updateGame.bind(this), 1000 / this.model.get('gps')));

        this.requestAnimationFrame(this.updateUi.bind(this));
    };

    // Set the maximum number of UI updates per second
    Engine.prototype.setMaxFps = function (fps) {

        this.model.set('fps', fps);
        this.model.set('msFps', 1000/fps);
    };

    Engine.prototype.pause = function () {
        this.model.set('run', false);
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

        if (this.model.get('run')) {

            this.requestAnimationFrame(this.updateUi.bind(this));
        } else {
            clearInterval(this.model.get('gameInterval'))
        }
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
        if (this.model.get('run')) {
            this.model.set('gameTicks', this.model.get('gameTicks') + 1);
        } else {

        }
    };

    Workers.Engine = Engine;
}(plat, window));
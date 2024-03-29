(function(Backbone, Platformista){

    Platformista.Models.Engine = Backbone.Model.extend({

        defaults: {

            // Maximum allowed fps
            fps: 60,

            msFps: 1000 / 60,

            // Game ticks per second
            gps: 100,

            // Total times ui was updated
            uiTicks: 0,

            // Total times game was updated
            gameTicks: 0,

            // ms when engine was started
            engineStart: 0,

            // fps running 1 second average
            averageFps: 0,

            msPreviousUiTick: 0,

            msPreviousGameTick: 0,

            run: false,

            gameInterval: undefined
        }
    });
}(Backbone, Platformista));

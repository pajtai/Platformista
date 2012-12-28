(function(Backbone, plat){

    plat.Models.Engine = Backbone.Model.extend({

        defaults: {

            // Maximal frames per second updates to the ui
            fps: 60,

            // Game ticks per second
            gps: 100,

            // Total times ui was updated
            uiTicks: 0,

            // Total times game was updated
            gameTicks: 0,

            // ms when engine was started
            engineStart: 0,

            // fps running 1 second average
            averageFps: 0
        }
    });
}(Backbone, plat));

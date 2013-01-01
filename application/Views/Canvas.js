(function(Bacbkone, plat){

    plat.Views.Canvas = Backbone.View.extend({

        initialize: function() {

        },

        // Set the Canvas by passing in the selector for the canvas element
        // ```new plat.Views.Canvas({canvas:"#plat"});```
        setCanvas: function(canvasSelector) {

            this.el(canvasSelector);
        }
    });
}(Backbone, plat));
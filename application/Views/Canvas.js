(function(Bacbkone, Platformista){

    Platformista.Views.Canvas = Backbone.View.extend({

        initialize: function() {

        },

        el: function(canvasSelector) {

            return $(canvasSelector)[0];
        },

        // Set the Canvas by passing in the selector for the canvas element
        // ```new Platformista.Views.Canvas({canvas:"#Platformista"});```
        setCanvas: function(canvasSelector) {

            this.el(canvasSelector);
        }
    });
}(Backbone, Platformista));
(function(Bacbkone, Platformista){

    Platformista.Views.Canvas = Backbone.View.extend({

        initialize: function() {

            this.el =  function(canvasSelector) {

                return this.$el[0];
            }.bind(this);
        },

        // Set the Canvas by passing in the selector for the canvas element
        // ```new Platformista.Views.Canvas({canvas:"#Platformista"});```
        setCanvas: function(canvasSelector) {

            this.$el = $(canvasSelector);
            this.el(canvasSelector);
        }
    });
}(Backbone, Platformista));
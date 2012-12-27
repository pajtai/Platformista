(function(Backbone, plat){

    plat.namespace('models').Viewport = Backbone.Model.extend({

        defaults: {

            // these are the width and height of the view port on the canvas
            width: 600,
            height: 400,

            // scaling and angle of the tile map as shown in the viewport
            scale: 1,
            rotation: 0,

            // x and y represent points on the tile map
            centerX: 300,
            centerY: 200
        }
    });
}(Backbone, window.plat));

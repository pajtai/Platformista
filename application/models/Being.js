(function(Backbone, plat){

    plat.namespace('models').Being = Backbone.Model.extend({

        defaults: {

            x: 0,
            y: 0,

            velocity: [0, 0, 0],

            sprite: {}
        }
    });
}(Backbone, window.plat));

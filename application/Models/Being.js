(function(Backbone, Platformista){

    Platformista.Models.Being = Backbone.Model.extend({

        defaults: {

            x: 0,
            y: 0,

            velocity: [0, 0, 0],

            sprite: {}
        }
    });
}(Backbone, Platformista));

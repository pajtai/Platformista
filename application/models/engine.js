(function(Backbone, plat){

    plat.namespace('models').Engine = Backbone.Model.extend({

        defaults: {

            fps: 60
        }
    });
}(Backbone, window.plat));

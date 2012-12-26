(function(Backbone, plat){

    plat.namespace('models').Config = Backbone.Model.extend({

        defaults: {

            fps: 60
        }
    });
}(Backbone, window.plat));
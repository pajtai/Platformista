(function(plat){

    // TODO: this entire cycle should be moved into a "plat.build() or plat.new()" so separate instances can be created.
    // Models
    var Models = plat.Models,
        models = plat.models,
        Views = plat.Views,
        views = plat.views,
        Workers = plat.Workers,
        workers = plat.workers;

    plat.new = function() {

    };
    // Models
    models.engine = new Models.Engine();

    // Views
    views.canvas = new Views.Canvas();

    // Workers
    workers.engine = new Workers.Engine(models.engine);

    console.log("finished setup.js");
}(plat));
(function(plat){

    // Models
    var Models = plat.Models,
        models = plat.models,
        Workers = plat.Workers,
        workers = plat.workers;

    models.engine = new Models.Engine();

    // Workers
    workers.engine = new Workers.Engine(models.engine);

    console.log("finished setup.js");
}(plat));
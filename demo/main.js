(function(plat, undefined){

    console.log("plat is " + (undefined === plat ? "not" : "") + " defined");

    plat.workers.engine.start();
}(plat));
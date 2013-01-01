(function(Platformista, undefined){

    console.log("Platformista is " + (undefined === Platformista ? "not" : "") + " defined");

    Platformista.workers.engine.start();
}(Platformista));
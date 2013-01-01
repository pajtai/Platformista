(function(window) {

    var Platformista = {

        // TODO: build task to sync w package.json
        VERSION: '0.0.1',

        Models: {},
        Views: {},
        Workers: {},

        utilities: {},

        new: function() {

            var mEngine = new Platformista.Models.Engine(),
                vCanvas = new Platformista.Views.Canvas(),
                wEngine = new Platformista.Workers.Engine(mEngine);

            // Not all properties might be necessary (e.g. why hold on to reference to models?)
            return {

                models: {

                    engine: mEngine
                },

                views: {

                    canvas: vCanvas
                },

                workers: {

                    engine: wEngine
                },

                utilities: Platformista.utilities
            };
        }
    };

    // TODO: build task to create AMD version, min, concat, etc
    window.Platformista = Platformista;
} (this));
(function(Backbone, Platformista){

    Platformista.Models.Tilemap = Backbone.Model.extend({

        defaults: {

            // size of map in number of tiles
            width: 100,
            height: 100,

            // size of each cell in pixels
            cellSize: 32,

            // matrix of tiles
            map: [],

            // todo: validate map to w & h

            // mapping of map symbols to images or sprite squares
            mapDefinitions: {}
        }
    });
}(Backbone, Platformista));

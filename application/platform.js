(function(window) {
    // The app begins
    var plat = {};

    // A method to add to the app namesapce
    plat.namespace = function(ns_string) {

        var parts = ns_string.split('.'),
            parent = plat,
            i;

        // stip reduntant leading global
        if ('plat' === parts[0]) {
            parts = parts.slice(1);
        }

        for (i=0; i < parts.length; ++i) {

            // build sub namespaces as needed
            if ("undefined" === typeof parent[parts[i]]) {
                parent[parts[i]] = {};
            }

            parent = parent[parts[i]];
        }

        return parent;
    };

    window.plat = plat;
}(window));
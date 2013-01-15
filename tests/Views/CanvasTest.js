(function() {

    var plat = Platformista.new(),
        canvas = plat.views.canvas;

    module("Canvas");
    canvas.setCanvas("#platformista");
    console.log("few " + canvas.$el.attr('id'));

}());
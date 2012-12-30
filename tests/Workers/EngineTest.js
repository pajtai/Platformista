module("Engine");

test( "engine instance exists", function() {

    ok( typeof plat.workers.engine !== "undefined");
});

module("Engine: Ticks");
test("for 2 fps for 1 second", function() {

    var engine = plat.workers.engine;

    strictEqual(engine.get('fps'), 60, "default 60 fps");
    engine.setMaxFps(2);
    engine.start();
    stop();
    setTimeout(function() {
        var uiTicks, gameTicks;

        start();

        strictEqual(engine.get('fps'), 2, "fps is set to 2");
        strictEqual(engine.get('gps'), 100, "gps is set to 100");

        uiTicks = engine.get('uiTicks');
        gameTicks = engine.get('gameTicks');
        ok(1 <= uiTicks && uiTicks <= 3,  "~2 ui ticks in a second");
        ok(50 < gameTicks && gameTicks < 110, "~100 game ticks in a seoncd");
    }, 1000);
});
// Wrap everything to allow for parent scope for variable sharing
(function() {

    // TODO: reinitalize plat before each test or at least before each module
    var uiTicks,
        gameTicks,
        engine = plat.workers.engine;

    module("Engine: Ticks");
    test("for 2 fps for 1 second", function() {

        strictEqual(engine.get('fps'), 60, "default 60 fps");
        engine.setMaxFps(2);
        engine.start();
        stop();
        setTimeout(function() {

            start();
            engine.pause();

            strictEqual(engine.get('fps'), 2, "fps is set to 2");
            strictEqual(engine.get('gps'), 100, "gps is set to 100");

            uiTicks = engine.get('uiTicks');
            gameTicks = engine.get('gameTicks');
            ok(1 <= uiTicks && uiTicks <= 3,  "~2 ui ticks in a second: " + uiTicks + " ticks.");
            ok(50 < gameTicks && gameTicks < 110, "~100 game ticks in a second: " + gameTicks + " ticks.");

        }, 1000);
    });

    test("pausing engine 500ms freezes ticks", function() {

        stop();
        setTimeout(function() {

            start();
            strictEqual(engine.get('uiTicks'), uiTicks, "ui ticks is still " + uiTicks);
            strictEqual(engine.get('gameTicks'), gameTicks, "game ticks is still " + gameTicks);
        }, 1500);
    });

}());
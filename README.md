platformista
============

### Features to implement:

* Game Engine
    * [requestAnimationFrame](http://nokarma.org/2011/02/02/javascript-game-development-the-game-loop/index.html) with setInterval as fall back
    * position calculated at each tick, sprite animation calculated at each update
* Platform
    * ASCII map to platform
        * ASCII character to sprite / texture definitions
    * view port
    * Map panning
        * Smoothly
        * Tile by tile
    * Map rotation
    * Map zooming
    * Platform editor
        * Simple drag and drop editor that outpus JSON that can be used as Platformista input
* Input
    * Seamless mobile support
        * Keyboard - fall back to touch (screen area for arrows, tap for fire)
* Game Play
    * Save and play back
* Graphic elements
    * inView method
    * visible method
    * Characters
        * "being" objects
        * customized using object composition with standard available add ons or custom
        * line of site
* Linear Algebra
    * Try closure: http://stepheneb.github.com/webgl-matrix-benchmarks/matrix_benchmark.html

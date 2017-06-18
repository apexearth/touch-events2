# touch-events2

![](https://travis-ci.org/apexearth/touch-events2.svg)
![](http://img.shields.io/npm/v/touch-events2.svg?style=flat)
![](http://img.shields.io/npm/dm/touch-events2.svg?style=flat)
![](http://img.shields.io/npm/l/touch-events2.svg?style=flat)

Provides touch events to developers using Node.js to develop for browsers.
 
## Usage

[![NPM](https://nodei.co/npm/touch-events2.png)](https://nodei.co/npm/touch-events2/)

### `listener = touchevents([target], [events])`

## Examples

#### Basic Usage

    const touchevents = require('touch-events2') // Also at window.touchevents.

    // Default target is:  document.body
    // Default events are: ["touchstart", "touchend", "touchmove"]
    var touch = touchevents() 
    
    touch.on("touchstart", function(event) {
        console.log(event)
    })

#### Custom  Target

    var touch = window.touchevents(document)

#### Custom Event List

    var touch = window.touchevents(['touchcancel'])

#### Custom Target & Event List

    var touch = window.touchevents(document, ['touchcancel'])
    
## Tests

- Mocha
   - Test functionality in Node.js
- Karma
   - Using browserify, test functionality in browsers
- User Testing
   - [grunt user-test](Gruntfile.js) is set to build, serve, and open [test/index.html](test/index.html)

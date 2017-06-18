var EventEmitter = require("events").EventEmitter
var util         = require("util")
var browser      = require("./browser")

module.exports             = touch;
browser.window.touchevents = touch;

function touch(target, events) {
    return new Touch(target, events);
}

function Touch(target, events) {
    EventEmitter.call(this);
    var that = this;
    if (target && target.constructor === Array) {
        events = target;
        target = null;
    }
    target = target || browser.document.body
    events = events || [
            "touchstart",
            "touchend",
            "touchmove"
        ]

    for (var i = 0; i < events.length; i++) {
        (function (eventName) {
            target.addEventListener(eventName, function (event) {
                that.emit(eventName, event)
            })
        })(events[i])
    }
}
util.inherits(Touch, EventEmitter);
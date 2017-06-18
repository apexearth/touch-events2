var expect  = require("chai").expect
var event   = require("./event.js")
var touch   = require("../src/touch.js")
var browser = require("../src/browser.js")

describe("touch.js", function () {

    var kbTarget = browser.document.body;
    it("should detect touchstart events", function () {
        var kb             = touch();
        var triggeredEvent = {value: 123}
        var testEvent      = undefined;
        kb.on("touchstart", function (e) {
            testEvent = e;
        })
        event.trigger(kbTarget, "touchstart", triggeredEvent)
        expect(testEvent.value).to.equal(triggeredEvent.value)
        kb.removeAllListeners();
    })

})
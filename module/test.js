(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./ZipCodeValidator", "./LettersOnlyValidator"], factory);
    }
})(function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var ZipCodeValidator_1 = require("./ZipCodeValidator");
    var LettersOnlyValidator_1 = require("./LettersOnlyValidator");
    var strings = ["Hello", "98205", "101"];
    var validators = {};
    validators["Zip code"] = new ZipCodeValidator_1["default"]();
    validators["Letters only"] = new LettersOnlyValidator_1["default"]();
    strings.forEach(function (s) {
        for (var name_1 in validators) {
            console.log("\"" + s + "\" - " + (validators[name_1].isAcceptable(s) ? "matches" : "does not match") + " " + name_1);
        }
    });
});

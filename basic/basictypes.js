var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var first = [1, 2];
var second = [3, 4];
var bothPlus = [0].concat(first, second, [5]);
var defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
var search = __assign({ food: "rich" }, defaults);
console.log(search);

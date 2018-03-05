function getName(n) {
    if (typeof n === 'string') {
        return n;
    }
    else {
        return n();
    }
}
function assertNever(x) {
    throw new Error("Unexpected object: " + x);
}
function area(s) {
    switch (s.kind) {
        case "square": return s.size * s.size;
        case "rectangle": return s.width * s.height;
        case "circle": return Math.PI * Math.pow(s.radius, 2);
        case "triangle": return s.bottom * s.height / 2;
        default: return assertNever(s);
    }
}
function proxify(o) {
    // return o;
}
var proxyProps = proxify({ a: "2" });

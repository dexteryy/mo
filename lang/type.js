/**
 * using AMD (Asynchronous Module Definition) API with OzJS
 * see http://ozjs.org for details
 *
 * Copyright (C) 2010-2012, Dexter.Yy, MIT License
 * vim: et:ts=4:sw=4:sts=4
 */
if (typeof module === 'undefined' 
        && (typeof define !== 'function' || !define.amd)) {
    define = function(mid, deps, factory){
        var exports = ((this.mo || (this.mo = {})).lang 
            || (this.mo.lang = {})).type = {};
        factory(null, null, exports);
    };
}
define("mo/lang/type", [
    "./es5"
], function(_0, require, exports){

var host = this,
    window = host.window,
    _toString = Object.prototype.toString,
    _aproto = Array.prototype,
    _typeMap = {};

_aproto.forEach.call("Boolean Number String Function Array Date RegExp Object".split(" "), function(name){
    this[ "[object " + name + "]" ] = name.toLowerCase();
}, _typeMap);

function type(obj) {
    return obj == null ?
        String(obj) :
        _typeMap[ _toString.call(obj) ] || "object";
}

exports.type = type;

exports.isFunction = function(obj) {
    return _toString.call(obj) === "[object Function]";
};

exports.isWindow = function(obj) {
    return obj && obj === obj.window;
};

exports.isEmptyObject = function(obj) {
    for (var name in obj) {
        name = null;
        return false;
    }
    return true;
};

exports.isArraylike = function(obj){
    var l = obj.length;
    return !exports.isWindow(obj) 
        && (typeof obj !== 'function' 
            || obj.constructor !== Function)
        && (l === 0 
            || typeof l === "number"
            && l > 0 
            && (l - 1) in obj);
};

exports.ns = function(namespace, v, parent){
    var i, p = parent || window, n = namespace.split(".").reverse();
    while ((i = n.pop()) && n.length > 0) {
        if (typeof p[i] === 'undefined') {
            p[i] = {};
        } else if (typeof p[i] !== "object") {
            return false;
        }
        p = p[i];
    }
    if (typeof v !== 'undefined')
        p[i] = v;
    return p[i];
};

});

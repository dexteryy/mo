/**
 * ES5/6 shim and minimum utilities for language enhancement
 *
 * using AMD (Asynchronous Module Definition) API with OzJS
 * see http://ozjs.org for details
 *
 * Copyright (C) 2010-2012, Dexter.Yy, MIT License
 * vim: et:ts=4:sw=4:sts=4
 */
define("mo/lang", [
    "./lang/es6",
    "./lang/type",
    "./lang/mix",
    "./lang/struct",
    "./lang/oop"
], function(_0, _1, _2, _3, _4, require, exports){

_2.mix(exports, _1, _2, _3, _4);

});

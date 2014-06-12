/**
 * Copyright (C) 2010-2014, Dexter.Yy, MIT License
 * vim: et:ts=4:sw=4:sts=4
 */
(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define("mo/lang/es6", [
            "mo/lang/es6-utils",
            "mo/lang/es6-collection",
            "mo/lang/es6-promise"
        ], factory);
    } else {
        factory();
    }
}(this, function(){}));

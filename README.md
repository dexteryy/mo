<!---
layout: intro
title: Mo
-->

# Mo

> * A collection of OzJS core modules that form a library called "Mo" 

## In NodeJS

```
npm install mo
```

## In browser

### AMD and OzJS

* Mo can either be viewed as an independent library, or as a part of [OzJS mirco-framework](http://ozjs.org/#framework).
* It's wrapped as a number of mutually independent [AMD (Asynchronous Module Definition)](https://github.com/amdjs/amdjs-api/wiki/AMD) modules. You should use them with [oz.js](http://ozjs.org/#start) (or require.js or [similar](http://wiki.commonjs.org/wiki/Implementations) for handling dependencies). 
* If you want to make them available for both other AMD code and traditional code based on global namespace. OzJS provides [a mini define/require implementation](http://ozjs.org/examples/adapter/) to transform AMD module into traditional [module pattern](http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth).
* See [http://ozjs.org](http://ozjs.org) for details.

### Get the Code

Add to your project as new dependency

* via [bower](http://bower.io/) - `bower install mo`
* via [istatic](http://ozjs.org/istatic)

Or [download directly from Github](https://github.com/dexteryy/mo/)

## Modules Overview

* [mo/lang](https://github.com/dexteryy/mo/blob/master/lang.js): 
    * ES5/6 shim and minimum utilities for language enhancement
    * [mo/lang/es5](https://github.com/dexteryy/mo/blob/master/lang/es5.js)
    * [mo/lang/type](https://github.com/dexteryy/mo/blob/master/lang/type.js)
    * [mo/lang/mix](https://github.com/dexteryy/mo/blob/master/lang/mix.js)
    * [mo/lang/oop](https://github.com/dexteryy/mo/blob/master/lang/oop.js)
    * [mo/lang/struct](https://github.com/dexteryy/mo/blob/master/lang/struct.js)
* [mo/domready](https://github.com/dexteryy/mo/blob/master/domready.js): 
    * Non-plugin implementation of cross-browser DOM ready event
    * Based on OzJS's built-in module -- 'finish'
* [mo/browsers](https://github.com/dexteryy/mo/blob/master/browsers.js): 
    * Standalone jQuery.browsers supports skin browsers popular in China 
* [mo/cookie](https://github.com/dexteryy/mo/blob/master/cookie.js): 
    * Simple wrapping for managing cookie 
* [mo/template](https://github.com/dexteryy/mo/blob/master/template.js): 
    * A lightweight and enhanced micro-template implementation, and minimum utilities
    * [mo/template/string](https://github.com/dexteryy/mo/blob/master/template/string.js): 
    * [mo/template/micro](https://github.com/dexteryy/mo/blob/master/template/micro.js): 
* [mo/network](https://github.com/dexteryy/mo/blob/master/network.js): 
    * Standalone jQuery.ajax API and enhanced getJSON, and so on
* [mo/easing](https://github.com/dexteryy/mo/blob/master/easing.js): 
    * An easing library supports jquery.js, standalone module and CSS timing functions
* [mo/mainloop](https://github.com/dexteryy/mo/blob/master/mainloop.js): 
    * Implement and manage single loop for WebApp life cycle
    * Provide tweening API for both property animation and frame animation(canvas or css)
* [mo/key](https://github.com/dexteryy/mo/blob/master/key.js): 
    * Wrapping API for keyboard events
    * Support key sequence, multiple key press, ...
* [mo/console](https://github.com/dexteryy/mo/blob/master/console.js): 
    * Forwarding output of console API

## Examples

* [demo for mo/lang](http://ozjs.org/mo/examples/lang)

## API and usage

### mo/lang

```javascript 
var _ = require('mo/lang');
```

* `_.ns(string, value)` -- 
* same as below

#### mo/lang/es5

```javascript 
require('mo/lang/es5'); // Add ES5 methods in browsers that don't natively support them
```

* `Array.prototype.forEach`
* `Array.prototype.map`
* `Array.prototype.filter`
* `Array.prototype.reduce`
* `Array.prototype.some`
* `Array.prototype.every`
* `Array.prototype.indexOf`
* `Array.prototype.lastIndexOf`
* `Array.isArray`
* `String.prototype.trim`
* `Object.keys`
* `Object.create`
* `Object.getPrototypeOf`
* `Function.prototype.bind`

#### mo/lang/type

```javascript 
var _ = require('mo/lang/type');
```

* `_.type(sth)` -- 
* `_.isFunction(sth)` -- 
* `_.isWindow(sth)` -- 
* `_.isEmptyObject(sth)` -- 

#### mo/lang/mix

```javascript 
var _ = require('mo/lang/mix');
```

* `_.mix(origin, obj1, obj2, ..., depth)` -- 
* `_.merge(origin, obj1, obj2, ..., depth)` -- 
* `_.interset(origin, obj1, obj2, ..., depth)` -- 
* `_.copy(origin, depth)` -- 
* `_.occupy(origin, obj, depth)` -- 
* `_.defaults(origin, obj1, obj2, ..., depth)` -- 
* `_.config(cfg, opt, DEFAULT_CFG)` -- 
* `_.unique(list)` -- 

#### mo/lang/oop

```javascript 
var _ = require('mo/lang/oop');

var List = _.construct(Array, /*mixes, */function(){
    this.superConstructor.apply(this, arguments);
    this.a = 1;
});

List.prototype.forEach = function(){
    return this.superMethod('forEach', arguments);
};
```

#### mo/lang/struct

```javascript 
var _ = require('mo/lang/struct');
```

* `_.index(array, key)` -- 
* `_.fnQueue()` -- 

### mo/domready

```javascript 
require(['mo/domready'], function(none){
    // won't execute until the page's entire DOM has loaded
});
```

### mo/browsers

```javascript 
var browsers = require('mo/browsers');
```

* `browsers.browser` --
* `browsers.version` -- 
* `browsers.engine` -- 
* `browsers.engineversion` -- 
* `browsers.os` -- 
* `browsers.osversion` -- 
* `browsers.isMobile` -- 
* `browsers.skin` -- 
* `browsers.rank` -- 
* `browsers.ua` -- 
* `browsers['msie'|'safari'|'mobilesafari'|'chrome'|'aosp'|'mozilla'|...]` --

### mo/cookie

```javascript 
var cookie = require('mo/cookie');

cookie(name, value, {
    domain: 'ozjs.org', // '' as default
    path: '/', // '' as default
    expires: 365 // day,
    secure: ''
});
```

### mo/template

```javascript 
var tpl = require('mo/template');
```

* `tpl.str2html(string)` -- 
* same as below

#### mo/template/string

```javascript 
var tpl = require('mo/template/string');
```

* `tpl.format(string, dict|list)` -- 
* `tpl.escapeHTML(string)` -- 
* `tpl.substr(string, limit, callback)` -- 
* `tpl.strsize(string)` -- 

#### mo/template/micro

```javascript 
var tpl = require('mo/template/micro');
```

* `tpl.convertTpl(tplName|tplString, dictData, namespace)` -- 
* `tpl.reloadTpl(tplName)` -- 

### mo/network

```javascript 
var net = require('mo/network');
```

* `net.getScript(url, callback)` -- 
* `net.getStyle(url)` -- 
* `net.getJSON(url, params, callback, options)` -- 
* `net.getRequest(url, params)` -- 
* `net.parseJSON(data)` -- 
* same as below

#### mo/network/ajax

```javascript 
var net = require('mo/network/ajax');
```

* `net.ajax(options)` -- 
* `net.params(data)` -- 

### mo/easing

```javascript 
var easingLib = require('mo/easing');
```

* `easingLib.def` -- 
* `easingLib.values` -- 
* `easingLib.functions` -- 

```javascript 
// use it as extension of other library

var $ = require('jquery');
$.easing['jswing'] = $.easing['swing'];
$.extend($.easing, easingLib.functions);

require('mo/mainloop').config({
    easing: easingLib.functions
});

require('choreo').config({
    easing: easingLib
});
```

### mo/mainloop

```javascript 
var loop = require('mo/mainloop');
```

* `loop.config(options)` -- 
* `loop.run(optional_stageName)` -- 
* `loop.pause(stageName)` -- 
* `loop.complete(stageName)` -- 
* `loop.remove(stageName)` -- 
* `loop.info(stageName)` -- 
* `loop.isRunning(stageName)` -- 
* `loop.addStage(stageName, optional_canvas)` -- 
* `loop.addRender(stageName, render, optional_canvas)` -- 
* `loop.getRender(renderId)` -- 
* `loop.addTween(stageName, current, end, duration, options)` -- 

### mo/key

```javascript 
var Key = require('mo/key');
```

* `Key.KEYS_CODE` -- 

```javascript 
var key = Key(config);
```

* `key.addHandler(event, keyName, handler)` -- 
* `key.down([keyName, ...], handler)` -- 
* `key.up([keyName, ...], handler)` -- 
* `key.press([keyName, ...], handler)` -- 
* `key.reset()` -- 
* `key.addRule(fn)` -- 
* `key.enable()` -- 
* `key.disable()` -- 
* `key.check()` -- 

### mo/console

```javascript 
var console = require('mo/console');
```

* `console.config({ output: elm })` -- 
* `console.enable()` -- 
* `console.disable()` -- 
* `console.run(func)` -- 
* `console.log(sth, sth, ...)` -- 
* `console.info(sth, sth, ...)` -- 
* `console.warn(sth, sth, ...)` -- 
* `console.error(sth, sth, ...)` -- 

Under construction...

## More References

See [OzJS Project Homepage](http://ozjs.org/)

## Release History

See [OzJS Release History](http://ozjs.org/#release)

## License

Copyright (c) 2010 - 2013 dexteryy  
Licensed under the MIT license.



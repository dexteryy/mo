/**
 * Standalone jQuery.browsers supports skin browsers popular in China 
 *
 * using AMD (Asynchronous Module Definition) API with OzJS
 * see http://ozjs.org for details
 *
 * Copyright (C) 2010-2012, Dexter.Yy, MIT License
 * vim: et:ts=4:sw=4:sts=4
 */
if (typeof module === 'undefined' 
        && (typeof define !== 'function' || !define.amd)) {
    define = function(mid, deps, factory){
        (this.mo || (this.mo = {})).browsers = factory();
    };
}
define("mo/browsers", [], function(){

var match, skin, os, is_mobile_webkit, is_touch, is_webview,
    ua = this.navigator.userAgent.toLowerCase(),
    rank = { 
        "360ee": 2,
        "maxthon/3": 2,
        "qqbrowser": 2,
        "metasr": 2,
        "360se": 1,
        "theworld": 1,
        "maxthon": 1,
        "tencenttraveler": -1
    };

try {
    var rwindows = /(windows) nt ([\w.]+)/,
        rmac = /(mac) os \w+ ([\w.]+)/,
        rwindowsphone = /(windows phone)[\sos]* ([\w.]+)/,
        riphone = /(iphone).*? os ([\w.]+)/,
        ripad = /(ipad).*? os ([\w.]+)/,
        randroid = /(android)[ ;]([\w.]*)/,
        rmobilewebkit = /(\w+)[ \/]([\w.]+)[ \/]mobile/,
        rsafari = /(\w+)[ \/]([\w.]+)[ \/]safari/,
        rmobilesafari = /[ \/]mobile.*safari/,
        rwebview = /[ \/]mobile/,
        rtouch = / touch/,
        rwebkit = /(webkit)[ \/]([\w.]+)/,
        ropera = /(opera)(?:.*version)?[ \/]([\w.]+)/,
        rmsie = /(msie) ([\w.]+)/,
        rie11 = /(trident).*? rv:([\w.]+)/,
        rmozilla = /(mozilla)(?:.*? rv:([\w.]+))?/;

    var r360se = /(360se)/,
        r360ee = /(360ee)/,
        r360phone = /(360) \w+phone/,
        rtheworld = /(theworld)/,
        rmaxthon3 = /(maxthon\/3)/,
        rmaxthon = /(maxthon)/,
        rtt = /(tencenttraveler)/,
        rqq = /(qqbrowser)/,
        rbaidu = /(baidubrowser)/,
        ruc = /(ucbrowser)/,
        rsogou = /(sogou\w*browser)/,
        rmetasr = /(metasr)/;

    os = riphone.exec(ua) 
        || ripad.exec(ua) 
        || randroid.exec(ua) 
        || rmac.exec(ua) 
        || rwindowsphone.exec(ua) 
        || rwindows.exec(ua) 
        || [];

    skin = r360se.exec(ua) 
        || r360ee.exec(ua) 
        || r360phone.exec(ua) 
        || ruc.exec(ua) 
        || rtheworld.exec(ua) 
        || rmaxthon3.exec(ua) 
        || rmaxthon.exec(ua) 
        || rtt.exec(ua) 
        || rqq.exec(ua) 
        || rbaidu.exec(ua) 
        || rsogou.exec(ua) 
        || rmetasr.exec(ua) 
        || [];

    match =  rwebkit.exec(ua) 
        || ropera.exec(ua) 
        || rmsie.exec(ua) 
        || rie11.exec(ua)
        || ua.indexOf("compatible") < 0 && rmozilla.exec(ua) 
        || [];

    is_mobile_webkit = rmobilesafari.exec(ua) 
        || (is_webview = rwebview.exec(ua));

    is_touch = rtouch.exec(ua);

    if (match[1] === 'trident') {
        match[1] = 'msie';
    }

    if (match[1] === 'webkit') {
        var vendor = (is_mobile_webkit ? rmobilewebkit.exec(ua)
            : rsafari.exec(ua)) || [];
        match[3] = match[1];
        match[4] = match[2];
        match[1] = vendor[1] === 'version' 
            && ((os[1] === 'iphone' 
                    || os[1] === 'ipad')
                    && 'mobilesafari'
                || os[1] === 'android' 
                    && 'aosp' 
                || 'safari')
            || skin[1]
            || is_webview && 'webview'
            || vendor[1];
        match[2] = vendor[2];
    }

} catch (ex) {
    match = [];
    skin = [];
}

var result = { 
    browser: match[1] || skin[1] || "", 
    version: match[2] || "0",
    engine: match[3],
    engineversion: match[4] || "0",
    os: os[1],
    osversion: os[2] || "0",
    isMobile: os[1] === 'iphone'
        || os[1] === 'windows phone'
        || os[1] === 'android' && !!is_mobile_webkit,
    isTouch: os[1] === 'iphone'
        || os[1] === 'windows phone'
        || os[1] === 'android'
        || os[1] === 'windows' && is_touch,
    skin: skin[1] || "",
    ua: ua
};

if (match[1]) {
    result[match[1]] = parseInt(result.version, 10) || true;
}
if (skin[1]) {
    result.rank = rank[result.skin] || 0;
}
result.shell = result.skin;

return result;

});

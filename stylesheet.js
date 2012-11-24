/**
 * using AMD (Asynchronous Module Definition) API with OzJS
 * see http://dexteryy.github.com/OzJS/ for details
 *
 * Copyright (C) 2010-2012, Dexter.Yy, MIT License
 * vim: et:ts=4:sw=4:sts=4
 */
define("mo/stylesheet", ["mo/lang", "host"], function(_, host){

    return {
        /**
         * @public 获取一个可以编辑的style标签
         * @param {string} sid是style标签的id
         * @return {DOM} 返回style标签的对象
         */
        open: function(sid) {
            var styleElm = document.getElementById("oz_" + sid); //使用页面里现有的style，方便统一删除
            if(!styleElm){
                styleElm = document.createElement("style"); //用TUI.addElm插入的时候在ie里无效
                styleElm.id = "oz_" + sid;
                document.getElementsByTagName("head")[0].appendChild(styleElm); //必须嵌入head，否则webkit里不生效
            }
            return styleElm;
        },
        
        /**
         * @public 在页面里新建样式表，写入指定的样式
         * @param {string} selector是选择器
         * @param {string} styles是样式属性和值
         * @param {int} * n用来指定在样式表第几行写入，默认在末尾
         */
        insert: function(selector, styles, n){
            var styleElm = this.open("insertSheet");
            var sheet = styleElm.styleSheet || styleElm.sheet;
            if (!n) 
                n = ( sheet.cssRules || sheet.rules ).length;
            if (sheet.insertRule) {  // for W3C API
                sheet.insertRule("html " + selector + "{" + styles + "}", n);
            } else if (sheet.addRule) { // for IE
                selector = selector.split(","); //IE的addRule方法不支持直接写多行的选择器
                for(var i = 0, l = selector.length; i < l; i++)
                    sheet.addRule("html "+ selector[i], styles, n++);			
            }
        },
        
        /**
         * @private 批量应用样式
         */
        insertText: function(css, noreplace) {
            var msheet = this.open("manualSheet");
            css = css || " "; //防止ie崩溃
            try{
                if( msheet.styleSheet ) { //for IE
                    msheet.styleSheet.cssText = css;
                } else {
                    var cssText = document.createTextNode(css);
                    var old = msheet.childNodes[0];
                    if(!noreplace && old)
                        msheet.replaceChild(cssText, msheet.childNodes[0]);
                    else
                        msheet.appendChild(cssText);
                }
            }catch(e){}
        }

    };

});

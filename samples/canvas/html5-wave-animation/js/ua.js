function ua(t, e, i) {
    "use strict";
    var n = function () {
        var t = navigator.userAgent.toLowerCase()
            , e = navigator.appVersion.toLowerCase()
            , i = navigator.platform.toLowerCase()
            , n = {
                isLtIE11: !1,
                isIE: !1,
                isIE6: !1,
                isIE7: !1,
                isIE8: !1,
                isIE9: !1,
                isIE10: !1,
                isIE11: !1,
                isEdge: !1,
                isChrome: !1,
                isSafari: !1,
                isFirefox: !1,
                isOpera: !1,
                isCriOS: !1,
                isIPhone: !1,
                isIPad: !1,
                isIPod: !1,
                isAndroidMobile: !1,
                isAndroidTablet: !1,
                isLtAndroid5: !1,
                isWin: !1,
                isMac: !1,
                isIOS: !1,
                isMobile: !1,
                browser: t
            };
        n.isLtIE11 = t.indexOf("msie") > -1 && t.indexOf("opera") == -1,
            n.isIE6 = n.isLtIE11 && e.indexOf("msie 6.") > -1,
            n.isIE7 = n.isLtIE11 && e.indexOf("msie 7.") > -1,
            n.isIE8 = n.isLtIE11 && e.indexOf("msie 8.") > -1,
            n.isIE9 = n.isLtIE11 && e.indexOf("msie 9.") > -1,
            n.isIE10 = n.isLtIE11 && e.indexOf("msie 10.") > -1,
            n.isIE11 = t.indexOf("trident/7") > -1,
            n.isIE = n.isLtIE11 || n.isIE11,
            n.isEdge = t.indexOf("edge") > -1,
            n.isChrome = t.indexOf("chrome") > -1 && t.indexOf("edge") == -1,
            n.isCriOS = t.indexOf("crios") > -1,
            n.isFirefox = t.indexOf("firefox") > -1,
            n.isSafari = t.indexOf("safari") > -1 && t.indexOf("chrome") == -1,
            n.isOpera = t.indexOf("opera") > -1,
            n.isIPhone = t.indexOf("iphone") > -1,
            n.isIPad = t.indexOf("ipad") > -1,
            n.isIPod = t.indexOf("ipod") > -1,
            n.isIOS = n.isIPhone || n.isIPad || n.isIPod,
            n.isWin = i.indexOf("win") > -1,
            n.isMac = i.indexOf("mac") > -1;
        var r = function () {
            var t = navigator.userAgent;
            if (t.indexOf("Android") > 0) {
                var e = parseFloat(t.slice(t.indexOf("Android") + 8));
                return e
            }
        };
        return r() >= 5 ? n.isLtAndroid5 = !1 : r() && (n.isLtAndroid5 = !0),
            n.isAndroidMobile = t.indexOf("android") > -1 && t.indexOf("mobile") > -1,
            n.isAndroidTablet = t.indexOf("android") > -1 && t.indexOf("mobile") == -1,
            n.isMobile = n.isIPhone || n.isIPad || n.isIPod || n.isAndroidMobile || n.isAndroidTablet,
            n
    };
    e.exports = n()
}
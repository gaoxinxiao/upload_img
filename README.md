 ! function (n) {
            var o = {};

            function r(e) {
                if (o[e]) return o[e].exports;
                var t = o[e] = {
                    i: e,
                    l: !1,
                    exports: {}
                };
                return n[e].call(t.exports, t, t.exports, r), t.l = !0, t.exports
            }
            r.m = n, r.c = o, r.d = function (e, t, n) {
                r.o(e, t) || Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: n
                })
            }, r.r = function (e) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                }), Object.defineProperty(e, "__esModule", {
                    value: !0
                })
            }, r.t = function (t, e) {
                if (1 & e && (t = r(t)), 8 & e) return t;
                if (4 & e && "object" == typeof t && t && t.__esModule) return t;
                var n = Object.create(null);
                if (r.r(n), Object.defineProperty(n, "default", {
                        enumerable: !0,
                        value: t
                    }), 2 & e && "string" != typeof t)
                    for (var o in t) r.d(n, o, function (e) {
                        return t[e]
                    }.bind(null, o));
                return n
            }, r.n = function (e) {
                var t = e && e.__esModule ? function () {
                    return e.default
                } : function () {
                    return e
                };
                return r.d(t, "a", t), t
            }, r.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }, r.p = "", r(r.s = 0)
        }([function (e, t, n) {
            n(1), e.exports = n(2)
        }, function (e, t, n) {
            var o, g, r, i, s;
            ! function (S) {
                sessionStorage || (S.sessionStorage = {}), localStorage || (S.localStorage = {});
                var E = S.localStorage,
                    t = S.location.href.split("?")[0],
                    s = performance && performance.timing,
                    x = performance && "function" == typeof performance.getEntries ? performance.getEntries() :
                    null,
                    c = sessionStorage.CUSTOMER_WEB_MONITOR_ID || "webfunny282",
                    n = "2.3.5",
                    e = -1 === S.location.href.indexOf("https") ? "http://" : "https://",
                    o = (S.location.href, ""),
                    r = e + "localhost:8011",
                    h = "/server/upLog",
                    p = "/server/upDLog",
                    T = r + h,
                    i = r + p,
                    f = r,
                    O = "CUSTOMER_PV",
                    a = "STAY_TIME",
                    u = "CUS_LEAVE",
                    d = "LOAD_PAGE",
                    y = "HTTP_LOG",
                    l = "JS_ERROR",
                    m = "SCREEN_SHOT",
                    g = "ELE_BEHAVIOR",
                    v = "RESOURCE_LOAD",
                    w = "CUSTOMIZE_BEHAVIOR",
                    b = "VIDEOS_EVENT",
                    _ = "LAST_BROWSE_DATE",
                    U = "WM_PAGE_ENTRY_TIME",
                    I = "WM_VISIT_PAGE_COUNT",
                    C = (S.navigator.userAgent, new function () {
                        this.checkSl = function (e) {
                            var t = E.sl;
                            return !t || -1 != t.indexOf(e)
                        }, this.getIp = function (n) {
                            if ("1" != C.getCookie("webfunny_cj_status"))
                                if (C.getCookie("webfunny_ip")) "function" == typeof n && n();
                                else {
                                    var o = new Date;
                                    o.setTime(o.getTime() + 864e5), C.loadJs(e +
                                        "pv.sohu.com/cityjson?ie=utf-8",
                                        function () {
                                            var e = returnCitySN ? returnCitySN.cip : "",
                                                t = encodeURIComponent(returnCitySN ? returnCitySN
                                                    .cname : "");
                                            document.cookie = "webfunny_ip=" + e +
                                                ";Path=/;domain=;expires=" + o.toGMTString(),
                                                document.cookie = "webfunny_province=" + t +
                                                ";Path=/;domain=;expires=" + o.toGMTString(),
                                                "function" == typeof n && n()
                                        },
                                        function () {
                                            document.cookie =
                                                "webfunny_cj_status=1;Path=/;domain=;expires=" + o
                                                .toGMTString(), "function" == typeof n && n()
                                        })
                                }
                            else "function" == typeof n && n()
                        }, this.getUuid = function () {
                            var e = C.formatDate((new Date).getTime(), "yMdhms");
                            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (
                            e) {
                                var t = 16 * Math.random() | 0;
                                return ("x" == e ? t : 3 & t | 8).toString(16)
                            }) + "-" + e
                        }, this.getCustomerKey = function () {
                            var e = this.getUuid(),
                                t = C.getCookie("monitorCustomerKey");
                            if (!t) {
                                var n = new Date;
                                n.setTime(n.getTime() + 15552e7), document.cookie =
                                    "monitorCustomerKey=" + e + ";Path=/;domain=" + o + ";expires=" + n
                                    .toGMTString(), t = e
                            }
                            return t
                        }, this.getCookie = function (e) {
                            var t, n = new RegExp("(^| )" + e + "=([^;]*)(;|$)");
                            return document.cookie.match(n) ? (t = document.cookie.match(n), unescape(t[
                                2])) : ""
                        }, this.isTodayBrowse = function (e) {
                            var t = E[e],
                                n = (new Date).getFullYear() + "-" + ((new Date).getMonth() + 1) + "-" +
                                (new Date).getDate();
                            return t && n == t ? !(!t || n != t) : (E[e] = n, !1)
                        }, this.formatDate = function (e, t) {
                            var n = new Date(e).getFullYear(),
                                o = new Date(e).getMonth() + 1,
                                r = new Date(e).getDate(),
                                i = new Date(e).getHours(),
                                s = new Date(e).getMinutes(),
                                a = new Date(e).getSeconds();
                            return o = 9 < o ? o : "0" + o, r = 9 < r ? r : "0" + r, i = 9 < i ? i :
                                "0" + i, s = 9 < s ? s : "0" + s, a = 9 < a ? a : "0" + a, t.replace(
                                    "y", n).replace("M", o).replace("d", r).replace("h", i).replace("m",
                                    s).replace("s", a)
                        }, this.getPageKey = function () {
                            var e = this.getUuid();
                            return E.monitorPageKey &&
                                /^[0-9a-z]{8}(-[0-9a-z]{4}){3}-[0-9a-z]{12}-\d{13}$/.test(E
                                    .monitorPageKey) || (E.monitorPageKey = e), E.monitorPageKey
                        }, this.setPageKey = function () {
                            E.monitorPageKey = this.getUuid()
                        }, this.addLoadEvent = function (e) {
                            var t = S.onload;
                            "function" != typeof S.onload ? S.onload = e : S.onload = function () {
                                t(), e()
                            }
                        }, this.addOnBeforeUnloadEvent = function (e) {
                            var t = S.onbeforeunload;
                            "function" != typeof S.onbeforeunload ? S.onbeforeunload = e : S
                                .onbeforeunload = function () {
                                    t(), e()
                                }
                        }, this.addOnclickForDocument = function (e) {
                            var t = document.onclick;
                            "function" != typeof document.onclick ? document.onclick = e : document
                                .onclick = function () {
                                    t(), e()
                                }
                        }, this.ajax = function (e, t, n, o, r) {
                            try {
                                var i = S.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject(
                                    "Microsoft.XMLHTTP");
                                i.open(e, t, !0), i.setRequestHeader("Content-Type",
                                        "application/x-www-form-urlencoded"), i.onreadystatechange =
                                    function () {
                                        if (4 == i.readyState) {
                                            var t = {};
                                            try {
                                                t = i.responseText ? JSON.parse(i.responseText) : {}
                                            } catch (e) {
                                                console.warn(e), t = {}
                                            }
                                            "function" == typeof o && o(t)
                                        }
                                    }, i.onerror = function () {
                                        "function" == typeof r && r()
                                    };
                                var s = JSON.stringify(n || {});
                                i.send("data=" + s)
                            } catch (e) {
                                console.warn(e)
                            }
                        }, this.initDebugTool = function () {
                            var s = (E.wmUserInfo ? JSON.parse(E.wmUserInfo) : {}).userId;

                            function t(e) {
                                for (var t = [], n = e.length, o = 0; o < n; o++) t.push(e[o]);
                                var r = {};
                                r.log = t, r.userId = s, r.happenTime = (new Date).getTime();
                                var i = "";
                                try {
                                    i = S.LZString.compressToEncodedURIComponent(JSON.stringify(r))
                                } catch (e) {
                                    i = "Lz convert fail"
                                }
                                return i
                            }
                            var n = console.log,
                                o = console.warn;
                            console.log = function () {
                                var e = t(arguments);
                                return "connected" === E.ds && C.ajax("POST", i, {
                                    consoleInfo: e
                                }, function () {}), n.apply(console, arguments)
                            }, console.warn = function () {
                                var e = t(arguments);
                                return "connected" === E.ds && C.ajax("POST", i, {
                                    warnInfo: e
                                }, function () {}), o.apply(console, arguments)
                            }
                        }, this.uploadLocalInfo = function () {
                            var e = (E.wmUserInfo ? JSON.parse(E.wmUserInfo) : {}).userId,
                                t = {};
                            for (key in E) "function" == typeof E[key] || -1 != F.indexOf(key) || 1e3 <
                                E[key].length || (t[key] = E[key]);
                            try {
                                t = C.b64EncodeUnicode(JSON.stringify(t))
                            } catch (e) {
                                t = ""
                            }
                            var n = {};
                            for (key in sessionStorage) "function" == typeof sessionStorage[key] || -
                                1 != F.indexOf(key) || 1e3 < sessionStorage[key].length || (n[key] =
                                    sessionStorage[key]);
                            try {
                                n = C.b64EncodeUnicode(JSON.stringify(n))
                            } catch (e) {
                                n = ""
                            }
                            var o = C.b64EncodeUnicode(encodeURIComponent(document.cookie));
                            C.ajax("POST", i, {
                                localInfo: t,
                                sessionInfo: n,
                                cookieInfo: o,
                                userId: e
                            }, function (e) {
                                if ((setTimeout(function () {
                                        C.uploadLocalInfo()
                                    }, 2e4), e.data) && 1 == e.data.clear) {
                                    var t = E.wmUserInfo;
                                    localStorage.clear(), localStorage.wmUserInfo = t,
                                        sessionStorage.clear();
                                    var n = document.cookie.match(/[^ =;]+(?=\=)/g);
                                    if (n)
                                        for (var o = n.length; o--;) document.cookie = n[o] +
                                            "=0;path=/;expires=" + new Date(0).toUTCString()
                                }
                            })
                        }, this.encryptObj = function (e) {
                            if (e instanceof Array) {
                                for (var t = [], n = 0; n < e.length; ++n) t[n] = this.encryptObj(e[n]);
                                return t
                            }
                            if (e instanceof Object) {
                                t = {};
                                for (var n in e) t[n] = this.encryptObj(e[n]);
                                return t
                            }
                            return 50 < (e += "").length && (e = e.substring(0, 10) + "****" + e
                                .substring(e.length - 9, e.length)), e
                        }, this.getDevice = function () {
                            var e = {},
                                t = navigator.userAgent,
                                n = t.match(/(Android);?[\s\/]+([\d.]+)?/),
                                o = t.match(/(iPad).*OS\s([\d_]+)/),
                                r = t.match(/(iPod)(.*OS\s([\d_]+))?/),
                                i = !o && t.match(/(iPhone\sOS)\s([\d_]+)/),
                                s = t.match(/Android\s[\S\s]+Build\//);
                            if (e.ios = e.android = e.iphone = e.ipad = e.androidChrome = !1, e
                                .isWeixin = /MicroMessenger/i.test(t), e.os = "web", e.deviceName =
                                "PC", n && (e.os = "android", e.osVersion = n[2], e.android = !0, e
                                    .androidChrome = 0 <= t.toLowerCase().indexOf("chrome")), (o || i ||
                                    r) && (e.os = "ios", e.ios = !0), i && !r && (e.osVersion = i[2]
                                    .replace(/_/g, "."), e.iphone = !0), o && (e.osVersion = o[2]
                                    .replace(/_/g, "."), e.ipad = !0), r && (e.osVersion = r[3] ? r[3]
                                    .replace(/_/g, ".") : null, e.iphone = !0), e.ios && e.osVersion &&
                                0 <= t.indexOf("Version/") && "10" === e.osVersion.split(".")[0] && (e
                                    .osVersion = t.toLowerCase().split("version/")[1].split(" ")[0]), e
                                .iphone) {
                                e.deviceName = "iphone";
                                var a = S.screen.width,
                                    c = S.screen.height;
                                320 === a && 480 === c ? e.deviceName = "iphone 4" : 320 === a &&
                                    568 === c ? e.deviceName = "iphone 5/SE" : 375 === a && 667 === c ?
                                    e.deviceName = "iphone 6/7/8" : 414 === a && 736 === c ? e
                                    .deviceName = "iphone 6/7/8 Plus" : 375 === a && 812 === c && (e
                                        .deviceName = "iphone X/S/Max")
                            } else if (e.ipad) e.deviceName = "ipad";
                            else if (s) {
                                var f = s[0].split(";")[1].replace(/Build\//g, "");
                                e.deviceName = f.replace(/(^\s*)|(\s*$)/g, "")
                            }
                            if (-1 == t.indexOf("Mobile")) {
                                var u = navigator.userAgent.toLowerCase();
                                if (e.browserName = "未知", 0 < u.indexOf("msie")) {
                                    var d = u.match(/msie [\d.]+;/gi)[0];
                                    e.browserName = d.split("/")[0], e.browserVersion = d.split("/")[1]
                                }
                                if (0 < u.indexOf("firefox")) {
                                    d = u.match(/firefox\/[\d.]+/gi)[0];
                                    e.browserName = d.split("/")[0], e.browserVersion = d.split("/")[1]
                                }
                                if (0 < u.indexOf("safari") && u.indexOf("chrome") < 0) {
                                    d = u.match(/safari\/[\d.]+/gi)[0];
                                    e.browserName = d.split("/")[0], e.browserVersion = d.split("/")[1]
                                }
                                if (0 < u.indexOf("chrome")) {
                                    d = u.match(/chrome\/[\d.]+/gi)[0];
                                    e.browserName = d.split("/")[0], e.browserVersion = d.split("/")[1]
                                }
                            }
                            return e.webView = (i || o || r) && t.match(/.*AppleWebKit(?!.*Safari)/i), e
                        }, this.loadJs = function (e, t, n) {
                            var o = document.createElement("script");
                            o.async = 1, o.src = e, o.onload = t, "function" == typeof n && (o.onerror =
                                n);
                            var r = document.getElementsByTagName("script")[0];
                            return r.parentNode.insertBefore(o, r), r
                        }, this.b64EncodeUnicode = function (t) {
                            try {
                                return btoa(encodeURIComponent(t).replace(/%([0-9A-F]{2})/g, function (
                                    e, t) {
                                    return String.fromCharCode("0x" + t)
                                }))
                            } catch (e) {
                                return t
                            }
                        }
                    }),
                    k = C.getDevice(),
                    N = "",
                    A = "",
                    P = "",
                    L = "",
                    j = "",
                    R = "",
                    D = "1",
                    $ = "2",
                    M = "3",
                    B = "4",
                    J = "5",
                    V = E.wmUserInfo ? JSON.parse(E.wmUserInfo) : {},
                    F = [g, l, y, m, O, d, v, w, b];

                function H() {
                    this.handleLogInfo = function (e, t) {
                        var n = E[e] ? E[e] : "";
                        switch (e) {
                            case g:
                                E[g] = n + JSON.stringify(t) + "$$$";
                                break;
                            case l:
                                E[l] = n + JSON.stringify(t) + "$$$";
                                break;
                            case y:
                                E[y] = n + JSON.stringify(t) + "$$$";
                                break;
                            case m:
                                E[m] = n + JSON.stringify(t) + "$$$";
                                break;
                            case O:
                                E[O] = n + JSON.stringify(t) + "$$$";
                                break;
                            case d:
                                E[d] = n + JSON.stringify(t) + "$$$";
                                break;
                            case v:
                                E[v] = n + JSON.stringify(t) + "$$$";
                                break;
                            case w:
                                E[w] = n + JSON.stringify(t) + "$$$";
                                break;
                            case b:
                                E[b] = n + JSON.stringify(t) + "$$$"
                        }
                    }
                }

                function q() {
                    this.wmVersion = n, this.h = (new Date).getTime(), this.a = c, this.g = S.location.href
                        .split("?")[0], this.f = C.b64EncodeUnicode(encodeURIComponent(S.location.href)), this
                        .b = C.getCustomerKey();
                    var e = E.wmUserInfo ? JSON.parse(E.wmUserInfo) : {};
                    this.c = e.userId, this.d = C.b64EncodeUnicode(encodeURIComponent(e.userTag || "")), this
                        .e = C.b64EncodeUnicode(encodeURIComponent(e.secondUserParam || ""))
                }

                function K(e, t, n, o, r) {
                    q.apply(this), this.i = e, this.j = C.b64EncodeUnicode(V.projectVersion || ""), this.k = C
                        .getPageKey(), this.l = k.deviceName, this.m = k.os + (k.osVersion ? " " + k.osVersion :
                            ""), this.n = k.browserName, this.o = k.browserVersion, this.p = C.getCookie(
                            "webfunny_ip"), this.q = "china", this.r = C.getCookie("webfunny_province"), this
                        .s = "", this.t = t, this.u = n, this.newStatus = o, this.referrer = (r || "").split(
                            "?")[0]
                }

                function W(e) {
                    this.i = u, this.a = c, this.leaveType = e, this.h = (new Date).getTime(), this.g = S
                        .location.href.split("?")[0], this.b = C.getCustomerKey()
                }

                function X(e) {
                    this.i = a, this.h = (new Date).getTime(), this.a = c, this.g = S.location.href.split("?")[
                        0], this.b = C.getCustomerKey(), this.stayTime = e
                }

                function G(e, t, n, o, r, i, s, a, c, f, u, d) {
                    q.apply(this), this.i = e, this.t = t, this.v = n, this.w = o, this.x = r, this.y = i, this
                        .z = s, this.A = a, this.B = c, this.C = f, this.D = u, this.E = d
                }

                function Y(e, t, n, o, r, i, s) {
                    q.apply(this), this.i = e, this.da = t, this.G = C.b64EncodeUnicode(n), this.H = C
                        .b64EncodeUnicode(o), this.I = C.b64EncodeUnicode(r), this.L = i, this.M = C
                        .b64EncodeUnicode(encodeURIComponent(s))
                }

                function z(e, t, n, o) {
                    q.apply(this), this.i = e, this.O = t, this.k = C.getPageKey(), this.l = k.deviceName, this
                        .m = k.os + (k.osVersion ? " " + k.osVersion : ""), this.n = k.browserName, this.o = k
                        .browserVersion, this.p = C.getCookie("webfunny_ip"), this.q = "china", this.r = "",
                        this.s = "", this.P = C.b64EncodeUnicode(n), this.Q = C.b64EncodeUnicode(o), this.R = ""
                }

                function Z(e, t, n, o, r, i, s, a, c) {
                    q.apply(this), this.i = e, this.g = t, this.S = C.b64EncodeUnicode(encodeURIComponent(n)),
                        this.T = o, this.U = r, this.V = i, this.W = "", this.X = C.b64EncodeUnicode(s), this
                        .h = a, this.u = c
                }

                function Q(e, t, n, o) {
                    q.apply(this), this.i = e, this.Y = C.b64EncodeUnicode(t), this.Z = n, this.aa = o || "jpeg"
                }

                function ee(e, t, n, o) {
                    q.apply(this), this.i = e, this.ba = n, this.ca = C.b64EncodeUnicode(encodeURIComponent(t)),
                        this.T = o
                }

                function te(e, t, n, o, r) {
                    this.c = e, this.a = c, this.da = t, this.ea = n, this.i = o, this.Y = r, this.h = (
                        new Date).getTime()
                }

                function ne() {
                    var e = S.location.href.split("?")[0];
                    t != e && (oe(), t = e)
                }

                function oe() {
                    C.setPageKey();
                    var e = C.isTodayBrowse(_),
                        t = (new Date).getTime();
                    E[U] = t;
                    var n = null,
                        o = C.formatDate(t, "y-M-d"),
                        r = encodeURIComponent(S.location.href.split("?")[0]),
                        i = E[I];
                    if (i) {
                        var s = i.split("$$$"),
                            a = s[0],
                            c = s[1],
                            f = parseInt(s[2], 10);
                        o == c ? r != a && 1 == f && (E[I] = r + "$$$" + o + "$$$2", n = new W(2)) : (E[I] = r +
                            "$$$" + o + "$$$1", n = new W(1))
                    } else E[I] = r + "$$$" + o + "$$$1", n = new W(1);
                    var u = "";
                    x && (u = x[0] && "navigate" === x[0].type ? "load" : "reload");
                    var d = C.getCookie("monitorCustomerKey");
                    if (d) {
                        var l = "",
                            h = d ? d.match(/\d{14}/g) : [];
                        if (h && 0 < h.length) {
                            var p = h[0].match(/\d{2}/g),
                                y = p[0] + p[1] + "-" + p[2] + "-" + p[3] + " " + p[4] + ":" + p[5] + ":" + p[
                                6],
                                m = new Date(y).getTime(),
                                g = (new Date).getTime();
                            l = 2e3 < g - m ? 0 == e ? "o_uv" : "o" : "n_uv"
                        }
                    } else l = "n_uv";
                    var v = document.referrer;

                    function w() {
                        function e() {
                            var e = new K(O, u, 0, l, v),
                                t = JSON.stringify(e) + "$$$";
                            n && (t += JSON.stringify(n) + "$$$"), C.ajax("POST", T, {
                                logInfo: t
                            }, function (e) {
                                e && e.data && e.data.d && (E.ds = "c" == e.data.d ? "connected" :
                                    "disconnect", E.sl = e.data.s || "012345", E
                                    .WEBFUNNY_WAIT_COUNT = e.data.w || "40")
                            }, function () {})
                        }(E.wmUserInfo ? JSON.parse(E.wmUserInfo) : {}).userId ? e() : setTimeout(function () {
                            e()
                        }, 2e3)
                    }
                    var b = E.ds;
                    b ? ("connected" === b && C.initDebugTool(), setTimeout(function () {
                        "connected" === b && C.uploadLocalInfo()
                    }, 2e3), w()) : C.getIp(function () {
                        w()
                    })
                }

                function re(e, t, n, o, r, i) {
                    ne();
                    var s = t || "",
                        a = i || "",
                        c = "";
                    s && (c = "string" == typeof a ? a.split(": ")[0].replace('"', "") : JSON.stringify(a)
                        .split(": ")[0].replace('"', ""));
                    var f = new z(l, e, c + ": " + s, a);
                    f.handleLogInfo(l, f)
                }

                function ie() {
                    var o = console.error;
                    console.error = function (e) {
                        if (C.checkSl($)) {
                            var t = e && e.message || e,
                                n = e && e.stack;
                            if (n) re("on_error", t, 0, 0, 0, n);
                            else {
                                if ("object" == typeof t) try {
                                    t = JSON.stringify(t)
                                } catch (e) {
                                    t = "错误无法解析"
                                }
                                re("console_error", t, 0, 0, 0, "CustomizeError: " + t)
                            }
                            return o.apply(console, arguments)
                        }
                    }, S.onerror = function (e, t, n, o, r) {
                        C.checkSl($) && re("on_error", e, 0, 0, 0, r ? r.stack : null)
                    }, S.onunhandledrejection = function (e) {
                        if (C.checkSl($)) {
                            var t = "",
                                n = "";
                            n = "object" == typeof e.reason ? (t = e.reason.message, e.reason.stack) : (t =
                                e.reason, ""), re("on_error", t, 0, 0, 0, "UncaughtInPromiseError: " +
                                n)
                        }
                    }
                }

                function se() {
                    function t(e) {
                        var t = new CustomEvent(e, {
                            detail: this
                        });
                        S.dispatchEvent(t)
                    }
                    var n = S.XMLHttpRequest;

                    function r(e, t) {
                        if (l[e] && !0 !== l[e].uploadFlag) {
                            var n = "",
                                o = parseInt("500") || 500;
                            if (t && n.length < o) try {
                                n = t ? JSON.stringify(C.encryptObj(JSON.parse(t))) : ""
                            } catch (e) {
                                n = ""
                            } else n = "too long";
                            var r = l[e].simpleUrl,
                                i = (new Date).getTime(),
                                s = l[e].event.detail.responseURL,
                                a = l[e].event.detail.status,
                                c = l[e].event.detail.statusText,
                                f = i - l[e].timeStamp;
                            if (s && -1 == s.indexOf(h) && -1 == s.indexOf(p)) {
                                var u = new Z(y, r, s, a, c, "发起请求", "", l[e].timeStamp, 0);
                                u.handleLogInfo(y, u);
                                var d = new Z(y, r, s, a, c, "请求返回", n, i, f);
                                d.handleLogInfo(y, d), l[e].uploadFlag = !0
                            }
                        }
                    }
                    var l = [];
                    S.XMLHttpRequest = function () {
                        var e = new n;
                        return e.addEventListener("abort", function () {
                            t.call(this, "ajaxAbort")
                        }, !1), e.addEventListener("error", function () {
                            t.call(this, "ajaxError")
                        }, !1), e.addEventListener("load", function () {
                            t.call(this, "ajaxLoad")
                        }, !1), e.addEventListener("loadstart", function () {
                            t.call(this, "ajaxLoadStart")
                        }, !1), e.addEventListener("progress", function () {
                            t.call(this, "ajaxProgress")
                        }, !1), e.addEventListener("timeout", function () {
                            t.call(this, "ajaxTimeout")
                        }, !1), e.addEventListener("loadend", function () {
                            t.call(this, "ajaxLoadEnd")
                        }, !1), e.addEventListener("readystatechange", function () {
                            t.call(this, "ajaxReadyStateChange")
                        }, !1), e
                    }, S.addEventListener("ajaxLoadStart", function (e) {
                        if (C.checkSl(M)) {
                            var t = {
                                timeStamp: (new Date).getTime(),
                                event: e,
                                simpleUrl: S.location.href.split("?")[0],
                                uploadFlag: !1
                            };
                            l.push(t)
                        }
                    }), S.addEventListener("ajaxLoadEnd", function () {
                        if (C.checkSl(M))
                            for (var o = 0; o < l.length; o++) {
                                if (!0 !== l[o].uploadFlag)
                                    if (0 < l[o].event.detail.status)
                                        if ("blob" === (l[o].event.detail.responseType + "")
                                            .toLowerCase()) ! function (t) {
                                            var n = new FileReader;
                                            n.onload = function () {
                                                var e = n.result;
                                                r(t, e)
                                            };
                                            try {
                                                n.readAsText(l[o].event.detail.response, "utf-8")
                                            } catch (e) {
                                                r(t, l[o].event.detail.response + "")
                                            }
                                        }(o);
                                        else try {
                                            var e = l[o] && l[o].event && l[o].event.detail;
                                            if (!e) return;
                                            var t = e.responseType,
                                                n = "";
                                            "" !== t && "text" !== t || (n = e.responseText),
                                                "json" === t && (n = JSON.stringify(e.response)), r(
                                                    o, n)
                                        } catch (e) {}
                            }
                    })
                }

                function ae(e) {
                    e && e.record && 1 == e.record && (ne(), C.addOnclickForDocument(function (e) {
                        if (C.checkSl(J) && e) {
                            var t = "",
                                n = "",
                                o = "",
                                r = e.target.tagName,
                                i = "";
                            "svg" != e.target.tagName && "use" != e.target.tagName && (t = e.target
                                .className, n = e.target.placeholder || "", o = e.target
                                .value || "", 200 < (i = e.target.innerText ? e.target.innerText
                                    .replace(/\s*/g, "") : "").length && (i = i.substring(0,
                                    100) + "... ..." + i.substring(i.length - 99, i.length -
                                    1)), i = i.replace(/\s/g, ""));
                            var s = new Y(g, "click", t, n, o, r, i);
                            s.handleLogInfo(g, s)
                        }
                    }))
                }
                K.prototype = new H, W.prototype = new H, X.prototype = new H, G.prototype = new H, Y
                    .prototype = new H, z.prototype = new H, Z.prototype = new H, Q.prototype = new H, ee
                    .prototype = new H, te.prototype = new H, new H,
                    function () {
                        C.getIp();
                        var e = E.sl,
                            t = ["0", D, $, M, B, J];
                        e && (t = e.split(""));
                        try {
                            for (var n = "启动...", o = 0; o < t.length; o++) switch (t[o]) {
                                case "0":
                                    oe(), N = n;
                                    break;
                                case D:
                                    S.addEventListener("error", function (e) {
                                        if (C.checkSl(D)) {
                                            var t = e.target.localName,
                                                n = "";
                                            if ("link" === t ? n = e.target.href : "script" === t &&
                                                (n = e.target.src), -1 == (n = n ? n.split("?")[0] :
                                                    "").indexOf("pv.sohu.com/cityjson")) {
                                                var o = new ee(v, n, t, "0");
                                                o.handleLogInfo(v, o)
                                            }
                                        }
                                    }, !0), L = n;
                                    break;
                                case $:
                                    ie(), A = n;
                                    break;
                                case M:
                                    se(), P = n;
                                    break;
                                case B:
                                    C.addLoadEvent(function () {
                                        C.checkSl(B) && setTimeout(function () {
                                            if (x) {
                                                var e = "load";
                                                e = x[0] && "navigate" === x[0].type ?
                                                    "load" : "reload";
                                                var t = s,
                                                    n = new G(d);
                                                n.loadType = e, n.lookupDomain = t
                                                    .domainLookupEnd - t.domainLookupStart,
                                                    n.connect = t.connectEnd - t
                                                    .connectStart, n.request = t
                                                    .responseEnd - t.requestStart, n.ttfb =
                                                    t.responseStart - t.navigationStart, n
                                                    .domReady = t.domComplete - t
                                                    .responseEnd, n.loadPage = t
                                                    .loadEventEnd - t.navigationStart, n
                                                    .redirect = t.redirectEnd - t
                                                    .redirectStart, n.loadEvent = t
                                                    .loadEventEnd - t.loadEventStart, n
                                                    .appcache = t.domainLookupStart - t
                                                    .fetchStart, n.unloadEvent = t
                                                    .unloadEventEnd - t.unloadEventStart, n
                                                    .handleLogInfo(d, n)
                                            }
                                        }, 1e3)
                                    }), R = n;
                                    break;
                                case J:
                                    ae({
                                        record: 1
                                    }), j = n
                            }
                            C.addOnBeforeUnloadEvent(function () {
                                var e = parseInt(E[U], 10),
                                    t = (new Date).getTime() - e,
                                    n = JSON.stringify(new X(t));
                                navigator && "function" == typeof navigator.sendBeacon && navigator
                                    .sendBeacon(T, n)
                            });
                            var r = 0,
                                i = F;
                            setInterval(function () {
                                ne();
                                var e = parseInt(E.WEBFUNNY_WAIT_COUNT || "40", 10);
                                if ((e = "connected" == E.ds ? 5 : e) <= r) {
                                    for (var t = "", n = 0; n < i.length; n++) t += E[i[n]] || "";
                                    0 < t.length && C.ajax("POST", T, {
                                        logInfo: t
                                    }, function (e) {
                                        e && e.data && e.data.d && (E.ds = "c" == e.data.d ?
                                            "connected" : "disconnect", E.sl = e.data.s ||
                                            "012345", E.WEBFUNNY_WAIT_COUNT = e.data.w ||
                                            "40");
                                        for (var t = 0; t < i.length; t++) E[i[t]] = ""
                                    }, function () {
                                        for (var e = 0; e < i.length; e++) E[i[e]] = ""
                                    }), r = 0
                                }
                                r++
                            }, 200)
                        } catch (e) {
                            console.error("监控代码异常，捕获", e)
                        }
                    }(), S.webfunny = {
                        wm_check: function () {
                            var e = "未启动！";
                            return console.log("start check:"), console.log("身份：" + E.wmUserInfo), console
                                .log("标识：" + c), console.log("版本：" + n), console.log("接口：" + T), console
                                .log("启动列表：" + E.sl), console.log("..........."), console.log("PVUV：" + (
                                    N || e)), console.log("静态资源：" + (L || e)), console.log("JS错误：" + (A ||
                                    e)), console.log("接口请求：" + (P || e)), console.log("页面加载：" + (R || e)),
                                console.log("行为记录：" + (j || e)), "end"
                        },
                        wm_upload: function (e, t, n, o) {
                            var r = (new Date).toString(),
                                i = {
                                    createTime: encodeURIComponent(r),
                                    happenTime: (new Date).getTime(),
                                    uploadType: "WM_UPLOAD",
                                    simpleUrl: encodeURIComponent(encodeURIComponent(e)),
                                    webMonitorId: c,
                                    recordType: t,
                                    recordIndex: n,
                                    description: o
                                },
                                s = f,
                                a = S.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject(
                                    "Microsoft.XMLHTTP");
                            a.open("POST", s, !0), a.setRequestHeader("Content-Type",
                                "application/x-www-form-urlencoded"), a.send("data=" + JSON.stringify([
                                i]))
                        },
                        wm_init_user: function (e, t, n) {
                            return e || console.warn("userId 初始化值为0(不推荐) 或者 未初始化"), n || console.warn(
                                    "secondParam 初始化值为0(不推荐) 或者 未初始化"), t && (c = t + "_webmonitor"), E
                                .wmUserInfo = JSON.stringify({
                                    userId: e,
                                    userTag: t,
                                    secondUserParam: n
                                }), 1
                        },
                        wmInitUser: function (e, t) {
                            return E.wmUserInfo = JSON.stringify({
                                userId: e,
                                projectVersion: t
                            }), 1
                        },
                        wm_screen_shot: function () {},
                        wm_upload_picture: function (e, t, n) {
                            var o = new Q(m, t, e, n || "jpeg");
                            o.handleLogInfo(m, o)
                        },
                        wm_upload_extend_log: function (e, t, n, o, r) {
                            var i = new te(e, t, n, o, r);
                            i.handleLogInfo(w, i)
                        }
                    },
                    function () {
                        if ("function" == typeof S.CustomEvent) return;

                        function e(e, t) {
                            t = t || {
                                bubbles: !1,
                                cancelable: !1,
                                detail: void 0
                            };
                            var n = document.createEvent("CustomEvent");
                            return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n
                        }
                        e.prototype = S.Event.prototype, S.CustomEvent = e
                    }()
            }(window), window.LZString = (g = String.fromCharCode, r =
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$", i = {}, s = {
                    compressToEncodedURIComponent: function (e) {
                        return null == e ? "" : s._compress(e, 6, function (e) {
                            return r.charAt(e)
                        })
                    },
                    decompressFromEncodedURIComponent: function (t) {
                        return null == t ? "" : "" == t ? null : (t = t.replace(/ /g, "+"), s
                            ._decompress(t.length, 32, function (e) {
                                return function (e, t) {
                                    if (!i[e]) {
                                        i[e] = {};
                                        for (var n = 0; n < e.length; n++) i[e][e.charAt(
                                            n)] = n
                                    }
                                    return i[e][t]
                                }(r, t.charAt(e))
                            }))
                    },
                    _compress: function (e, t, n) {
                        if (null == e) return "";
                        var o, r, i, s = {},
                            a = {},
                            c = "",
                            f = "",
                            u = "",
                            d = 2,
                            l = 3,
                            h = 2,
                            p = [],
                            y = 0,
                            m = 0;
                        for (i = 0; i < e.length; i += 1)
                            if (c = e.charAt(i), Object.prototype.hasOwnProperty.call(s, c) || (s[c] =
                                    l++, a[c] = !0), f = u + c, Object.prototype.hasOwnProperty.call(s,
                                    f)) u = f;
                            else {
                                if (Object.prototype.hasOwnProperty.call(a, u)) {
                                    if (u.charCodeAt(0) < 256) {
                                        for (o = 0; o < h; o++) y <<= 1, m == t - 1 ? (m = 0, p.push(n(
                                            y)), y = 0) : m++;
                                        for (r = u.charCodeAt(0), o = 0; o < 8; o++) y = y << 1 | 1 & r,
                                            m == t - 1 ? (m = 0, p.push(n(y)), y = 0) : m++, r >>= 1
                                    } else {
                                        for (r = 1, o = 0; o < h; o++) y = y << 1 | r, m == t - 1 ? (m =
                                            0, p.push(n(y)), y = 0) : m++, r = 0;
                                        for (r = u.charCodeAt(0), o = 0; o < 16; o++) y = y << 1 | 1 &
                                            r, m == t - 1 ? (m = 0, p.push(n(y)), y = 0) : m++, r >>= 1
                                    }
                                    0 == --d && (d = Math.pow(2, h), h++), delete a[u]
                                } else
                                    for (r = s[u], o = 0; o < h; o++) y = y << 1 | 1 & r, m == t - 1 ? (
                                        m = 0, p.push(n(y)), y = 0) : m++, r >>= 1;
                                0 == --d && (d = Math.pow(2, h), h++), s[f] = l++, u = String(c)
                            } if ("" !== u) {
                            if (Object.prototype.hasOwnProperty.call(a, u)) {
                                if (u.charCodeAt(0) < 256) {
                                    for (o = 0; o < h; o++) y <<= 1, m == t - 1 ? (m = 0, p.push(n(y)),
                                        y = 0) : m++;
                                    for (r = u.charCodeAt(0), o = 0; o < 8; o++) y = y << 1 | 1 & r,
                                        m == t - 1 ? (m = 0, p.push(n(y)), y = 0) : m++, r >>= 1
                                } else {
                                    for (r = 1, o = 0; o < h; o++) y = y << 1 | r, m == t - 1 ? (m = 0,
                                        p.push(n(y)), y = 0) : m++, r = 0;
                                    for (r = u.charCodeAt(0), o = 0; o < 16; o++) y = y << 1 | 1 & r,
                                        m == t - 1 ? (m = 0, p.push(n(y)), y = 0) : m++, r >>= 1
                                }
                                0 == --d && (d = Math.pow(2, h), h++), delete a[u]
                            } else
                                for (r = s[u], o = 0; o < h; o++) y = y << 1 | 1 & r, m == t - 1 ? (m =
                                    0, p.push(n(y)), y = 0) : m++, r >>= 1;
                            0 == --d && (d = Math.pow(2, h), h++)
                        }
                        for (r = 2, o = 0; o < h; o++) y = y << 1 | 1 & r, m == t - 1 ? (m = 0, p.push(
                            n(y)), y = 0) : m++, r >>= 1;
                        for (;;) {
                            if (y <<= 1, m == t - 1) {
                                p.push(n(y));
                                break
                            }
                            m++
                        }
                        return p.join("")
                    },
                    _decompress: function (e, t, n) {
                        var o, r, i, s, a, c, f, u = [],
                            d = 4,
                            l = 4,
                            h = 3,
                            p = "",
                            y = [],
                            m = {
                                val: n(0),
                                position: t,
                                index: 1
                            };
                        for (o = 0; o < 3; o += 1) u[o] = o;
                        for (i = 0, a = Math.pow(2, 2), c = 1; c != a;) s = m.val & m.position, m
                            .position >>= 1, 0 == m.position && (m.position = t, m.val = n(m.index++)),
                            i |= (0 < s ? 1 : 0) * c, c <<= 1;
                        switch (i) {
                            case 0:
                                for (i = 0, a = Math.pow(2, 8), c = 1; c != a;) s = m.val & m.position,
                                    m.position >>= 1, 0 == m.position && (m.position = t, m.val = n(m
                                        .index++)), i |= (0 < s ? 1 : 0) * c, c <<= 1;
                                f = g(i);
                                break;
                            case 1:
                                for (i = 0, a = Math.pow(2, 16), c = 1; c != a;) s = m.val & m.position,
                                    m.position >>= 1, 0 == m.position && (m.position = t, m.val = n(m
                                        .index++)), i |= (0 < s ? 1 : 0) * c, c <<= 1;
                                f = g(i);
                                break;
                            case 2:
                                return ""
                        }
                        for (r = u[3] = f, y.push(f);;) {
                            if (m.index > e) return "";
                            for (i = 0, a = Math.pow(2, h), c = 1; c != a;) s = m.val & m.position, m
                                .position >>= 1, 0 == m.position && (m.position = t, m.val = n(m
                                    .index++)), i |= (0 < s ? 1 : 0) * c, c <<= 1;
                            switch (f = i) {
                                case 0:
                                    for (i = 0, a = Math.pow(2, 8), c = 1; c != a;) s = m.val & m
                                        .position, m.position >>= 1, 0 == m.position && (m.position = t,
                                            m.val = n(m.index++)), i |= (0 < s ? 1 : 0) * c, c <<= 1;
                                    u[l++] = g(i), f = l - 1, d--;
                                    break;
                                case 1:
                                    for (i = 0, a = Math.pow(2, 16), c = 1; c != a;) s = m.val & m
                                        .position, m.position >>= 1, 0 == m.position && (m.position = t,
                                            m.val = n(m.index++)), i |= (0 < s ? 1 : 0) * c, c <<= 1;
                                    u[l++] = g(i), f = l - 1, d--;
                                    break;
                                case 2:
                                    return y.join("")
                            }
                            if (0 == d && (d = Math.pow(2, h), h++), u[f]) p = u[f];
                            else {
                                if (f !== l) return null;
                                p = r + r.charAt(0)
                            }
                            y.push(p), u[l++] = r + p.charAt(0), r = p, 0 == --d && (d = Math.pow(2, h),
                                h++)
                        }
                    }
                }), void 0 === (o = function () {
                return window.LZString
            }.call(t, n, t, e)) || (e.exports = o)
        }, function (e, t) {
            ! function (e) {
                var t = "URLSearchParams" in e,
                    n = "Symbol" in e && "iterator" in Symbol,
                    s = "FileReader" in e && "Blob" in e && function () {
                        try {
                            return new Blob, !0
                        } catch (e) {
                            return !1
                        }
                    }(),
                    o = "FormData" in e,
                    r = "ArrayBuffer" in e;
                if (r) var i = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]",
                        "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]",
                        "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"
                    ],
                    a = function (e) {
                        return e && DataView.prototype.isPrototypeOf(e)
                    },
                    c = ArrayBuffer.isView || function (e) {
                        return e && -1 < i.indexOf(Object.prototype.toString.call(e))
                    };

                function f(e) {
                    if ("string" != typeof e && (e = String(e)), /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e))
                    throw new TypeError("Invalid character in header field name");
                    return e.toLowerCase()
                }

                function u(e) {
                    return "string" != typeof e && (e = String(e)), e
                }

                function d(t) {
                    var e = {
                        next: function () {
                            var e = t.shift();
                            return {
                                done: void 0 === e,
                                value: e
                            }
                        }
                    };
                    return n && (e[Symbol.iterator] = function () {
                        return e
                    }), e
                }

                function l(t) {
                    this.map = {}, t instanceof l ? t.forEach(function (e, t) {
                        this.append(t, e)
                    }, this) : Array.isArray(t) ? t.forEach(function (e) {
                        this.append(e[0], e[1])
                    }, this) : t && Object.getOwnPropertyNames(t).forEach(function (e) {
                        this.append(e, t[e])
                    }, this)
                }

                function h(e) {
                    if (e.bodyUsed) return Promise.reject(new TypeError("Already read"));
                    e.bodyUsed = !0
                }

                function p(n) {
                    return new Promise(function (e, t) {
                        n.onload = function () {
                            e(n.result)
                        }, n.onerror = function () {
                            t(n.error)
                        }
                    })
                }

                function y(e) {
                    var t = new FileReader,
                        n = p(t);
                    return t.readAsArrayBuffer(e), n
                }

                function m(e) {
                    if (e.slice) return e.slice(0);
                    var t = new Uint8Array(e.byteLength);
                    return t.set(new Uint8Array(e)), t.buffer
                }

                function g() {
                    return this.bodyUsed = !1, this._initBody = function (e) {
                        if (this._bodyInit = e)
                            if ("string" == typeof e) this._bodyText = e;
                            else if (s && Blob.prototype.isPrototypeOf(e)) this._bodyBlob = e;
                        else if (o && FormData.prototype.isPrototypeOf(e)) this._bodyFormData = e;
                        else if (t && URLSearchParams.prototype.isPrototypeOf(e)) this._bodyText = e
                            .toString();
                        else if (r && s && a(e)) this._bodyArrayBuffer = m(e.buffer), this._bodyInit =
                            new Blob([this._bodyArrayBuffer]);
                        else {
                            if (!r || !ArrayBuffer.prototype.isPrototypeOf(e) && !c(e)) throw new Error(
                                "unsupported BodyInit type");
                            this._bodyArrayBuffer = m(e)
                        } else this._bodyText = "";
                        this.headers.get("content-type") || ("string" == typeof e ? this.headers.set(
                                "content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this
                            ._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) :
                            t && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set(
                                "content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
                    }, s && (this.blob = function () {
                        var e = h(this);
                        if (e) return e;
                        if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                        if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this
                            ._bodyArrayBuffer
                        ]));
                        if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                        return Promise.resolve(new Blob([this._bodyText]))
                    }, this.arrayBuffer = function () {
                        return this._bodyArrayBuffer ? h(this) || Promise.resolve(this
                            ._bodyArrayBuffer) : this.blob().then(y)
                    }), this.text = function () {
                        var e = h(this);
                        if (e) return e;
                        if (this._bodyBlob) return function (e) {
                            var t = new FileReader,
                                n = p(t);
                            return t.readAsText(e), n
                        }(this._bodyBlob);
                        if (this._bodyArrayBuffer) return Promise.resolve(function (e) {
                            for (var t = new Uint8Array(e), n = new Array(t.length), o = 0; o <
                                t.length; o++) n[o] = String.fromCharCode(t[o]);
                            return n.join("")
                        }(this._bodyArrayBuffer));
                        if (this._bodyFormData) throw new Error("could not read FormData body as text");
                        return Promise.resolve(this._bodyText)
                    }, o && (this.formData = function () {
                        return this.text().then(b)
                    }), this.json = function () {
                        return this.text().then(JSON.parse)
                    }, this
                }
                l.prototype.append = function (e, t) {
                    e = f(e), t = u(t);
                    var n = this.map[e];
                    this.map[e] = n ? n + "," + t : t
                }, l.prototype.delete = function (e) {
                    delete this.map[f(e)]
                }, l.prototype.get = function (e) {
                    return e = f(e), this.has(e) ? this.map[e] : null
                }, l.prototype.has = function (e) {
                    return this.map.hasOwnProperty(f(e))
                }, l.prototype.set = function (e, t) {
                    this.map[f(e)] = u(t)
                }, l.prototype.forEach = function (e, t) {
                    for (var n in this.map) this.map.hasOwnProperty(n) && e.call(t, this.map[n], n, this)
                }, l.prototype.keys = function () {
                    var n = [];
                    return this.forEach(function (e, t) {
                        n.push(t)
                    }), d(n)
                }, l.prototype.values = function () {
                    var t = [];
                    return this.forEach(function (e) {
                        t.push(e)
                    }), d(t)
                }, l.prototype.entries = function () {
                    var n = [];
                    return this.forEach(function (e, t) {
                        n.push([t, e])
                    }), d(n)
                }, n && (l.prototype[Symbol.iterator] = l.prototype.entries);
                var v = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];

                function w(e, t) {
                    var n = (t = t || {}).body;
                    if (e instanceof w) {
                        if (e.bodyUsed) throw new TypeError("Already read");
                        this.url = e.url, this.credentials = e.credentials, t.headers || (this.headers = new l(e
                                .headers)), this.method = e.method, this.mode = e.mode, n || null == e
                            ._bodyInit || (n = e._bodyInit, e.bodyUsed = !0)
                    } else this.url = String(e);
                    if (this.credentials = t.credentials || this.credentials || "omit", !t.headers && this
                        .headers || (this.headers = new l(t.headers)), this.method = function (e) {
                            var t = e.toUpperCase();
                            return -1 < v.indexOf(t) ? t : e
                        }(t.method || this.method || "GET"), this.mode = t.mode || this.mode || null, this
                        .referrer = null, ("GET" === this.method || "HEAD" === this.method) && n)
                    throw new TypeError("Body not allowed for GET or HEAD requests");
                    this._initBody(n)
                }

                function b(e) {
                    var r = new FormData;
                    return e.trim().split("&").forEach(function (e) {
                        if (e) {
                            var t = e.split("="),
                                n = t.shift().replace(/\+/g, " "),
                                o = t.join("=").replace(/\+/g, " ");
                            r.append(decodeURIComponent(n), decodeURIComponent(o))
                        }
                    }), r
                }

                function S(e, t) {
                    t = t || {}, this.type = "default", this.status = "status" in t ? t.status : 200, this.ok =
                        200 <= this.status && this.status < 300, this.statusText = "statusText" in t ? t
                        .statusText : "OK", this.headers = new l(t.headers), this.url = t.url || "", this
                        ._initBody(e)
                }
                w.prototype.clone = function () {
                    return new w(this, {
                        body: this._bodyInit
                    })
                }, g.call(w.prototype), g.call(S.prototype), S.prototype.clone = function () {
                    return new S(this._bodyInit, {
                        status: this.status,
                        statusText: this.statusText,
                        headers: new l(this.headers),
                        url: this.url
                    })
                }, S.error = function () {
                    var e = new S(null, {
                        status: 0,
                        statusText: ""
                    });
                    return e.type = "error", e
                };
                var E = [301, 302, 303, 307, 308];
                S.redirect = function (e, t) {
                    if (-1 === E.indexOf(t)) throw new RangeError("Invalid status code");
                    return new S(null, {
                        status: t,
                        headers: {
                            location: e
                        }
                    })
                }, e.Headers = l, e.Request = w, e.Response = S, e.fetch = function (n, o) {
                    return fetchHttpUrl = n, new Promise(function (r, e) {
                        var t = new w(n, o),
                            i = new XMLHttpRequest;
                        i.onload = function () {
                            var e = i.responseType,
                                t = "",
                                n = {
                                    status: i.status,
                                    statusText: i.statusText,
                                    headers: function (e) {
                                        var r = new l;
                                        return e.split(/\r?\n/).forEach(function (e) {
                                            var t = e.split(":"),
                                                n = t.shift().trim();
                                            if (n) {
                                                var o = t.join(":").trim();
                                                r.append(n, o)
                                            }
                                        }), r
                                    }(i.getAllResponseHeaders() || "")
                                };
                            n.url = "responseURL" in i ? i.responseURL : n.headers.get(
                                "X-Request-URL"), "" !== e && "text" !== e || (t = i
                                .responseText), "json" === e && (t = i.response);
                            var o = "response" in i ? i.response : t;
                            r(new S(o, n))
                        }, i.onerror = function () {
                            console.error("Network request failed"), e(new TypeError(
                                "Network request failed"))
                        }, i.ontimeout = function () {
                            e(new TypeError("Network request failed"))
                        }, i.open(t.method, t.url, !0), "include" === t.credentials && (i
                            .withCredentials = !0), "responseType" in i && s && (i
                            .responseType = "blob"), t.headers.forEach(function (e, t) {
                            i.setRequestHeader(t, e)
                        }), i.send(void 0 === t._bodyInit ? null : t._bodyInit)
                    })
                }, e.fetch.polyfill = !0
            }("undefined" != typeof self ? self : window)
        }]);
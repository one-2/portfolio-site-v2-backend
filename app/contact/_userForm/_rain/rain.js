
"use client"
// Code modified from MatrixRainingLetters module at (https://github.com/FullStackWithLawrence/react-mdr) under MIT licence
// Thank you!

var e = require("react");

function t(e) {
    return e && "object" == typeof e && "default" in e ? e : {
        default: e
    }
}

var n = t(e), r = [], a = [];
!function (e, t) {
    if (e && "undefined" != typeof document) {
        var n, i = !0 === t.prepend ? "prepend" : "append", o = !0 === t.singleTag, l = "string" == typeof t.container ? document.querySelector(t.container) : document.getElementsByTagName("head")[0];
        if (o) {
            var c = r.indexOf(l);
            -1 === c && (c = r.push(l) - 1, a[c] = {}),
                n = a[c] && a[c][i] ? a[c][i] : a[c][i] = u()
        }
        else n = u();
        65279 === e.charCodeAt(0) && (e = e.substring(1)), n.styleSheet ? n.styleSheet.cssText += e : n.appendChild(document.createTextNode(e))
    }

    function u() {
        var e = document.createElement("style");
        if (e.setAttribute("type", "text/css"), t.attributes) for (var n = Object.keys(t.attributes), r = 0;
            r < n.length;
            r++)e.setAttribute(n[r], t.attributes[n[r]]);
        var a = "prepend" === i ? "afterbegin" : "beforeend";
        return l.insertAdjacentElement(a, e), e
    }
}
    (".mrl-container {\n    background - color: rgba(0, 0, 0, 0.05);\n}\n", {});

var i = {
    MatrixRainingLetters: function (t) {
        var r = e.useRef(), a = "mrl-" + t.key, i = "mrl-container " + t.custom_class;
        return e.useEffect((function () {
            var e = function (e, t) {
                var n = e.current, r = n.getContext("2d");
                n.width = window.innerWidth, n.height = window.innerHeight;
                // Rain characters
                for (var a = "01", i = n.width / 16, o = [], l = 0;
                    l < i;
                    l++)o[l] = 1;
                return function () {
                    r.fillStyle =
                        "rgba(0, 0, 0, 0.05)", // Fade to background colour (dark grey)
                        r.fillRect(0, 0, n.width, n.height),
                        r.fillStyle = t || "#0F0", // Rain colour. #37F is blue, #0F0 is green.
                        r.font = "15px monospace"; // Rain size and font face
                    for (var e = 0; e < o.length; e++) {
                        var i = a.charAt(Math.floor(Math.random() * a.length));
                        r.fillText(i, 16 * e, 16 * o[e]),
                            16 * o[e] > n.height && Math.random() > .99 // Rain density
                            && (o[e] = 0
                            ),
                            o[e]++
                    }
                }
            }
                (r, t.color), n = setInterval(e, 100    ); // Rain speed
            return function () {
                return clearInterval(n)
            }
        }
        ), [t.color]), n.default.createElement(n.default.Fragment, null, n.default.createElement("canvas", {
            key: a, className: i, ref: r
        }
        ))
    }
}
    ;
module.exports = i;


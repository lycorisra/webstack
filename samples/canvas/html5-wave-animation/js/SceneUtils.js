function SceneUtils(t, e, i) {
    "use strict";
    function n(t, e) {
        this.$scene = t,
            this.id = e,
            this.textDefX = 1500,
            this.textDefY = -200,
            this.textDefZ = -2500,
            this.textDesX = -1500,
            this.textDesY = -150,
            this.textDesZ = -2500,
            this.textDuration = 2,
            this.imgDefX = 2e3,
            this.imgDefY = -800,
            this.imgDefZ = -500,
            this.imgDefRx = -30,
            this.imgDefRy = 30,
            this.imgDefRz = 0,
            this.imgDesX = -6e3,
            this.imgDesY = -800,
            this.imgDesZ = -2e3,
            this.imgDesRx = 30,
            this.imgDesRy = -30,
            this.imgDesRz = 0
    }
    var r = (t("jquery"),
        t("gsap/src/uncompressed/TweenMax.js"))
        , a = (t("gsap/src/uncompressed/plugins/CSSPlugin.js"),
            t("../vendor/gsap/SplitText.js"))
        , o = t("lodash/reverse")
        , s = (t("lodash/extend"),
            t("../canvas3d/SceneId.js"));
    e.exports = n,
        n.prototype.contSetup = function (t) {
            this.chars = [],
                this.charsRe = [],
                null != t.headlines && (this.headlines = t.headlines),
                null != t.charaOrigin && (this.charaOrigin = t.charaOrigin),
                null != t.contents && (this.contents = t.contents),
                null != t.visuals && (this.visuals = t.visuals),
                null != t.bgText && (this.bgText = t.bgText);
            for (var e = 0; e < this.headlines.length; e++) {
                var i = new a(this.headlines[e], {
                    type: "chars"
                })
                    , n = i.chars
                    , r = o(i.chars.slice());
                this.chars.push(n),
                    this.charsRe.push(r),
                    TweenLite.set(this.headlines[e], {
                        perspective: 1e3
                    }),
                    TweenLite.set(n, {
                        transformOrigin: null != this.charaOrigin ? this.charaOrigin : "50% -250%",
                        scale: 0,
                        x: this.textDefX + "px",
                        y: this.textDefY + "px",
                        z: this.textDefZ + "px",
                        rotationX: -240,
                        rotationY: 10
                    })
            }
        }
        ,
        n.prototype.contShow = function (t, e) {
            var i = this
                , n = t ? i.chars : i.charsRe
                , a = t ? this.textDefX + "px" : -this.textDefX + "px"
                , o = e ? this.textDuration + .6 : this.textDuration
                , s = e ? -180 : -240;
            r.to(i.$scene, .5, {
                autoAlpha: 1,
                ease: Power0.easeNone
            });
            for (var l = 0; l < i.chars.length; l++)
                r.staggerFromTo(n[l], o, {
                    scale: 0,
                    x: a,
                    y: this.textDefY + "px",
                    z: this.textDefZ + "px",
                    rotationX: s,
                    rotationY: 10
                }, {
                        opacity: 1,
                        scale: 1,
                        x: "0px",
                        y: "0px",
                        z: "0px",
                        rotationX: 0,
                        rotationY: 0,
                        ease: Power3.easeInOut
                    }, .02);
            null != i.contents && r.staggerFromTo(i.contents, 1.5, {
                y: "30px",
                opacity: 0
            }, {
                    y: "0px",
                    opacity: 1,
                    ease: Power4.easeOut,
                    delay: 1
                }, .2),
                null != i.visuals && r.staggerFromTo(i.visuals, 2.2, {
                    autoAlpha: 0,
                    scale: 0,
                    x: this.imgDefX + "px",
                    y: this.imgDefY + "px",
                    z: this.imgDefZ + "px",
                    rotationX: this.imgDefRx,
                    rotationY: this.imgDefRy,
                    rotationZ: this.imgDefRz
                }, {
                        autoAlpha: 1,
                        scale: 1,
                        x: "0px",
                        y: "0px",
                        cycle: {
                            z: ["-100px", "-250px"]
                        },
                        rotationX: 0,
                        rotationY: 0,
                        rotationZ: 0,
                        ease: Power3.easeInOut
                    }, .2),
                null != i.bgText && (i.bgText[0].addClass("loop"),
                    i.bgText[1].addClass("loop"))
        }
        ,
        n.prototype.contHide = function (t) {
            var e = this
                , i = t ? e.chars : e.charsRe
                , n = t ? this.textDesX + "px" : -this.textDesX + "px";
            r.fromTo(e.$scene, .5, {
                autoAlpha: 1
            }, {
                    autoAlpha: 0,
                    ease: Power0.easeNone,
                    onComplete: function () {
                        s.isChange = !1
                    },
                    delay: 1
                });
            for (var a = 0; a < e.chars.length; a++)
                r.staggerTo(i[a], this.textDuration, {
                    opacity: 0,
                    scale: 0,
                    x: n,
                    y: this.textDesY + "px",
                    z: this.textDesZ + "px",
                    rotationX: -140,
                    rotationY: 10,
                    ease: Power4.easeInOut
                }, .02);
            null != e.contents && r.staggerTo(e.contents, 1.5, {
                y: "30px",
                opacity: 0,
                ease: Power4.easeIn
            }, .2),
                null != e.visuals && r.staggerTo(e.visuals, 2.2, {
                    autoAlpha: 0,
                    scale: 0,
                    x: this.imgDesX + "px",
                    y: this.imgDesY + "px",
                    cycle: {
                        z: [this.imgDesZ - 100 + "px", this.imgDesZ - 250 + "px"]
                    },
                    rotationX: this.imgDesRx,
                    rotationY: this.imgDesRy,
                    rotationZ: this.imgDesRz,
                    ease: Power3.easeIn
                }, .2),
                null != e.bgText && (e.bgText[0].removeClass("loop"),
                    e.bgText[1].removeClass("loop"))
        }
}
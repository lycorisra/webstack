function Scene5(t, e, i) {
    "use strict";
    function n(t) {
        this.homeBg = t,
            this.$scene = r("#scene6"),
            this.$description = r("#scene6 .description"),
            this.$btnMore = r("#scene6 .readMoreLinkBlock"),
            this.utils = new a(this.$scene, 6),
            this.splitTexts = ["#js-scene6-titleSub", "#js-scene6-title"],
            this.contents = [this.$description, this.$btnMore],
            this.config = {
                headlines: this.splitTexts,
                charaOrigin: "50% -200%",
                contents: this.contents
            },
            r(window).resize(this.resize),
            this.resize(),
            this.utils.contSetup(this.config)
    }
    var r = t("jquery")
        , a = t("./SceneUtils.js");
    e.exports = n,
        n.prototype.show = function () {
            this.homeBg.changeCamera(0, 0, 200),
                this.utils.contShow(!0, !1),
                r(".HomeBg-bgImg").addClass("loop"),
                TweenMax.to(r(".HomeBg-bgImg"), .5, {
                    autoAlpha: 1,
                    ease: Power0.easeNone
                })
        }
        ,
        n.prototype.hide = function () {
            this.utils.contHide(!0),
                TweenMax.to(r(".HomeBg-bgImg"), .5, {
                    autoAlpha: 0,
                    ease: Power0.easeNone,
                    onComplete: function () {
                        r(".HomeBg-bgImg").removeClass("loop")
                    }
                })
        }
        ,
        n.prototype.resize = function () {
            var t = r(window).innerWidth()
                , e = r(window).innerHeight();
            e = Math.max(t / 3.5, e),
                r(".HomeBg-bgImg-inner").css({
                    width: 3.5 * e + "px",
                    height: e + "px"
                })
        }
}
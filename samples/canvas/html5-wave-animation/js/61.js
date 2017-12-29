function Scene4(t, e, i) {
    "use strict";
    function n(t) {
        this.homeBg = t,
            this.$scene = r("#scene4"),
            this.$description = r("#scene4 .description"),
            this.$btnMore = r("#scene4 .readMoreLinkBlock"),
            this.$overlay = r("#scene4 .HomeScene-overlay-inner"),
            this.$visual = r("#scene4 .HomeScene-visual-inner"),
            this.utils = new a(this.$scene, 2),
            this.splitTexts = ["#js-scene4-titleSub", "#js-scene4-title"],
            this.contents = [this.$description, this.$btnMore],
            this.visuals = [this.$overlay, this.$visual],
            this.config = {
                headlines: this.splitTexts,
                charaOrigin: "50% -250%",
                contents: this.contents,
                visuals: this.visuals
            },
            this.utils.contSetup(this.config)
    }
    var r = t("jquery")
        , a = t("./SceneUtils.js");
    e.exports = n,
        n.prototype.show = function () {
            this.homeBg.changeCamera(0, 0, 200),
                this.utils.contShow(!0, !1),
                this.slideStart()
        }
        ,
        n.prototype.hide = function () {
            this.utils.contHide(!0),
                this.slideStop()
        }
        ,
        n.prototype.slideStart = function () {
            var t = this
                , e = 0
                , i = 2
                , n = 3
                , a = r("#scene4 .HomeScene-visual-inner-cont img").eq(0)
                , o = r("#scene4 .HomeScene-visual-inner-cont img").eq(1)
                , s = r("#scene4 .HomeScene-visual-inner-cont img").eq(2)
                , l = [a, o, s]
                , h = {
                    timer: 0
                }
                , c = function () {
                    t.twSlide ? t.twSlide.play(0) : t.twSlide = TweenMax.fromTo(h, 5, {
                        timer: 0
                    }, {
                            timer: 1,
                            ease: Power0.easeNone,
                            onComplete: function () {
                                i = e,
                                    e < n - 1 ? e++ : e = 0;
                                var t = l[e]
                                    , r = l[i];
                                t.addClass("isShow"),
                                    r.removeClass("isShow"),
                                    c()
                            }
                        })
                };
            c()
        }
        ,
        n.prototype.slideStop = function () {
            var t = this;
            t.twSlide && t.twSlide.pause()
        }
}
function Scene3(t, e, i) {
    "use strict";
    function n(t) {
        this.homeBg = t,
            this.$scene = r("#scene3"),
            this.$description = r("#scene3 .description"),
            this.$btnMore = r("#scene3 .readMoreLink"),
            this.$overlay = r("#scene3 .HomeScene-overlay-inner"),
            this.$visual = r("#scene3 .HomeScene-visual-inner"),
            this.utils = new a(this.$scene, 2),
            this.splitTexts = ["#js-scene3-titleSub", "#js-scene3-title"],
            this.contents = [this.$description, this.$btnMore],
            this.visuals = [this.$overlay, this.$visual],
            this.config = {
                headlines: this.splitTexts,
                charaOrigin: "50% -200%",
                contents: this.contents,
                visuals: this.visuals
            },
            this.utils.contSetup(this.config),
            o.isMobile ? r("#scene3 .HomeScene-visual-inner-cont").find("video").remove() : r("#scene3 .HomeScene-visual-inner-cont").find("img").remove()
    }
    var r = t("jquery")
        , a = t("./SceneUtils.js")
        , o = t("../util/ua.js");
    e.exports = n,
        n.prototype.show = function () {
            this.homeBg.changeCamera(0, 0, 200),
                this.utils.contShow(!0, !1)
        }
        ,
        n.prototype.hide = function () {
            this.utils.contHide(!0)
        }
}
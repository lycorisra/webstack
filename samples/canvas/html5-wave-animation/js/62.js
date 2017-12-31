function Scene5(t, e, i) {
    "use strict";
    function n(t) {
        this.homeBg = t,
            this.$scene = r("#scene5"),
            this.$description = r("#scene5 .description"),
            this.$btnMore = r("#scene5 .readMoreLinkBlock"),
            this.$bgText1 = r(".HomeBg-bgText-scene5-t1"),
            this.$bgText2 = r(".HomeBg-bgText-scene5-t2"),
            this.utils = new a(this.$scene, 5),
            this.splitTexts = ["#js-scene5-titleSub", "#js-scene5-title"],
            this.contents = [this.$description, this.$btnMore],
            this.bgText = [this.$bgText1, this.$bgText2],
            this.config = {
                headlines: this.splitTexts,
                charaOrigin: "50% -250%",
                contents: this.contents,
                bgText: this.bgText
            },
            this.utils.contSetup(this.config)
    }
    var r = t("jquery")
        , a = t("./SceneUtils.js");
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
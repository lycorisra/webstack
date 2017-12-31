function Scene2(t, e, i) {
    "use strict";
    function n(t) {
        this.homeBg = t,
            this.$scene = r("#scene2"),
            this.$description = r("#scene2 .description"),
            this.$bgText1 = r(".HomeBg-bgText-scene2-t1"),
            this.$bgText2 = r(".HomeBg-bgText-scene2-t2"),
            this.utils = new a(this.$scene, 2),
            this.splitTexts = ["#js-scene2-title"],
            this.contents = [this.$description],
            this.bgText = [this.$bgText1, this.$bgText2],
            this.config = {
                headlines: this.splitTexts,
                charaOrigin: "50% -400%",
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
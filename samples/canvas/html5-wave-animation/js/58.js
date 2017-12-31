function Scene1(t, e, i) {
    "use strict";
    function n(t) {
        this.isFirst = !0;
        this.homeBg = t;
        this.$scene = r("#scene1");
        this.utils = new a(this.$scene, 1);
        this.splitTexts = ["#js-scene1-titleSub", "#js-scene1-title", "#js-scene1-copy"];
        this.config = {
            headlines: this.splitTexts,
            charaOrigin: "50% -150%"
        };
        this.utils.contSetup(this.config);
    }
    var r = t("jquery"),
        a = t("./SceneUtils.js");
        
    e.exports = n;

    n.prototype.show = function () {
        this.homeBg.changeCamera(0, 0, 200);
        this.utils.contShow(!0, this.isFirst);
        this.isFirst = !1;
    };
    n.prototype.hide = function () {
        this.utils.contHide(!0)
    };
}
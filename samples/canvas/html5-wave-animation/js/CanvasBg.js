function CanvasBg(t, e, i) {
    "use strict";
    function n(t, e, i) {
        if (this.containerName = t,
            this.isWebGL = !0,
            this.isParticle = i,
            !h.webgl)
            return this.isWebGL = !1,
                void a("body").addClass("no-webgl");
        this.particleCount = o.isMobile ? 400 : 1e3,
            this.positions = {
                x: 0,
                y: 0,
                z: 0,
                px: 1,
                py: 1,
                pz: 1,
                sp: .07
            },
            this.lineShape = e,
            this.isDev = !1;
        var n = function (t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        };
        this.update = n(this.update, this),
            this.onResize = n(this.onResize, this),
            o.isSafari && (this.isDev = !1),
            this.isDev && (r = new l,
                r.showPanel(0),
                document.body.appendChild(r.dom),
                this.gui = new dat.GUI,
                this.gui.add(f, "cameraX", -1e3, 1e3).onChange(this.setValue),
                this.gui.add(f, "cameraY", -1e3, 1e3).onChange(this.setValue),
                this.gui.add(f, "cameraZ", -1e3, 1e3).onChange(this.setValue),
                a(".dg.ac").css({
                    "z-index": 30
                })),
            this.animateID,
            this.scene,
            this.camera,
            this.renderer,
            this.container,
            this.rafStop = !0,
            this.setup()
    }
    var r, a = t("jquery"), o = t("../util/ua"), s = t("three"), l = t("../vendor/stats.min.js"), h = t("three/examples/js/Detector.js"), c = t("./Particle.js"), u = t("./Lines.js"), p = function () {
        this.cameraX = 0,
            this.cameraY = 0,
            this.cameraZ = 0
    }, f = new p;
    e.exports = n,
        n.prototype.setValue = function () { }
        ,
        n.prototype.setup = function (t) {
            if (this.container = a(this.containerName)[0],
                this.scene = new s.Scene,
                this.scene.fog = new s.FogExp2(16777215, .0035),
                this.camera = new s.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 3e3),
                this.camera.position.set(f.cameraX, f.cameraY, f.cameraZ),
                this.camera.up = new s.Vector3(0, 0, 1),
                this.camera.lookAt(new s.Vector3(0, 0, 0)),
                this.renderer = new s.WebGLRenderer({
                    antialias: !0,
                    alpha: !0
                }),
                this.renderer.setPixelRatio(window.devicePixelRatio),
                this.renderer.setSize(this.container.offsetWidth, this.container.offsetHeight),
                this.renderer.gammaInput = !0,
                this.renderer.gammaOutput = !0,
                this.container.appendChild(this.renderer.domElement),
                this.isParticle && (this.particle = new c(this.scene, this.camera, this.particleCount)),
                this.lines = new u(this.scene, this.camera, this.particleCount),
                this.lines.show(),
                this.isDev) {
                var e;
                e = new s.AxisHelper(100),
                    this.scene.add(e),
                    e.position.set(0, 0, 0)
            }
            this.render(),
                window.addEventListener("resize", this.onResize, !1),
                this.onResize()
        }
        ,
        n.prototype.update = function (t) {
            this.rafStop || (this.isDev && r.begin(),
                this.render(),
                this.isDev && r.end(),
                this.animateID = requestAnimationFrame(this.update))
        }
        ,
        n.prototype.render = function () {
            this.positions.x += (f.cameraX * this.positions.px - this.positions.x) * this.positions.sp,
                this.positions.y += (f.cameraY * this.positions.py - this.positions.y) * this.positions.sp,
                this.positions.z += (f.cameraZ * this.positions.pz - this.positions.z) * this.positions.sp,
                this.camera.position.x = this.positions.x,
                this.camera.position.y = this.positions.y,
                this.camera.position.z = this.positions.z,
                this.isParticle ? this.particle.update(this.lines.update(this.lineShape)) : this.lines.update(this.lineShape),
                this.camera.lookAt(0),
                this.renderer.render(this.scene, this.camera)
        }
        ,
        n.prototype.animatePlay = function () {
            this.isWebGL && (this.rafStop = !1,
                this.animateID = requestAnimationFrame(this.update))
        }
        ,
        n.prototype.animateStop = function () {
            this.isWebGL && (this.rafStop = !0,
                cancelAnimationFrame(this.animateID))
        }
        ,
        n.prototype.eventAttach = function () { }
        ,
        n.prototype.eventDetach = function () { }
        ,
        n.prototype.onResize = function () {
            var t = this.container.offsetWidth
                , e = this.container.offsetHeight;
            this.camera.aspect = t / e,
                this.camera.updateProjectionMatrix(),
                this.renderer.setSize(t, e),
                this.render()
        }
        ,
        n.prototype.changeCamera = function (t, e, i) {
            this.isWebGL && (f.cameraX = t,
                f.cameraY = e,
                f.cameraZ = i)
        }
}
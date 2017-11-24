var keys = ['.NET', 'Silverlight', 'jQuery', 'CSS3', 'HTML5', 'JavaScript', 'SQL', 'C#'];

var words = [];
keys.map(function (i, e) {
    var k = (2 * (i + 1) - 1) / tagEle.length - 1;
    var a = Math.acos(k);
    var b = a * Math.sqrt(tagEle.length * Math.PI);
    
    var x = RADIUS * Math.sin(a) * Math.cos(b);
    var y = RADIUS * Math.sin(a) * Math.sin(b);
    var z = RADIUS * Math.cos(a);
    var t = new tag(tagEle[i], x, y, z);
    tagEle[i].style.color = "rgb(" + parseInt(Math.random() * 255) + "," + parseInt(Math.random() * 255) + "," + parseInt(Math.random() * 255) + ")";
    words.push(t);
})


var tag = function (x, y, z) {
    this.ele = ele;
    this.x = x;
    this.y = y;
    this.z = z;
}

tag.prototype = {
    move: function () {
        var scale = fallLength / (fallLength - this.z);
        var alpha = (this.z + RADIUS) / (2 * RADIUS);
        this.ele.style.fontSize = 15 * scale + "px";
        this.ele.style.opacity = alpha + 0.5;
        this.ele.style.zIndex = parseInt(scale * 100);
        this.ele.style.left = this.x + CX - this.ele.offsetWidth / 2 + "px";
        this.ele.style.top = this.y + CY - this.ele.offsetHeight / 2 + "px";
    }
}
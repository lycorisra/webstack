require(['./cat.js', 'text!./template.ejs'], function (cat, text) {
    var str = text;
    var txt = cat.sayHello();
    document.getElementById('main').innerHTML = txt;
});

// import cat from './cat.js'
// var txt = cat.sayHello();
// document.getElementById('main').innerHTML = txt;
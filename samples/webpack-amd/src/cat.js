define(['text!./template.ejs'], function (text) {
    console.log(text);
    var cat = {
        name: 'tom',
        sayHello: function () {
            return 'Hi, My name is ' + this.name;
        }
    };

    return cat;
});
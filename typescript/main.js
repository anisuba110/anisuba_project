//静的型付け
var aged = 25;
/*
    number
    string
    boolean
    any
*/
var results;
results = [10, 1, 2];
var User = (function () {
    function User(name) {
        this.name = name;
    }
    User.prototype.sayHi = function () {
        console.log("hi i am" + this.name);
    };
    return User;
}());
var tom = new User("tom");
console.log(tom.sayHi());
console.log("Hello world");
console.log(results);
/*
    列挙型
 */
var Signal;
(function (Signal) {
    Signal[Signal["Red"] = 0] = "Red";
    Signal[Signal["Blue"] = 1] = "Blue";
    Signal[Signal["Yellow"] = 2] = "Yellow";
})(Signal || (Signal = {}));
// 関数
function add(a, b) {
    return a + b;
}
// オプションを設定する場合
function addadd(a, b) {
    if (b) {
        return a + b;
    }
    else {
        return a + a;
    }
}
//　初期値を与える
function addaddadd(a, b) {
    if (b === void 0) { b = 50; }
    if (b) {
        return a + b;
    }
    else {
        return a + a;
    }
}
/**
 * typescriptではこれをもっと簡潔に書ける
var mal = function(a:number,b:number):number {
    return a*b;
}
 */
/**
var mal = (a:number,b:number):number => {
    return a*b;
}
 */
var mal = function (a, b) { return a * b; };
console.log(Signal.Blue);
console.log(Signal[2]);
console.log(add(100, 200));
console.log(addadd(10, 20));
console.log(addadd(10));
console.log(addaddadd(10));
console.log(mal(3, 3));

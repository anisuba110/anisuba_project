//静的型付け
var aged:number = 25;

/* 
    number
    string
    boolean
    any
*/

// アクセス修飾子があるよ！
// public , protected , private

var results:number[];
results = [10,1,2];

class User{
    
    /**
    public name:string;
    public constructor(name:string){
        this.name = name;
    }
     */
    /**
     * constructor public name:string     */
    public constructor(public name:string) {
        this.name = name;
    }
    sayHi():void{
        console.log("hi i am" + this.name);
    }
}
var tom = new User("tom");
console.log(tom.sayHi());
console.log("Hello world");
console.log(results);

/*
    列挙型
 */
enum Signal{
    
    Red = 0,
    Blue = 1,
    Yellow = 2
    
}

// 関数
function add(a:number, b:number) {
    return a + b;
}
// オプションを設定する場合
function addadd(a:number,b?:number) {
    if(b){
        return a+b;
    }else{
        return a+a;
    }
}

//　初期値を与える
function addaddadd(a:number,b:number = 50) {
    if(b){
        return a+b;
    }else{
        return a+a;
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
var mal = (a:number,b:number):number => a*b;



console.log(Signal.Blue);
console.log(Signal[2]);
console.log(add(100,200));
console.log(addadd(10,20));
console.log(addadd(10));
console.log(addaddadd(10));
console.log(mal(3,3));
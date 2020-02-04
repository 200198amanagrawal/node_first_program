console.log("hello world");
var main=require("./second");
console.log(__dirname);
console.log("Accessing name from the second:"+main.name);
class User{
    constructor()
    {
        this.name="Aman Agrawal";
        this.age=22;
    }
    getName()
    {
        return this.name;
    }
}
var user=new User();
console.log(user.getName());
console.log(user.age);
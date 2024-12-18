var Player = /** @class */ (function () {
    function Player() {
    }
    return Player;
}());
//creating first object
var obj1 = new Player();
obj1.age = 20;
console.log(obj1.age);
//creating the second object
var obj2 = new Player();
obj2.age = "Twenty";
console.log(obj2.age);
//creating the third object
var obj3 = new Player();
obj3.age = true;
console.log(obj3.age);
//prinitng the types of object
console.log(typeof (obj1.age) + typeof (obj2.age) + typeof (obj3.age));

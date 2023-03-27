 Index = 34343;
 gmail = "xyz@test.com";
let obj = {
    name: "Rohit",
    age: 23,
    isDeveloper: true,
    sayName(){
        return "It's me";
    },
    Index: 434443
    
};

// console.log(obj.sayName());
for(item in obj) {
    console.log(item);
}
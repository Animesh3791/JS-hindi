// Singleton
//object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Animesh",
    "full name" : "Animesh Kumar Gaurav",
    [mySym]: "mykey1",
    age: 18,
    location: "Patna",
    email:  "Animesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"])
console.log(JsUser[mySym]);

JsUser.email = "Animesh@chatgpt.com"
//Object.freeze(JsUser) // used to freeze we cant change the value further
JsUser.email = "Animesh@microsoft.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");   
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);   
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());








const accountId = 111998
let accountEmail = "Animesh@google.com"
var accountPassword = "12345"
accountCity = "Patna"
let  accountState;

// accountId = 2 // not allowed

accountEmail ="icici.com"
accountPassword = "124356"
accountCity = "Bengaluru"

console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functionl scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

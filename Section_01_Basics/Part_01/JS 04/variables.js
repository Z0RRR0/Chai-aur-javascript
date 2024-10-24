const accountId = 144553
let accountEmail = "Zoro@Luffy.onion"
var accountPassword = "12345"
accountCity = "Logue Town"
let accountState;

// accountId = 2  // not allowed


accountEmail = "Nami@Sanji.onion"
accountPassword = "21212121"
accountCity = "EggHead Island"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

 
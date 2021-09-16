let readline = require('readline-sync');
let dataUser = {
    id: undefined,
    name: undefined
}

// console.log(dataUser);

let dataUserId = parseInt(readline.question('Masukan ID anda; '));
let dataUserName = readline.question('masukan nama anda: ').toLowerCase();
console.log(typeof dataUserName);
dataUser.id = dataUserId;
dataUser.name = dataUserName;
console.log(dataUser);
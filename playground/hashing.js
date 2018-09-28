const bcrypt = require('bcryptjs');

let password = '123abc1';

bcrypt.genSalt(10,(err, salt) => {
    bcrypt.hash(password,salt,(err, hash) => {
        console.log(hash);
        
    });
});

var hashedPassword = '$2a$10$ays/6S0MP1Kd80jqI6EtIO0t4.iRFlJqQbc6Zcx6OfjkRCf0zA4Yy';

bcrypt.compare(password,hashedPassword,(err,res) => {
    console.log(res);
});

// const {SHA256} = require('crypto-js');
// const jwt = require('jsonwebtoken');

// let data = {
//     id: 10
// }

// let token = jwt.sign(data, '123abc')

// console.log(token)

// let decoded = jwt.verify(token,'123abc')

// console.log('decoded', decoded);

// let message = 'I am number 3';

// let hash = SHA256(message).toString();

// console.log(`Message : ${message}`);
// console.log(`Hash : ${hash}`);

// let data = {id:4};

// let token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'secret').toString()
// }

// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(token.data)).toString()

// let resultHash = SHA256(JSON.stringify(token.data) + 'secret').toString();

// if(resultHash === token.hash) console.log("Data was not changed");
// else console.log("Data changed, don't trust");


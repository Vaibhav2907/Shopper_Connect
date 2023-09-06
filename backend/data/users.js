const bcrypt = require("bcryptjs");

const users = [
  {
    name: "SHOPPER CONNECT",
    email: "shopper@test.com",
    password: bcrypt.hashSync("12345678", 10),
    isAdmin: true,
    isSeller: true,
  },

  {
    name: "John Doe",
    email: "ahihi2@test.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Jim Doe",
    email: "ahihi3@test.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

module.exports = users;

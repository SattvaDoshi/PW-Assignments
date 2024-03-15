const userMap = new Map();

function addUser(name, age, email) {
  const userInfo = { age, email };
  userMap.set(name, userInfo);
}

function updateUser(name, age, email) {
  if (userMap.has(name)) {
    const userInfo = userMap.get(name);
    userInfo.age = age;
    userInfo.email = email;
  }
}

function deleteUser(name) {
  userMap.delete(name);
}

addUser("Sattva", 30, "sattva@gmail.com");
addUser("Kushal", 25, "kushal@gmail.com");
console.log(userMap);

updateUser("Sattva", 31, "newemail@example.com");
console.log(userMap);

deleteUser("Kushal");
console.log(userMap);

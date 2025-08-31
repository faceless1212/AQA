
const users = [
  {
    name: "Іван",
    email: "ivan@example.com",
    age: 25
  },
  {
    name: "Марія",
    email: "maria@example.com",
    age: 30
  },
  {
    name: "Олександр",
    email: "olex@example.com",
    age: 28
  },
  {
    name: "Анна",
    email: "anna@example.com",
    age: 22
  }
];


for (const {name,email,age} of users) {
  console.log(name + " " +  email + " " + age);
}


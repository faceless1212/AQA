//for 
let number = 5;

for(let i = 1; i < 10; i++){
  console.log(`${number} * ${i} = ${number * i}`);
}





//while 
let number1 = 5;
let i = 1;
while (i <= 10) {
  console.log(`${number1} * ${i} = ${number1 * i}`);
  i++;
}






let sayname = (name)=> name;


const person = {
  name: "Lena",
  sayname(){
    return this.name
  }
}



console.log(sayname("null"))


console.log(person)
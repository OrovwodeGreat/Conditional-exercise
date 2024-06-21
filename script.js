var age= prompt("how old are you?");

if(age < 0){
    console.log("Come back when you are out of the womb")
}

if(age==21){
    console.log("happy 21st birthday")
}

if(age % 2){
    console.log("your age is odd")
}


age = Number(age);

if (Number.isInteger(Math.sqrt(age))) {
  console.log(`${age} is a perfect square.`);
}
 else {
  console.log(`${age} is not a perfect square.`);
}
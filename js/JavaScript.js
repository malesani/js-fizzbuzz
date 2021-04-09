//stard programm

//numeri dentro all'array

for (var i=1; i < 100; i++) {
  if (i%3 == 0 && i%5 == 0){
    console.log("fizzBuzz");
  }if (i % 3 == 0){
    console.log("fizz");
  }else if(i % 5 == 0){
    console.log("Buzz");
  }else{
    console.log(i);
  } 
}



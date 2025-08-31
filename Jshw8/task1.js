const numbers = [2, -5, 0, 7, -3, 0, 10, -8] 

let posisitiveCount = 0

let negativeCount = 0

let ZeroCount = 0


for(let i = 0; i<numbers.length; i++){

  if(numbers[i]>0){
    posisitiveCount++
  }
  else if(numbers[i]<0){
    negativeCount++
  }
  else{
    ZeroCount++
  }
}


console.log(posisitiveCount)
console.log(negativeCount)
console.log(ZeroCount)




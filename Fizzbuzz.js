const refactoredFizzBuzz = (num) => {
  for(var i = 1; i <= num; i++){
    console.log((i % 3 === 0 && i % 5 === 0) ?
                  "fizzbuzz" : (i % 5 === 0 ?
                    "buzz" : (i % 3 === 0 ?
                      "fizz" : i)));
  }
}

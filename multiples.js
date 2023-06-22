function isMultiOfFive(num) {
    return num % 5 === 0
}

function isMultiOfThree(num) {
    return num % 3 === 0
}


function fizzBuzz(n) {
    // Write your code here
    let num = 1
    
    while(num <= n) {
        if (isMultiOfThree(num) && isMultiOfFive(num)) {
            console.log('FizzBuzz')
        }
        if (isMultiOfThree(num) && !isMultiOfFive(num)) {
            console.log('Fizz')
        }
          if (!isMultiOfThree(num) && isMultiOfFive(num)) {
            console.log('Fizz')
        }
        if (!isMultiOfThree(num) && !isMultiOfFive(num)) {
            console.log(num)
        }
        num++
    }
}

fizzBuzz(15)


for (let i = 1; i <= 100; i++) {
    let resto3 = i % 3
    let resto5 = i % 5
    let resto15 = i % 15
    
    // console.log(i)

    if (resto15 === 0) {
        console.log(i, 'FizzBuzz')
    } else if (resto5 === 0) {
        console.log(i, 'Buzz')
    } else if (resto3 === 0) {
        console.log(i, 'Fizz')
    } else {
        console.log(i)
    }
}
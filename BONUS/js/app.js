// METODO CON APPEND

for (let i = 1; i <= 100; i++) {
    let resto3 = i % 3
    let resto5 = i % 5
    let resto15 = i % 15
    let container = document.getElementById('content-wrapper')
    

    if (resto15 === 0) {
        console.log('FizzBuzz')
        container.append(' FizzBuzz ')
    } else if (resto5 === 0) {
        console.log('Buzz')
        container.append(' Buzz ')
    } else if (resto3 === 0) {
        console.log('Fizz')
        container.append(' Fizz ')
    } else {
        console.log(i)
        container.append(i + ' ')
    }
}

// METODO CON INNERHTML

for (let i = 1; i <= 100; i++) {
    let resto3 = i % 3
    let resto5 = i % 5
    let resto15 = i % 15
    let container = document.getElementById('content-wrapper-2')
    

    if (resto15 === 0) {
        console.log('FizzBuzz')
        container.innerHTML += '<span class="printed">FizzBuzz</span>' 
    } else if (resto5 === 0) {
        console.log('Buzz')
        container.innerHTML += '<span class="printed">Buzz</span>'
    } else if (resto3 === 0) {
        console.log('Fizz')
        container.innerHTML += '<span class="printed">Fizz</span>'
    } else {
        console.log(i)
        container.innerHTML += '<span class="printed">' + i + '</span>'
    }
}

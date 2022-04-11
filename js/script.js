//ciclo per dividere in numeri tra fizz, buzz, e dom

for(let i = 0; i<=100; i++){
    let fizz;
    let buzz;
    let fizzbuzz;

    const rowWrapper = document.querySelector('.row');

    if (i % 15 == 0) console.log("FizzBuzz");
    else if (i % 3 == 0) console.log("Fizz");
    else if (i % 5 == 0) console.log("Buzz");
    else console.log(i);

    rowWrapper.innerHTML +=  `<div class="box1">${i}</div>`
}
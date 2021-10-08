let fizz = [];
for(let i = 0; i < 100; i++) {
    if (i % 3 == 0) {
        fizz.push ("fizz");
    } else if (i % 5 == 0) {
        fizz.push ("buzz");
    } else if (i % 15 == 0) {
        fizz.push ("fizzBuzz");
    } else {
        fizz.push (i);
    }
}
console.log("fizz");
// сделать таблицу умножения
for (let i = 1; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
        // запихнуть в массив
        // некие полезные операции
        console.log (i * j);
    }
}
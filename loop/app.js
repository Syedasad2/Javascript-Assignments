for( var i=1; i<=10; i++){
    document.write(i,'<br>')
}
// Loop to print even numbers from 1 to 20

for (let i = 2; i <= 20; i += 2) {
    document.write(i
        ,'<br>');
}
//loop to print odd numbers 1 to 15
for ( var i = 1; i<=15; i +=2){
    document.write(i,'<br>')
}
//table of 7 number
for ( var i = 1 ; i<=10 ; i++){
    document.write(7 + 'x'+ i + '=',7*i,'<br>')
}
// Define variables for the first two terms of Fibonacci series
let firstTerm = 0;
let secondTerm = 1;

// Print the first two terms
document.write("Fibonacci series up to the 10th term:");
document.write(firstTerm);
document.write(secondTerm);

// Loop to calculate and print subsequent terms
for (let i = 3; i <= 10; i++) {
    let nextTerm = firstTerm + secondTerm;
    document.write(nextTerm);
    firstTerm = secondTerm;
    secondTerm = nextTerm;
}

// Create a function that takes a number as parameter
// Define 3 variables.
// x represents the first number
// y represents the second number
// z represents sum x and y
// Create loop from 1
// Write the terms 
// Return the result 

function fibonacci(num){
    let x = 0;
    let y =1;
    let z ;
    for(let i=1;i<num;i++){
        z = x+y;
        x = y;
        y = z;
    }
    return y
}
console.log(fibonacci(4));





// function fibonacciSequence(num){
//     const fibo=[];
//     let x=1; y=1; sum=0;
//     while(x<9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999){
//         fibo.push(x);
//         sum = x+y; 
//         x=y;
//         y=sum;
//     }
//     return fibo[num-1];
// }
// console.log(fibonacciSequence(881));
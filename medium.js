function sharePizza(num1, num2) {
    let slices = num1 / num2;
    let message =  `Each person gets ${slices.toFixed(2)} of pizza; from our ${num1} slize pizza`;
    return message;
}


// Output: Each person gets 4 slices of pizza; from our 8 slice pizza
console.log(sharePizza(8, 2)); 
// Output: Each person gets 2.67 slices of pizza; from our 8 slice pizza
  console.log(sharePizza(8, 3)); 
// Output: Each person gets 1.05 slices of pizza; from our 21 slice pizza
  console.log(sharePizza(21, 20));
// Output:Each person gets 3.33 slices of pizza; from our 10 slice pizza
  console.log(sharePizza(10, 3)); 





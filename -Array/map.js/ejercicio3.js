/* function factorial(n) {
    // Caso base
    if (n === 0) {
      return 1;
    }
    // Caso recursivo
    return n * factorial(n - 1);
  }
  
  console.log(factorial(5)); // 120

 */
  
  function sum(n) {
    if (n <= 1) {
        return n;
    }
    return n + sum(n - 1);
    
  }

console.log(sum(3));

// ejercicio 1 
function createCounter() {
    // Tu código aquí
  }
  
  const counter = createCounter();
  console.log(counter()); // 1
  console.log(counter()); // 2
  console.log(counter()); // 3

  // ejercicio 2
  function createCounter(step) {
    // Tu código aquí
  }
  
  const counter1 = createCounter(2);
  console.log(counter()); // 2
  console.log(counter()); // 4
  console.log(counter()); // 6

  // ejercicio 3
  function createMultiplier(multiplier) {
    // Tu código aquí
  }
  
  const double = createMultiplier(2);
  console.log(double(5)); // 10
  console.log(double(10)); // 20
  
  const triple = createMultiplier(3);
  console.log(triple(5)); // 15
  console.log(triple(10)); // 30

  // ejercicio 4
  function memoize(func) {
    // Tu código aquí
  }
  
  function expensiveOperation(a, b) {
    console.log('Calculando...');
    return a + b;
  }
  
  const memoizedOperation = memoize(expensiveOperation);
  console.log(memoizedOperation(1, 2)); // Calculando... 3
  console.log(memoizedOperation(1, 2)); // 3
  console.log(memoizedOperation(2, 3)); // Calculando... 5
  console.log(memoizedOperation(2, 3)); // 5
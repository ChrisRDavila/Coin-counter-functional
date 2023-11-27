// if num % 2 === 0 {
//   return false;
// }
// if num % 3 === 0 {
//   return false;
// } 
// if num % 5 === 0 {
//   return false;
// }
// if num % 7 === 0 {
//     return false;
//   }


function eratosthenes(limit) {
  debugger;
  const numbers = Array.from({ length: limit - 1 }, (_, i) => i + 2);

  function sieve(numbers, primeIndex = 0) {
    if (primeIndex >= numbers.length) {
      return numbers;
    }
    const prime = numbers[primeIndex];
    return sieve(numbers.filter((num, index) => index <= primeIndex || num % prime !== 0), primeIndex + 1);
  };

  return sieve(numbers);
}
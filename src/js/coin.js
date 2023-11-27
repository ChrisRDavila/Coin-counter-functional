
//COUNT WITH RECURSION
const coinsCount = (moneyAmount) => {
  if (isNaN(moneyAmount)) {
    return "Please Enter a number";
  }

  let cents = Math.round(moneyAmount * 100);

  if (cents === 0) {
    return "";
  }
  else if (cents >= 25) {
    const quarters = Math.floor(cents / 25);
    return `${quarters} quarters ` + coinsCount((cents - quarters * 25) / 100);
  }
  else if (cents >= 10) {
    const dimes = Math.floor(cents / 10);
    return `${dimes} dimes ` + coinsCount((cents - dimes * 10) / 100);
  }
  else if (cents >= 5) {
    const nickels = Math.floor(cents / 5);
    return `${nickels} nickels ` + coinsCount((cents - nickels * 5) / 100);
  }
  else if (cents >= 1) {
    return `${cents} pennies`;
  }
  else {
    return "";
  }
}

//USING CLOSURE
const coinClosure = (moneyAmount) => {
  const cents = Math.round(moneyAmount * 100);
  const quarters = Math.floor(cents / 25);
  const dimes = Math.floor((cents - quarters * 25) / 10);
  const nickels = Math.floor((cents - (quarters * 25) - (dimes * 10)) / 5); 
  const pennies = Math.floor(cents - (quarters * 25) - (dimes * 10) - (nickels * 5)); 
  return function totalCount() {
    return `${quarters} quarters, ${dimes} dimes, ${nickels} nickels, ${pennies} pennies`;
  }
}

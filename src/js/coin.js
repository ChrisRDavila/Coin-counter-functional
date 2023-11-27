

// export default class Rectangle {
//   constructor(side1, side2) {
//     this.side1 = side1;
//     this.side2 = side2;
//   }

//   getArea() {
//     return this.side1 * this.side2;
//   }
// }

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
   // }
    // else if (moneyAmount / 0.05 >= 1) {
    //   const nickels = Math.floor(moneyAmount / .05);
    //   return `${nickels} nickels ` + coinsCount(moneyAmount - nickels * 0.05);
    // }

    // else if (moneyAmount / 0.01 >= 1) {
    //   const pennies = Math.floor(moneyAmount / .01);
    //   return `${pennies} pennies ` + coinsCount(moneyAmount - pennies * 0.01);
    // }

    
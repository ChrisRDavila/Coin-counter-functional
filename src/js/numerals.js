// const romanNumerals = [
//   { value: 1000, numeral: "M" },
//   { value: 900, numeral: "CM" },
//   { value: 500, numeral: "D" },
//   { value: 400, numeral: "CD" },
//   { value: 100, numeral: "C" },
//   { value: 90, numeral: "XC" },
//   { value: 50, numeral: "L" },
//   { value: 40, numeral: "XL" },
//   { value: 10, numeral: "X" },
//   { value: 9, numeral: "IX" },
//   { value: 5, numeral: "V" },
//   { value: 4, numeral: "IV" },
//   { value: 1, numeral: "I" }
// ];

const countNumerals = (num, result = "") => {

  if (isNaN(num)) {
    return "";
  }

  if (num < 0 || num > 3999) {
    return "";
  }

  if (num >= 1000) {
    return countNumerals(num - 1000, result + "M");
  }

  else if (num >= 900) {
    return countNumerals(num - 900, result + "CM");
  }

  else if (num >= 500) {
    return countNumerals(num - 500, result + "D");
  }

  else if (num >= 400) {
    return countNumerals(num - 400, result + "CD");
  }

  else if (num >= 100) {
    return countNumerals(num - 100, result + "C");
  }

  else if (num >= 90) {
    return countNumerals(num - 90, result + "XC");
  }

  else if (num >= 50) {
    return countNumerals(num - 50, result + "L");
  }
  else if (num >= 40) {
    return countNumerals(num - 40, result + "XL");
  }

  else if (num >= 10) {
    return countNumerals(num - 10, result + "X");
  }

  else if (num >= 9) {
    return countNumerals(num - 9, result + "IX");
  }

  else if (num >= 5) {
    return countNumerals(num - 5, result + "V");
  }

  else if (num >= 4) {
    return countNumerals(num - 4, result + "IV");
  }

  else if (num >= 1) {
    return countNumerals(num - 1, result + "I");
  }
  return result;
}


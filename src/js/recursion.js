// Problem #1
// Write a recursive function that reverses the order of words in a sentence. For instance, "I am a cat" should become "cat a am I".

// Problem #2
// Write a recursive function that concatenates "red green refactor" to a string X number of times, where X is the argument passed into the function. rgr(3) should return the following:

// "red green refactor red green refactor red green refactor"

const recurseReverse = (words) => {
  const wordsArray = words.split(" ");

  if (wordsArray.length === 1 && wordsArray[0] === "") {
    return "";
  } else {
    const remainingWords = wordsArray.slice(1).join(" ");
    const reversedWords = recurseReverse(remainingWords);
    return (reversedWords ? reversedWords + " " : "") + wordsArray[0];
  }
}

const words = "Hello World in JavaScript";
const reversedWords = recurseReverse(words);

console.log(reversedWords);


// Problem #2
// Write a recursive function that concatenates "red green refactor" to a string X number of times, where X is the argument passed into the function. rgr(3) should return the following:

// "red green refactor red green refactor red green refactor"


const rgrString = (num) => {
  if (num > 0) {
    return "red green refactor " + rgrString(num - 1);
  }
  else {
    return "";
  }
}


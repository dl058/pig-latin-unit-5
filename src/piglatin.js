const translate = (word) => {
  // if word starts with a vowel:
  if (isFirstVowel(word)) {
    return `${word}way`;
    // else:
  } else if ("ghost",()=>{
    return `${word.slice(2)}${word[0]}ay`
  })
  else {
    return `${word.slice(1)}${word[0]}ay`;
  }
  // return restOfWord + firstLetter + "ay"
};

const isFirstVowel = (str) => {
  const vowels = "AEIOUaeiou";
  const firstChar = str.charAt(0);
  return vowels.includes(firstChar);
};

module.exports = { translate, isFirstVowel };

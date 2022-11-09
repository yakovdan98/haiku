// Business Logic
export class Haiku {

  constructor(text) {
    this.text = text;
  }

  countSyllables = (line) => {
    return line;
  }

  checkHaiku = (text) => {
    if (text) {
      // Check line count
      const lineArray = text.split("\n");
      console.log(lineArray);
      console.log(lineArray.length);
      if (lineArray.length > 3) {
        return "too many lines";
      } else if (lineArray.length < 3) {
        return "not enough lines";
      } else {
        //syllable checking
        this.line1 = lineArray[0];
        this.line2 = lineArray[1];
        this.line3 = lineArray[3];
      }

      return "poem";
    } else {
      return "not a poem";
    }
  }

  checkWord = (word) => {
    // define vowel set
    const vowels = /[aeiouy]/
    const diphVowels = ["oo", "ea", "ae", "oi", "ou", "oa", "ee", "ai", "eau"];
    let syllableCount = 0;
    for (let i = 0; i < word.length; i++) {
      if (vowels.test(word[i])) {
        // check for dipthong vowel groups
        if (i > 0 && vowels.test(word[i - 1]) && diphVowels.includes(word.substring(i - 1, i + 1))) {
          const pair = word.substring(i - 1, i + 1);
          if (pair === "ea" && i + 1 < word.length && word[i + 1] === 'u') {
            i++;
            continue;
          }
          continue;
        }
        // if last letter is e
        if (word[i] === 'e' && (i === word.length - 1)) {
          // if previous letter is -l
          if (word.length > 1 && word[i - 1] === 'l') {
            // if previous previous letter is a vowel, then don't add to syllable count
            if (word.length > 2 && vowels.test(word[i - 2])) {
              continue;
            } else {
              // else add to syllable count
              syllableCount++;
            }
          } else {
            // if short word ending in e has no syllables yet, give it a syllable
            if (syllableCount === 0) {
              syllableCount++;
            }
            // else don't add to syllable count
            continue
          }
        } else {
          syllableCount++;
        }
      }
    }
    return syllableCount;
  }
}
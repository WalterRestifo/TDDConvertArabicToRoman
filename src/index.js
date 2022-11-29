const ARABIC_50 = 50;
const ROMAN_50 = "L";

const ARABIC_10 = 10;
const ROMAN_10 = "X";

const ARABIC_9 = 9;
const ROMAN_9 = "IX";

const ARABIC_5 = 5;
const ROMAN_5 = "V";

const ARABIC_4 = 4;
const ROMAN_4 = "IV";

const ROMAN_1 = "I";

export function convertArabicToRoman(arabic) {
  let countDown = arabic;
  let returnValue = "";

  function addRomanForEachOccurance(arabic, roman) {
    for (; countDown >= arabic; countDown -= arabic) {
      returnValue += roman;
    }
  }

  addRomanForEachOccurance(ARABIC_50, ROMAN_50);
  addRomanForEachOccurance(40, "XL");
  addRomanForEachOccurance(ARABIC_10, ROMAN_10);
  addRomanForEachOccurance(ARABIC_9, ROMAN_9);
  addRomanForEachOccurance(ARABIC_5, ROMAN_5);
  addRomanForEachOccurance(ARABIC_4, ROMAN_4);

  for (; countDown > 0; countDown--) {
    returnValue += ROMAN_1;
  }

  return returnValue;
}

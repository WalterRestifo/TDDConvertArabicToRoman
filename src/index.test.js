import { convertArabicToRoman } from "./index";

describe("convertArabicToRoman", () => {
  it("should return 'I' if given 1", () => {
    expect(convertArabicToRoman(1)).toBe("I");
  });

  it("should return 'II' if given 2", () => {
    expect(convertArabicToRoman(2)).toBe("II");
  });

  it("should return 'III' if given 3", () => {
    expect(convertArabicToRoman(3)).toBe("III");
  });

  it("should return 'IV' if given 4", () => {
    expect(convertArabicToRoman(4)).toBe("IV");
  });

  it("should return 'V' if given 5", () => {
    expect(convertArabicToRoman(5)).toBe("V");
  });

  it("should return 'VI' if given 6", () => {
    expect(convertArabicToRoman(6)).toBe("VI");
  });

  it("should return 'VII' if given 7", () => {
    expect(convertArabicToRoman(7)).toBe("VII");
  });

  it("should return 'VIII' if given 8", () => {
    expect(convertArabicToRoman(8)).toBe("VIII");
  });

  it("should return 'IX' if given 9", () => {
    expect(convertArabicToRoman(9)).toBe("IX");
  });

  it("should return 'X' if given 10", () => {
    expect(convertArabicToRoman(10)).toBe("X");
  });

  it("should return 'XI' if given 11", () => {
    expect(convertArabicToRoman(11)).toBe("XI");
  });

  it("should return 'XII' if given 12", () => {
    expect(convertArabicToRoman(12)).toBe("XII");
  });

  it("should return 'XIV' if given 14", () => {
    expect(convertArabicToRoman(14)).toBe("XIV");
  });

  it("should return 'XV' if given 15", () => {
    expect(convertArabicToRoman(15)).toBe("XV");
  });

  it("should return 'XVI' if given 16", () => {
    expect(convertArabicToRoman(16)).toBe("XVI");
  });

  it("should return 'XVII' if given 17", () => {
    expect(convertArabicToRoman(17)).toBe("XVII");
  });

  it("should return 'XIX' if given 19", () => {
    expect(convertArabicToRoman(19)).toBe("XIX");
  });

  it("should return 'XX' if given 20", () => {
    expect(convertArabicToRoman(20)).toBe("XX");
  });

  it("should return 'XXV' if given 25", () => {
    expect(convertArabicToRoman(25)).toBe("XXV");
  });

  it("should return 'XL' if given 40", () => {
    expect(convertArabicToRoman(40)).toBe("XL");
  });

  it("should return 'L' if given 50", () => {
    expect(convertArabicToRoman(50)).toBe("L");
  });

  it("should return 'LI' if given 51", () => {
    expect(convertArabicToRoman(51)).toBe("LI");
  });

  it("should return 'LIV' if given 54", () => {
    expect(convertArabicToRoman(54)).toBe("LIV");
  });
});

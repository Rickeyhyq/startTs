import StringValidator from "./Validation";

const lettersRegexp = /^[A-Za-z]+$/;

export default class LettersOnlyValidator implements StringValidator {
  isAcceptable(s: string) {
    return lettersRegexp.test(s);
  }
}
import { expect } from "chai";
import { isValidYear, isNumericId } from "../src/utils/validation";

describe("Validation", () => {
  it("перевіряє числовий ID", () => {
    expect(isNumericId("123")).to.be.true;
    expect(isNumericId("abc")).to.be.false;
  });

  it("перевіряє рік", () => {
    expect(isValidYear("2024")).to.be.true;
    expect(isValidYear("20a4")).to.be.false;
  });
});

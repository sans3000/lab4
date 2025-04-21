import { expect } from "chai";
import { Library } from "../src/services/Library";

describe("Library", () => {
  it("додає книгу", () => {
    const lib = new Library<{ title: string }>();
    lib.add({ title: "Книга 1" });
    expect(lib.findByTitle("Книга 1")?.title).to.equal("Книга 1");
  });
});

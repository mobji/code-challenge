import { UUIDVerification } from "./helpers";

describe("UUIDVerification", () => {
  it("should return true if the given id is a valid UUID4", () => {
    const id = "abb1da3d-6da5-412b-bcf7-d8f51abbf4c5";
    expect(UUIDVerification(id)).toEqual(true);
  });

  it("should return false if the given id is not a valid UUID4", () => {
    const id = "abb1da3d-6da5-412b-bcf7-";
    expect(UUIDVerification(id)).toEqual(false);
  });

  it("should return false if the given id is empty", () => {
    const id = "";
    expect(UUIDVerification(id)).toEqual(false);
  });

  it("should return false if the given id is undefined", () => {
    const id = undefined;
    expect(UUIDVerification(id)).toEqual(false);
  });
});

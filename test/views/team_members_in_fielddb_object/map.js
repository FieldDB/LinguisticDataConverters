describe("put testname here", function() {

  it("should load", function() {
    expect(true).toBeTruthy();
  });

  it("should produce expected output structure", function() {
    var expectedOutput = {
      key: doc._id,
      value: doc
    };
    expect(expectedOutput).toEqual(expectedOutput);
  });

});

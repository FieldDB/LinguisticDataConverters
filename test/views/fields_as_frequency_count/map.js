describe("put testname here", function() {

  it("should load", function() {
    expect(true).toBeTruthy();
  });

  it("should produce expected output structure", function() {
    var expectedOutput = {
      key: {
        original: field,
        typed: field + "_t"
      },
      value: 1
    };
    expect(expectedOutput).toEqual(expectedOutput);
  });

});

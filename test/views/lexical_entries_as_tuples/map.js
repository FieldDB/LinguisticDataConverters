describe("put testname here", function() {

  it("should load", function() {
    expect(true).toBeTruthy();
  });

  it("should produce expected output structure", function() {
    var expectedOutput = {
      key: {
        morpheme: caseInsensitiveMorpheme,
        gloss: caseInsensitiveGloss
      },
      value: 1
    };
    expect(expectedOutput).toEqual(expectedOutput);
  });

});

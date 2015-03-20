describe("put testname here", function() {

  it("should load", function() {
    expect(true).toBeTruthy();
  });

  it("should produce expected output structure", function() {
    var expectedOutput = {
      key: {
        morpheme: thismorpheme,
        gloss: thisgloss || "??",
        syntacticCategory: syntacticCategory
      },
      value: datum
    };
    expect(expectedOutput).toEqual(expectedOutput);
  });

});

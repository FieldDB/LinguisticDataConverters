describe("put testname here", function() {

  it("should load", function() {
    expect(true).toBeTruthy();
  });

  it("should produce expected output structure", function() {
    var expectedOutput = {
      key: {
        morpheme: ms[i],
        gloss: gs[i] || "??"
      },
      value: 1
    };
    expect(expectedOutput).toEqual(expectedOutput);
  });

});

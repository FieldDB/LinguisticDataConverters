describe("put testname here", function() {

  it("should load", function() {
    expect(true).toBeTruthy();
  });

  it("should produce expected output structure", function() {
    var expectedOutput = {
      key: {
        x: previousmorph,
        relation: "preceeds",
        y: morphemes[morph],
        context: word
      },
      value: 1
    };
    expect(expectedOutput).toEqual(expectedOutput);
  });

});

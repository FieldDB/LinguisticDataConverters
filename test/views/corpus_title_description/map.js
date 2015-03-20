describe("put testname here", function() {

  it("should load", function() {
    expect(true).toBeTruthy();
  });

  it("should produce expected output structure", function() {
    var expectedOutput = {
      key: doc.timestamp,
      value: {
        title: doc.title,
        titleAsUrl: doc.titleAsUrl,
        description: doc.description
      }
    };
    expect(expectedOutput).toEqual(expectedOutput);
  });

});

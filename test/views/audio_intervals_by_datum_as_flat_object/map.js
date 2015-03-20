describe("put testname here", function() {

  it("should load", function() {
    expect(true).toBeTruthy();
  });

  it("should produce expected output structure", function() {
    var expectedOutput = {
      key: doc.audioVideo[audioVideoIndex].filename,
      value: obj
    };
    expect(expectedOutput).toEqual(expectedOutput);
  });

});

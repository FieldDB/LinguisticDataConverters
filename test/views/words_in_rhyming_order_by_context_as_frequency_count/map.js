describe("put testname here", function() {

  it("should load", function() {
    expect(true).toBeTruthy();
  });

  it("should produce expected output structure", function() {
    var expectedOutput = {
      key: {
        word: words[word],
        sortThisColumnToFindSuffixes: suffixOrder
      },
      value: {
        rhymingOrderToFindSuffixes: suffixOrder,
        grammaticalContexts: utterance
      }
    };
    expect(expectedOutput).toEqual(expectedOutput);
  });

});

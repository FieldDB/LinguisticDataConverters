describe("put testname here", function() {

  it("should load", function() {
    expect(true).toBeTruthy();
  });

  it("should produce expected output structure", function() {
    var expectedOutput = {
      key: milisecondsSinceLastComment,
      value: {
        user: mostRecentComment.username,
        time: new Date(mostRecentComment.timestampModified).toString(),
        comment: mostRecentComment.text,
        datum: obj
      }
    };
    expect(expectedOutput).toEqual(expectedOutput);
  });

});

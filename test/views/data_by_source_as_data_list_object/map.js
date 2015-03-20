describe("put testname here", function() {

  it("should load", function() {
    expect(true).toBeTruthy();
  });

  it("should produce expected output structure", function() {
    var expectedOutput = {
      key: groupedByKey,
      value: {
        dateEntered: dateEntered,
        datumId: datumId,
        dataListTitle: "Finding unaccusatives",
        groupedByKey: groupedByKey
      }
    };
    expect(expectedOutput).toEqual(expectedOutput);
  });

});

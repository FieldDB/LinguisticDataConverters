describe("put testname here", function() {

  it("should load", function() {
    expect(true).toBeTruthy();
  });

  it("should produce expected output structure", function() {
    var expectedOutput = {
      key: stimulusId,
      value: [date, {
        participant: participant,
        experimenter: experimenter,
        stimulusId: stimulusId,
        stimulusRev: stimulusRev,
        prime: prime,
        target: target,
        response: response,
        score: score,
        itemNumberInExperiment: itemNumberInExperiment,
        subexperimentLabel: subexperimentLabel
      }]
    };
    expect(expectedOutput).toEqual(expectedOutput);
  });

});

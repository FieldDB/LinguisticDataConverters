describe("put testname here", function() {

  it("should load", function() {
    expect(true).toBeTruthy();
  });

  it("should produce expected output structure", function() {
    var expectedOutput = {
      key: "sails",
      value: {
        score: (totalTestScore / totalTestStimuli * 100),
        rawTestScore: totalTestScore,
        totalAnswered: totalAnswered,
        totalTestStimuli: totalTestStimuli,
        participant: doc.participant,
        experimenter: doc.experimenter,
        experimentId: experimentId,
        experimentRev: experimentRev,
        runDuration: doc.runDuration,
        startTime: doc.startTimestamp,
        endTime: doc.endTimestamp,
        experimentConclusion: experimentConclusion,
        subexperiments: subexperiments.map(function(subexperiment) {
          return {
            score: (subexperiment.scoreSubTotal / subexperiment.stimuliSubTotal * 100) + "%",
            calculatedResults: subexperiment.calculatedResults,
            title: subexperiment.label
          };
        })
      }
    };
    expect(expectedOutput).toEqual(expectedOutput);
  });

});

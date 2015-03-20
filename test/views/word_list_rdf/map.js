describe("put testname here", function() {

  it("should load", function() {
    expect(true).toBeTruthy();
  });

  it("should produce expected output structure", function() {

    // <rdf:RDF xmlns:rdf="grandfather>
    //     <lego:concept rdf:about="grandfather">
    //         <lego:hasCounterpart>
    //             <gold:LinguisticSign rdf:about="grandfather">
    //                 <gold:inLanguage>
    //                     <gold:Language rdf:about="grandfather"/>
    //                 </gold:inLanguage>
    //                 <gold:hasForm>
    //                     <gold:formUnit>
    //                         <gold:stringRep>-ak</gold:stringRep>
    //                     </gold:formUnit>
    //                     <gold:formUnit>
    //                         <gold:stringRep>afak</gold:stringRep>
    //                     </gold:formUnit>
    //                 </gold:hasForm>
    //             </gold:LinguisticSign>
    //         </lego:hasCounterpart>
    //     </lego:concept>
    // </rdf:RDF>
    var expectedOutput = {
      key: {
        "rdf:RDF": {
          "_xmlns:rdf": morphItems[i],
          "lego:hasCounterpart": {
            "gold:LinguisticSign": {
              "_rdf:about": morphItems[i],
              "gold:inLanguage": {
                "gold:hasForm": [{
                  "gold:formUnit": {
                    "gold:stringRep": glossItem[i]
                  }
                }]
              }
            }
          }
        }
      },
      value: 1
    };
    expect(expectedOutput).toEqual(expectedOutput);
  });

});

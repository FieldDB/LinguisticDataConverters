describe("put testname here", function() {

  it("should load", function() {
    expect(true).toBeTruthy();
  });

  it("should produce expected output structure", function() {
    var expectedOutput = {
      key: {
        "phrase": {
          "_id": doc._id,
          "_startTime": "0.000",
          "_endTime": "0.000",
          "text": [{
            "_xsi:type": "orthographic",
            "text": datum.utterance
          }, {
            "_xsi:type": "translation",
            "text": datum.translation
          }],
          "words": igtWords
        }
      },
      value: 1
    };
    expect(expectedOutput).toEqual(expectedOutput);
  });

});

// <phrases>
//   <phrase id="s1" startTime="10.963" endTime=" 16.802">
//     <text xsi:type="translation">I wanna steal Josefina(?)
//     </text>
//     <text xsi:type="orthographic">Suwanayki Josefina
//     </text>
//     <words>
//       <word>
//         <text xsi:type="orthographic">Suwanayki
//         </text>
//         <morphemes>
//           <morpheme>
//             <text xsi:type="morpheme">Suwa
//             </text>
//             <text xsi:type="gloss">steal
//             </text>
//           </morpheme>
//           <morpheme>
//             <text xsi:type="morpheme">-nay
//             </text>
//             <text xsi:type="gloss">want
//             </text>
//           </morpheme>
//           <morpheme>
//             <text xsi:type="morpheme">-ki
//             </text>
//             <text xsi:type="gloss">-1-2
//             </text>
//           </morpheme>
//         </morphemes>
//       </word>
//       <word>
//         <text xsi:type="orthographic">Josefina
//         </text>
//         <morphemes>
//           <morpheme>
//             <text xsi:type="morpheme">Josefina
//             </text>
//             <text xsi:type="gloss">Josefina
//             </text>
//           </morpheme>
//         </morphemes>
//       </word>
//     </words>
//   </phrase>
// </phrases>

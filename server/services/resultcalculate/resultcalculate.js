const quizzoneresultcalculate=(resresult,allquestions)=>{
   try{
    var correctAnswerCount = 0;

      var result = resresult.Results[0];
      for (var key in result) {
        if (result.hasOwnProperty(key)) {
          var question = allquestions.find(function (q) {
            return q._id.toString() === result[key].Question_Id;
          });

          if (question && result[key].Selected_Answer === question['Correct Answer']) {
            correctAnswerCount++;
          }
        }
      }
    
    return correctAnswerCount;
   }
   catch(err){
    console.log(err);
   }

}
export {quizzoneresultcalculate}
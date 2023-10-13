import {createConnection } from 'mongoose';
var con1=createConnection(`mongodb://0.0.0.0:27017/quizapp`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  function (err, db) {
    console.log("Quiz App Database Connected successfully");
  }
);
export default con1;
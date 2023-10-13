import { questions } from "../../models/questions.model.js";
import { users } from "../../models/users.model.js";

const getdashboardcardcount=async(req,res,next)=>{
    try{
        const resdata=await users.aggregate([
            {
              $group: {
                _id: null,
                totalUsers: { $sum: 1 }
              }
            },
            {
              $project: {
                _id: 0,
                totalUsers: 1
              }
            },
            {
                $lookup: {
                  from: "questions",
                  let: {},
                  pipeline: [
                    {
                      $group: {
                        _id: null,  // Group all documents into a single group
                        totalquestions:{$sum:1},
                        totalcategory: { $addToSet: '$Category' },
                        totalsubcategory: { $addToSet: '$Sub Category' }
                      }
                    },
                    {
                      $project: {
                        _id: 0,
                        totalquestions:1,
                        totalcategory: { $size: '$totalcategory' },
                        totalsubcategory: { $size: '$totalsubcategory' }
                      }
                    }
                  ],
                  as: "questionStats"
                }
              },
            {
              $unwind: "$questionStats"
            },
            {
                $lookup: {
                  from: "quizzoneresults",
                  let: {},
                  pipeline: [
                    {
                      $group: {
                        _id: "$Test_Date",  // Group all documents into a single group
                        Test_Date:{$first:"$Test_Date"},
                        Total_count:{$sum:1}
                       
                      }
                    },
                    {
                        $project: {
                          _id: 0,
                          totalquestions:1,
                          Test_Date:1,
                          Total_count:1
                        }
                    }
                    
                  ],
                  as: "chartdata"
                }
              },
            {
              $unwind: "$chartdata"
            },
            {
                $group: {
                  _id: null,
                  totalUsers: { $first: "$totalUsers" },
                  questionStats: { $first: "$questionStats" },
                  chartdatas: { $push: "$chartdata" }
                }
              },
              {
                $project: {
                  _id: 0,
                  totalUsers: 1,
                  questionStats: 1,
                  chartdatas: 1
                }
              }
          ],{allowDiskUse:true})
        res.send(resdata);

    }
    catch(err){
        console.log(err)
    }
}
export {getdashboardcardcount};
const fs = require('fs');
const _TestModel = require('../models/testmodel');
const _QuestionModel = require('../models/MCQsmodel');
const { hasSubscribers } = require('diagnostics_channel');
const { updateMany, updateOne } = require('../models/testmodel');

const PostApi = (req, res) => {
    try {
        const _GetBody = req.body;

        if (_GetBody.Name === "Ali") {
            res.json({
                Message: "Welcome Ali"
            })
        } else {
            res.json({
                Message: "You are not welcome"
            })
        }
    } catch (error) {
        res.json({
            message: error.message,
            Data: false,
            Result: null
        })
    }
}

const UserLogin = (req, res) => {
    try {
        const { Email, Password } = req.body;
        console.log(Email, Password);
        res.json({
            Result: { Email: Email, Password: Password }
        })
    } catch (error) {
        res.json({
            Message: error.message
        })
    }

}

const GetData = (req, res) => {
    try {
        const DummyData = [
            {
                Name: '123',
                Age: '123',
                City: '123'
            }, {
                Name: '123',
                Age: '123',
                City: '123'
            }, {
                Name: '123',
                Age: '123',
                City: '123'
            }, {
                Name: '123',
                Age: '123',
                City: '123'
            }, {
                Name: '123',
                Age: '123',
                City: '123'
            },
        ];
        res.json({
            Message:'Data Found Successfuly',
            Data:true,
            Result:DummyData
        })
    } catch (error) {
        res.json({
            Message:error.message,
            Data:false,
            Resul:null
        })
    }
}

const ReadFile = (req, res) =>{
    fs.readFile('file','Utf-8', (error,data)=>{
        res.json({
            File:data
        })
    })
}

const PostTestData = async(req, res) => {
    try {
        //Old Method to get values from req.body
        // const Name =  req.body.Name;
        // const Age = req.body.Age;
        // const City = req.body.City;

        
        //New method by Es6 using destructring
        const { Name, Age , City, Email} = req.body;

        const _DataToSave = new _TestModel({
            Name:Name,
            Age:Age,
            City:City,
            Email:Email
        });
        const _SavedData =  await _DataToSave.save();
        res.json({
            Message:'You have Reached The Controller',
            Data:true,
            Result:_SavedData
        })
    } catch (error) {
        res.json({
            Message:error.message,
            Data:false,
            Result:null
        })
    }
}

const MakeQuestionnaire = async(req, res) => {
    try {
        const { ExamPlan, Price, Questions } = req.body;
        const _GetLengthofQuestionnaireCollection = await _QuestionModel.find().lean();
        if(_GetLengthofQuestionnaireCollection.length >=4){
            return res.json({
                Message:'You cannot add more than 3 Questionnaire'
            })
        }

        const _FindExam = await _QuestionModel.findOne(
            {ExamPlan: ExamPlan}
        ).lean();

        if (_FindExam) {
            const _UpdateExistingExam = await _QuestionModel.updateOne(
                {ExamPlan:ExamPlan},
                {$push:{Questions:Questions}}
            );
            res.json({
                Message:'Questionnaire Updated Successfuly',
                Data:true,
                Result:_UpdateExistingExam
            })
        } else {
            const _DataToSave = new _QuestionModel({
                ExamPlan:ExamPlan,
                Price:Price,
                Questions:Questions
            });
            const _SavedData =  await _DataToSave.save();
            res.json({
                Message:'Data Found Successfuly',
                Data:true,
                Result:_SavedData
            })
        }
        
        
    } catch (error) {
        res.json({
            Message:error.message,
            Data:false,
            Result:null
        })
    }
}

module.exports = { PostApi, UserLogin, GetData, ReadFile, PostTestData, MakeQuestionnaire }
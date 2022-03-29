const _UserUthenticationCluster = require('../models/UserAuthenticationModel')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const UserLogin = async (req, res) => {
    try {
        const { Email, Password } = req.body;
        let _UserToAuthenticate = await _UserUthenticationCluster.findOne(
            { Email: Email },
            // {Email:1, Name:1, Password:1} 
            ).lean();
        if (_UserToAuthenticate === null) {
            return res.json({
                Message: 'Authentication Failed Either Incorrect Password or Email',
                Result: null,
                Data: false
            })
        }

        const _Result = await bcrypt.compare(Password, _UserToAuthenticate.Password);
        if (!_Result) {
            return res.json({
                Message: 'Authentication Failed Either Incorrect Password or Email',
                Result: null,
                Data: false
            })
        }

        // if(_UserToAuthenticate.Status === 0){
        //     return res.json({
        //         Message:"Please Contact Admin For Approval",
        //         Data:false,
        //         Result:null
        //     })
        // }
        const _Token = jwt.sign(
            {
                Email: _UserToAuthenticate.Email,
                UserId: _UserToAuthenticate._id
            },
            'UserLogin',
            { expiresIn: '1h' }
        )

        return res.json({
            Message: 'Authentication SuccessFull',
            Data: true,
            Token: _Token,
            Result: _UserToAuthenticate
        })
    } catch (error) {
        res.json({
            Error: error.message,
            Data: false,
            Result: null
        })
    }
}

const UserRegister = async (req, res) => {
    try {
        const { Name, Email, Password, CourseName } = req.body;
        const QuestionnaireToFind = await _QuestionnaireCluster.findOne({ ExamPlan: CourseName });
        const QuestionnaireId = QuestionnaireToFind._id;
        const CourseToSave = { CName: CourseName, CDetails: QuestionnaireId };
        const _RegisterAdmin = new _UserUthenticationCluster({
            Name: Name,
            Email: Email,
            Password: Password,
            CourseName: CourseToSave
        });
        const SavedUser = await _RegisterAdmin.save();

        const UserQuestionnaireContainerToSave = new _UserUthenticationCluster({
            UserId: SavedUser._id,
            UserName: SavedUser.Name,
            UserEmail: SavedUser.Email,
            Questions: QuestionnaireToFind.Questions,
            TotalQuestions: QuestionnaireToFind.Questions.length,
            ExamPlan:SavedUser.CourseName[0].CName
        })
        await UserQuestionnaireContainerToSave.save();
        res.json({
            Message: `User Register Successfully`,
            Data: true,
            Result: _RegisterAdmin,
            UserLogin: UserLogin
        })
    } catch (error) {
        res.json({ Message: error.message, Result: null, Data: false });
    }
}








module.exports = {
    UserLogin,
    UserRegister
}
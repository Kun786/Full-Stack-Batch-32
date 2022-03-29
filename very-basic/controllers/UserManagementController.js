const { remove, updateOne } = require('../models/UserManagementModel');
const _UserModel = require('../models/UserManagementModel');

const AddUser = async(req, res) => {
     try {
            const {Name, Age, FatherDetails} = req.body;
            const DataToSave = new _UserModel({
                Name:Name,
                Age:Age,
                FatherDetails:FatherDetails
            });
            const SavedData = await DataToSave.save();
         res.json({
             Message:'User Saved',
             Data:true,
             Result:SavedData

         })
     } catch (error) {
         res.json({
             Message:error.message
         })
     }
 }

 const GetUser = async(req, res) => {
    try {
        const _GetAllUsers = await _UserModel.find();
        res.json({
            Message:'Reached GetUser Controller',
            Data:true,
            Result:_GetAllUsers
        })
    } catch (error) {
        res.json({
            Message:error.message
        })
    }
 }

 const DeleteUser = async(req, res) => {
    try {
        const DeleteAllCollection = await _UserModel.remove();
        res.json({
            Message:'Reached DeleteUser Controller',
            Data:true,
            Result:DeleteAllCollection
        })
    } catch (error) {
        res.json({
            Message:error.message
        })
    }
 }

 const UpdateUser = async(req, res) => {
    try {
        res.json({
            Message:'Reached UpdateUser Controller'
        })
    } catch (error) {
        res.json({
            Message:error.message
        })
    }
 }

 const UpdateUserById = async(req, res) => {
    try {
        const UserId = req.params._UserId;
        const { NewName } = req.body; 
        const UserToUpdate = await _UserModel.updateOne(
            {_id:UserId},
            {Name:NewName}
        )

        res.json({
            Message:'User Updated Succeffuly',
            Data:true,
            Result:UserToUpdate
        })
    } catch (error) {
        res.json({
            Message:error.message
        })
    }
 }

 const DeleteUserById = async(req, res) => {
    try {
        const UserId = req.params._UserId;
        const DocumentToDelete = await _UserModel.deleteOne(
            {_id:UserId}
        )
        res.json({
            Message:'Reached DeleteUserById Controller',
            Data:true,
            Result:DocumentToDelete

        })
    } catch (error) {
        res.json({
            Message:error.message
        })
    }
 }

 const AddNewFather = async(req, res) => {
    try {

        const UserId = req.params._UserId;
        const {NewDetails} = req.body;
        const UserSubDocumentToUpdate = await _UserModel.updateOne(
            {_id:UserId},
            {$push:{FatherDetails:NewDetails}}
        )
        res.json({
            Message:'Reached AddNewFather Controller',
            Data:true,
            Result:UserSubDocumentToUpdate

        })
    } catch (error) {
        res.json({
            Message:error.message
        })
    }
 }

 const DeleteSubDocument = async (req, res) =>{
     try {
         const DocumentId =  req.params._DocumentId;
         const SubDocumentId = req.params._SubDocumentId;
         console.log(SubDocumentId);
         const SubDocumentToDelete = await _UserModel.updateOne(
            {_id:DocumentId},
            {$pull:{FatherDetails:{_id:SubDocumentId}}}
         );
         res.json({
            Message:'Reached AddNewFather Controller',
            Data:true,
            Result:SubDocumentToDelete

        })
     } catch (error) {
        res.json({
            Message:error.message
        })
     }
 }

 const UpdateSubDocumentParticularKey = async (req, res) =>{
    try {
        const DocumentId =  req.params._DocumentId;
        const SubDocumentId = req.params._SubDocumentId;
        console.log(SubDocumentId);
        const {NewName}=req.body;
        console.log(NewName);
        const SubDocumentToUpdate = await _UserModel.updateOne(
           {_id:DocumentId,
            'FatherDetails._id':SubDocumentId},
           {$set:{'FatherDetails.FatherName':NewName}}
        );

        // const SubDocumentToUpdate = await _UserModel.updateOne(
        //     {_id:DocumentId,
        //      "FatherDetails._id":SubDocumentId},
        //     {$unset:{"FatherDetails.$.FatherName":NewName}}
        //  );
        res.json({
           Message:'Reached AddNewFather Controller',
           Data:true,
           Result:SubDocumentToUpdate

       })
    } catch (error) {
       res.json({
           Message:error.message
       })
    }
}

 module.exports = {
     AddUser,
     GetUser,
     DeleteUser,
     UpdateUser,
     UpdateUserById,
     DeleteUserById,
     AddNewFather,
     DeleteSubDocument,
     UpdateSubDocumentParticularKey
 }
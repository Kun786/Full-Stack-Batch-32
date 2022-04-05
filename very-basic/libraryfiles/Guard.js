const GuradRoute = (req, res, next) =>{
    try {
        const { Flag } = req.body;
        if(Flag === true){
            next();
        }else{
            return res.json({
                Message:'Your Token is Invalid',
                Data:false,
                Result:null
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

module.exports = { GuradRoute }
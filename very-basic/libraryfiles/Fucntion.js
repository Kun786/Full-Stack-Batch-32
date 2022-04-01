let AuthorizedGuard = (req, res, next) => {
    try {
        const { Token } = req.body; 
        if(Token === 'yes'){
            next();
        }else{
            return res.json({
                Message:'Invalid Token',
                Data:false,
                Result:null
            })
        }
        
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = { AuthorizedGuard }
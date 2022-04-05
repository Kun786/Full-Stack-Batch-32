const jwt = requite('jsonwebtoken');
const SecretKey = 'UserLogin';

let AuthorizeUser = (req, res, next) => {
    try {
        const Token = req.body.token.split(" ")[1];
        const UserToAuthenticate = jwt.verify(Token,SecretKey);
        next();
    } catch (error) {
        res.json({
            Message:error.message,
            Data:false,
            Result:null
        })
    }
}
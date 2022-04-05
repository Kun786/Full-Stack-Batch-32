const jwt = require('jsonwebtoken');
const SecretKey = 'UserLogin';

let AuthorizeUser = (req, res, next) => {
    try {
        const Token = req.headers.Token.split(" ")[1];
        const UserToAuthenticate = jwt.verify(Token, SecretKey);
        if (UserToAuthenticate) {
            next();
        } else {
            return res.json({
                Message: 'Authentication Failed',
                Data: false,
                Result: null
            })
        }
    } catch (error) {
        res.json({
            Message: error.message,
            Data: false,
            Result: null
        })
    }
}

module.exports = { AuthorizeUser }
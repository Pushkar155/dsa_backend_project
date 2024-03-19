const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) return res.sendStatus(401);
    else if(token==process.env.secrete_key){
        next();
    }
    };
module.exports=authenticateToken

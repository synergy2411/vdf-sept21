
// "Bearer token"
const ensureToken = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if(authHeader){
        const token = authHeader.split(" ")[1];
        if(token){
            req.token = token;
            next()
        }else{
            return res.send({message : "token does not exist"})
        }
    }else{
        return res.send({message : "Authorization header missing"})
    }
}

const verifyToken = (req, res, next) => {
    if(req.token){
        jwt.verify(req.token, privateKey, (err, decode)=>{
            if(err){
                return res.send(err)
            }
            console.log("DECODE - ", decode)
            const { id } = decode;
            req.userId = id;
            next()
        })
      }else{
          return res.send({ message: "Token not found with request" });
      }
}

module.exports = {
    ensureToken, verifyToken
}
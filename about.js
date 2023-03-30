const data = require("./data");
const about = ((req,res,next)=>{
    req.data = data;
    next()
})

module.exports = about;
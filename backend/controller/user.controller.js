const user_schema = require("../model/user.model")

exports.createUser = async (req,res)=>{

    if (!req.body.username || !req.body.email || !req.body.number || !req.body.password) {
        return res.status(400).json({ error: 'Missing required fields' });
      }
      
    const user_obj = {
        username : req.body.username,
        email : req.body.email,
        number : req.body.number,
        password : req.body.password
    }
    console.log(user_obj)

    try {
        const user_create = await user_schema.create(user_obj)
        res.status(201).send(user_create)
    } catch (error) {
        console.log("error while creating user ",error)
        res.status(500).send({
            message : "error while creating user"
        })
    }
    

}
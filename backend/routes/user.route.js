const user_controller = require('../controller/user.controller')

module.exports = (app)=>{
    app.post("/api/user/registration",user_controller.createUser)
}
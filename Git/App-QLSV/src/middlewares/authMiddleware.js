const jwt = require('jsonwebtoken')
const Account = require('../app/models/Account')
module.exports.checkLogin = (req, res, next) => {
    try {
      var token = req.cookies.token
      var idUser = jwt.verify(token, 'mk')
      Account.findOne({
        _id: idUser
      })
      .then((user) =>{
        if (user) {
          req.user = user
          next()
        } else {
          
          res.json("Not permission")
        }
      })
    } catch (error) {
        console.log(error)
        res.redirect('/auth/login')
    }
} 
  
// //Check permission student:
// module.exports.checkStudent = (req, res, next) => {
//     //if(req.user.role === 'student' || req.user.role === 'teacher' || req.user.role === 'manager')
//     if (req.user.role >= 0) {
//       next()
//     } else{
//       res.json("Not permission")
//     }
//   }
  
// module.exports.checkTeacher = (req, res, next) => {
//     if(req.user.role >= 1) {
//       next()
//     } else{
//       res.json("Not permission")
//     }
// }
  
// module.exports.checkManager = (req, res, next) => {
//     if(req.user.role >= 2) {
//       next()
//     } else{
//       res.json("Not permission")
//     }
// }
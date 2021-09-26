const Account = require('../models/Account')
const jwt = require('jsonwebtoken')
const { mutipleMongooseToObject } = require('../../util/mongoose')
const { mongooseToObject } = require('../../util/mongoose')


class AccountController {
    //[GET] /signup
    signup(req, res, next){
        res.render('auth/signup')
    }
    //[POST] /account/register
    register(req, res, next){
        const name = req.body.name
        const email = req.body.email
        const username = req.body.username
        const password = req.body.password
        const role = req.body.role
        Account.findOne({
            username: username,
            email: email
        })
        .then(data => {
            if(data) {
                res.json({
                    result: 0,
                    message: 'Tai khoan da ton tai'
                })
            } else{
                return Account.create({
                    name: name,
                    email: email,
                    username: username,
                    password: password,
                    role: role
                })
            }   
        })   
        .then((data) => {
            console.log(data)
            res.json({
                result: 1,
                message: data
            })
        })
        .catch(() => {
            res.status(500).json({
                result: 0,
                message: 'Tao tai khoan thất bại'
            })
        })
    }


    //[GET] /login
    login(req, res, next){
        res.render('auth/login')
    }
    //[POST] /account/login
    loged(req, res, next){
        Account.findOne({
            username: req.body.username,
            password: req.body.password
        })
            .then((account) => {
                if (account) {
                    // res.json("Dang nhap thanh cong")
                    var token = jwt.sign({
                        _id: account._id
                    }, 'mk')
                    req.session.token = token
                    res.json({
                        message: 'Đăng nhập thành công',
                        token: token
                    })

                } else {
                    res.json("Sai thong tin")
                }
            })
            .catch(err =>{
                console.log(err)
            })
    }
}

module.exports = new AccountController
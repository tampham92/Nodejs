const Account = require('../models/Account')
const jwt = require('jsonwebtoken')
const { mutipleMongooseToObject } = require('../../util/mongoose')
const { mongooseToObject } = require('../../util/mongoose')


class AccountController {

    //[POST] /account/register
    register(req, res, next){
        const username = req.body.username
        const password = req.body.password
        Account.findOne({
            username: username
        })
        .then(data => {
            if(data) {
                res.json('Tai khoan da ton tai')
            } else{
                return Account.create({
                    username: username,
                    password: password,
                })
            }   
        })   
        .then(data => {
            res.json('Tao tai khoan thanh cong')
        })
        .catch(error => {
            res.status(500).json('Tao tai khoan that bai')
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
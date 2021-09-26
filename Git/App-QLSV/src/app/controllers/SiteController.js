const Student = require('../models/Student')
const { mutipleMongooseToObject } = require('../../util/mongoose')
const { mongooseToObject } = require('../../util/mongoose')


class SiteController {
    
    //[GET] /home
    home(req, res, next) {

        // Student.find({}, function(err, student){
        //     if (!err) {
        //         student = student.map(function(student) {
        //             return student.toObject()
        //         })
        //         res.render('home', {student})
        //     } else{
        //         res.status(400).json({ error: 'ERROR!!'})
        //     }
        // })
        Student.find({})
            .then(student => {
                res.render('home', {
                    student: mutipleMongooseToObject(student)
                })
            })
            .catch(next)
    } 

    //[GET] /show
    show(req, res, next) {
        Student.findOne({ name: req.params.name})
            .then(student => {
                res.render('students/show', 
                {student: mongooseToObject(student)})
            })
            .catch(next)
    }  

    //[GET] /create
    create(req, res, next){
        res.render('students/create')
    } 
    
    //[POST] /student/create
    store(req, res, next){
        const student = new Student(req.body)
        // student.save(function (error) {
        //     if(!error) {
        //         res.redirect('/')
        //     } else{
        //         res.json({ error: 'ERORR!!!' })
        //     }
        // })
        student.save()
            .then(() => res.redirect('/'))
    }    

    //[GET] /me/stored-students
    storedStudent(req, res, next){
        Student.find({})
            .then(student => {
                res.render('me/stored-students', {
                    student: mutipleMongooseToObject(student)
                })
            })
            .catch(next)
    }

    //[GET] student/edit
    edit(req, res, next){
        Student.findById(req.params.id)
            .then(student => res.render('students/edit', {
                student: mongooseToObject(student)
            }))
            .catch(next)
    }

    //[PUT] student/:id
    update(req, res, next){
        Student.updateOne({_id: req.params.id}, req.body)
            .then(() => res.redirect('/me/stored-students'))
            .catch(next)
    }

    //[DELETE] student/:id
    delete(req, res, next) {
        Student.findByIdAndDelete({_id: req.params.id})
            .then(()=>{ res.redirect('/me/stored-students') })
            .catch(next)
    }

    

    logout(req, res) {
        req.session.destroy(function (err) {
            return res.redirect('/auth/login');
        });
    }
}

module.exports = new SiteController
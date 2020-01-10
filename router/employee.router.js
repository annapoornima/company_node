const express = require('express');
var router = express.Router();
var EmployeeModel = require('../module/employee');
var cors = require('cors')
var app = express()
var corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200
}

router.post('/registerdata', (req, res) => {
    EmployeeModel.find({ Email: req.body.Email }, (err, docs)=> {
        if (docs.length == 0) {
            console.log(req.body);
            var employee = new EmployeeModel();
            
            employee.firstname = req.body.firstname,
                employee.Lastname = req.body.Lastname,
                employee.Email = req.body.Email,
                employee.Password = req.body.password,
                employee.ConfirmPassword = req.body.ConfirmPassword

            employee.save((err,doc)=> {
                console.log(doc);
                
                if (!err){
                    res.status(200).send({msg:' inserted successfully', data:doc});
                
                } else{
                    res.status(400).send({msg:'unsuccess', data:err });
                }
            });
        } else {
            res.status(200).send({ msg:'Emailid already exist' });
        }
    });
});

router.get('/registerlist', (req, res) => {
    EmployeeModel.find({}, (err, doc) => {
        if (!err) {
            console.log(doc);
            res.status(200).send(doc);
        }
    });
});

router.post('/login', (req, res) => {
    console.log(req.body)
    EmployeeModel.find({
        Email: req.body.Username,
        Password: req.body.Password
    }).then(data => {
        console.log("data after calling login success", data);

        res.status(200).send({ data: data, message: "login success" });
    }).catch(err => {
        res.status(400).send({ err: err, message: "login unsuccess" });
        console.log("error while login service", err);
    })
})
module.exports = router;


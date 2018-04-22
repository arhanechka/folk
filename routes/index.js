var express = require('express');
var router = express.Router();
var User = require('../models/user')
var Region = require('../models/region')
var Area = require('../models/area')

router.get('/', (req, res) =>{
    res.send('<h2>It\'s get way<h2>')
});

router.get('/test', (req, res) =>{
    res.send('<h2>It\'s test way<h2>')
})

router.post('/user', (req,res) => {
    let username = req.body.username;
    let firstname = req.body.firstname;
    let lastname = req.body.lastname;
    let email = req.body.email;
    let password = req.body.password;
    User.create(
        {username: username, firstname: firstname, lastname: lastname, email: email, password: password})
    .then(result =>{
        console.log("result:");
        console.log(result);
        res.json(result);
    })        
    })
    router.post('/region', (req,res) => {
        let region_name = req.body.region_name;
        
        Region.create(
            {region_name: region_name})
        .then(result =>{
            console.log("result:");
            console.log(result);
            res.json(result);
        })        
        }
    )
    router.post('/area', (req,res) => {
        let area_name = req.body.area_name;
        let regionId = req.body.regionId;
        
        Area.create(
            {area_name: area_name,
            regionId: regionId})
        .then(result =>{
            console.log("result:");
            console.log(result);
            res.json(result);
        })        
        }
    )

module.exports = router;
var Sequilize = require('sequelize');
var db = require('./config/db')
var User = require('./models/user')
var Region = require('./models/region')
var Area = require('./models/area')

module.exports = function(app){
    db.authenticate()
    .then(()=>{
        console.log("Connection was created");
        User.sync({force: false})
        .then(() => {
          console.log("User synced");
        });
        Region.sync({force: true})
        .then(() => {
          console.log("Region synced");
        });
        Area.sync({force: true})
        .then(() => {
          console.log("Area synced");
        });
    }
)

}
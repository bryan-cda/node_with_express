const Connection = require('sequelize')

const sequelize = new Connection(
    'mysql', 
    'root', 
    '', {
    host: "localhost",
    dialect: "mysql"
})

sequelize.authenticate()
.then(function(){
    console.log('Connection has been openned!')
})
.catch(function(error){
    console.log('Connection problem: ' + error)
})

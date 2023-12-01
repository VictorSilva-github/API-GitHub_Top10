const Sequelize = require('sequelize')

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "./database/database.sqlite"
})


sequelize.authenticate()
    .then(() => {
        console.log("Conexão com sqlite realizada")
    }).catch((error) => {
        console.log("Error: ", error)
    })


module.exports = sequelize
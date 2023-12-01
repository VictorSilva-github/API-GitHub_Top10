const Sequelize = require("sequelize")
const db = require("../db")

const Termos = db.define('terms', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    termo: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

// Termos.sync()

module.exports = Termos
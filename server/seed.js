const Sequelize = require('sequelize')
const {db, Campuses, Students} = require('./db/models')

db.sync({force: true})
.then(() => {
    return Campuses.bulkCreate([

    ])
})
.then(() => {
    return Students.bulkCreate([

    ])
})
.then(() => {
    db.close()
    console.log("Db successfully seeded")
})
.catch(err => {
    console.error("SOMETHING WENT WRONG WITH SEEDING THE DB")
    console.error(err.message)
    console.error(err.stack)
    db.close()
})
const Sequelize = require('sequelize')
const db = require('./db')
const {Campus, Students} = require('./db/models')

db.sync({force: true})
.then(() => {
    return Campus.bulkCreate([
        { name: "Clasic", imageUrl: "https://vignette.wikia.nocookie.net/nekoatsume/images/d/df/Classic_Style.png/revision/latest?cb=20151107131336"},
        { name: "Zen", imageUrl: "https://vignette.wikia.nocookie.net/nekoatsume/images/9/9e/Zen_style.png/revision/latest?cb=20151107131540"},
        { name: "Western", imageUrl: "https://vignette.wikia.nocookie.net/nekoatsume/images/a/aa/Western_style.png/revision/latest?cb=20151107132056"},
        { name: "Modern", imageUrl: "https://vignette.wikia.nocookie.net/nekoatsume/images/a/ac/Modern_style.png/revision/latest?cb=20151107131922"},
        { name: "Rustic", imageUrl: "https://vignette.wikia.nocookie.net/nekoatsume/images/1/16/Rustic_Style.png/revision/latest?cb=20151107131618"}
    ])
})
.then(() => {
    return Students.bulkCreate([
        { firstName: "Sassy", lastName: "Fran", email: "sassyKitty@gmail.com", gpa: 3.0 },
        { firstName: "Billy", lastName: "the Kitten", email: "billy@gmail.com", gpa: 3.7 },
        { firstName: "tubbs", lastName: "McTubs", email: "tubz@gmail.com", gpa: 0.1 },
        { firstName: "Chairman", lastName: "Meow", email: "Meow@gmail.com", gpa: 2.4 },
        { firstName: "Peaches", lastName: "nCream", email: "justdessert@gmail.com", gpa: 4.0 },
        { firstName: "Snowball",lastName: "the white", email: "snowball@gmail.com", gpa: 0.1},
        { firstName: "smokey", lastName: "da bear", email: "forestfirestopper@gmail.com", gpa: 2.5},
        { firstName: "spots", lastName: "and dots", email: "spotty@gmail.com", gpa:1.5},
        { firstName: "shadow", lastName: "Mcknight", email: "blackcatsrule@gmail.com", gpa:3.0},
        { firstName: "Xerxes", lastName: "XI", email: "kingofthecats@gmail.com", gpa:4.0},
        { firstName: "bob", lastName: "the cat", email: "bob@gmail.com", gpa: 0.9},
        { firstName: "mr", lastName: "meowgi", email: "waxonwaxoff@gmail.com", gpa: 3.5},
        { firstName: "guy", lastName: "Furry", email: "meowmix@gmail.com", gpa: 3.2},
        { firstName: "Lady", lastName: "meow meow", email: "vogue@gmail.com", gpa: 3.6},
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
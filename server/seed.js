const Sequelize = require('sequelize')
const db = require('./db')
const {Campus, Students} = require('./db/models')

db.sync({force: true})
.then(() => {
    return Campus.bulkCreate([
        { name: "Classic", imageUrl: "https://vignette.wikia.nocookie.net/nekoatsume/images/d/df/Classic_Style.png/revision/latest?cb=20151107131336"},
        { name: "Zen", imageUrl: "https://vignette.wikia.nocookie.net/nekoatsume/images/9/9e/Zen_style.png/revision/latest?cb=20151107131540"},
        { name: "Western", imageUrl: "https://vignette.wikia.nocookie.net/nekoatsume/images/a/aa/Western_style.png/revision/latest?cb=20151107132056"},
        { name: "Modern", imageUrl: "https://vignette.wikia.nocookie.net/nekoatsume/images/a/ac/Modern_style.png/revision/latest?cb=20151107131922"},
        { name: "Rustic", imageUrl: "https://vignette.wikia.nocookie.net/nekoatsume/images/1/16/Rustic_Style.png/revision/latest?cb=20151107131618"},
        { name: "Sugar", imageUrl: "https://vignette.wikia.nocookie.net/nekoatsume/images/e/e3/Sugary_Style.png/revision/latest?cb=20160325105103"},
        { name: "Cafe", imageUrl: "https://vignette.wikia.nocookie.net/nekoatsume/images/b/b3/Cafe_Style.jpg/revision/latest?cb=20161014013312"}
    ])
})
.then(() => {
    return Students.bulkCreate([
        { firstName: "Sassy", lastName: "Fran", email: "sassyKitty@gmail.com", gpa: 3.0 },
        { firstName: "Billy", lastName: "the Kitten", email: "billy@gmail.com", gpa: 3.7 },
        { firstName: "Tubbs", lastName: "McTubs", email: "tubz@gmail.com", gpa: 0.1 },
        { firstName: "Chairman", lastName: "Meow", email: "Meow@gmail.com", gpa: 2.4 },
        { firstName: "Peaches", lastName: "the magnificient", email: "justdessert@gmail.com", gpa: 4.0 },
        { firstName: "Snowball",lastName: "the White", email: "snowball@gmail.com", gpa: 0.1},
        { firstName: "Smokey", lastName: "Da Bear", email: "forestfirestopper@gmail.com", gpa: 2.5},
        { firstName: "Spots", lastName: "N' dots", email: "spotty@gmail.com", gpa:1.5},
        { firstName: "Shadow", lastName: "Mcknight", email: "blackcatsrule@gmail.com", gpa:3.0},
        { firstName: "Xerxes", lastName: "XI", email: "kingofthecats@gmail.com", gpa:4.0},
        { firstName: "bob", lastName: "the cat", email: "bob@gmail.com", gpa: 0.9},
        { firstName: "Mr", lastName: "Meowgi", email: "waxonwaxoff@gmail.com", gpa: 3.5},
        { firstName: "Guy", lastName: "Furry", email: "meowmix@gmail.com", gpa: 3.2},
        { firstName: "Lady", lastName: "Meow Meow", email: "vogue@gmail.com", gpa: 3.6},
        { firstName: "Senior", lastName: "Don Gato", email: "elSenor@gmail.com", gpa: 3.9 },
        { firstName: "Madam", lastName: "Fortune", email: "LuckyKitty@gmail.com", gpa: 3.7 },
        { firstName: "Conductor", lastName: "Whiskers", email: "choochoo@gmail.com", gpa: 3.2 },
        { firstName: "Bengal", lastName: "Jack", email: "arggggg@gmail.com", gpa: 2.6 },
        { firstName: "Macchiato", lastName: "Latte", email: "starbuckslover@gmail.com", gpa: 3.4 },
        { firstName: "Pumkin", lastName: "Pie", email: "punkin@gmail.com", gpa: 3.2 },
        { firstName: "Sunny", lastName: "Day", email: "herecomesthesun@gmail.com", gpa: 3.4 },
        { firstName: "Fred", lastName: "Davie", email: "fredDavie@gmail.com", gpa: 3.5 },
        { firstName: "Callie", lastName: "Tally", email: "Calliu@gmail.com", gpa:  2.4},
        { firstName: "Tabitha", lastName: "Tigs", email: "tabby@gmail.com", gpa: 2.3 },
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
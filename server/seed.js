const Sequelize = require('sequelize')
const db = require('./db')
const {Campus, Students} = require('./db/models')

db.sync({force: true})
.then(() => {
    return Campus.bulkCreate([
        { name: "Classic", imageUrl: "https://vignette.wikia.nocookie.net/nekoatsume/images/d/df/Classic_Style.png/revision/latest?cb=20151107131336", description: "the classic campus is known as the OG campus here at kitten academy. It has all the comforts for all types of kittens"},
        { name: "Zen", imageUrl: "https://vignette.wikia.nocookie.net/nekoatsume/images/9/9e/Zen_style.png/revision/latest?cb=20151107131540", description: "the zen campus is where its all. for all the chill kitties that like to get their nap on, stop by our meditation pond! this campus just oozes with that good old zen feel"},
        { name: "Western", imageUrl: "https://vignette.wikia.nocookie.net/nekoatsume/images/a/aa/Western_style.png/revision/latest?cb=20151107132056", description: "the western campus is purrfect for a kitten with a wild side! this campus gives kittens all the room to roam. Our good old sheriff billy the kitten runs the show around here. there are no rules in the wild west, so kittens: go wild!"},
        { name: "Modern", imageUrl: "https://vignette.wikia.nocookie.net/nekoatsume/images/a/ac/Modern_style.png/revision/latest?cb=20151107131922", description: "kitten academys hottest club is: the modern campus. it has all the greatest attractions, like little gummy kittens shaped like dogs, cause we're edgy like that. If your looking for something with more of an avant garde flair, come see the modern campus!"},
        { name: "Rustic", imageUrl: "https://vignette.wikia.nocookie.net/nekoatsume/images/1/16/Rustic_Style.png/revision/latest?cb=20151107131618", description: "do you like things old school? is modern life too modern for you? dont you miss the good old days? if you answered yes to any of those questions, boy is the rustic campus the one for you! we keep it simple here at the rustic campus. call me old fashioned, but gosh darn it, thats how I like it!"},
        { name: "Sugar", imageUrl: "https://vignette.wikia.nocookie.net/nekoatsume/images/e/e3/Sugary_Style.png/revision/latest?cb=20160325105103", description: "are you a kitten with a sweet tooth? well sweetie, the sugar campus is the place for you! no one's salty over here."},
        { name: "Cafe", imageUrl: "https://vignette.wikia.nocookie.net/nekoatsume/images/b/b3/Cafe_Style.jpg/revision/latest?cb=20161014013312", description: "dont you just love the smell of coffee? do u want to smell it all the time? well thats what you get with the cafe campus. theres nothing else special about it, it just always smells like coffee"}
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
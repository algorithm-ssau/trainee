const express = require('express')
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')
const newsRoutes = require('./routes/news')

const PORT = process.env.PORT || 3000

const app = express()
const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(newsRoutes)
2145
async function start() {
    try {
        await mongoose.connect(
            'mongodb+srv://admin:admin@cluster0.rfrnx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
            userNewUrlParser: true,
            useFindAndModify: false
        })
        app.listen(PORT, () => {
            console.log('Сервер запущен...')
        })
    } catch (e) {
        console.log(e)
    }
}

start()
//mongodb+srv://admin:<password>@cluster0.jenyq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

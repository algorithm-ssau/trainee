const {Router} = require('express')
const router = Router()

router.get('/', (req, res) => {
    res.render('index.js')
})

router.get('/vacancies', (req, res) => {
    res.render('vacancies')
})
module.exports = router
const express = require('express')
const app = express()
const path = require('path')
const port = 3000

app.use(express.static(path.join(__dirname, 'public')))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.get('/', (req, res) => {
    res.render('pages/home')
})

app.get('/about', (req, res) => {
    res.render('pages/about')
})

app.get('/contact', (req, res) => {
    res.render('pages/contact')
})

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})
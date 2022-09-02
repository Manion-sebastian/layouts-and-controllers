const express = require('express')
const app = express()
const ejsLayouts = require('express-ejs-layouts')

const PORT = 3000
app.set('view engine', 'ejs') 
// this is middleware, it intecepts the request object from client, but before it hits the route
// check for if something needs middleware with the docs.
app.use(ejsLayouts)
app.use('/loveit', require('./controllers/loveit'))
app.use('/leaveit', require('./controllers/leaveit'))

app.listen(PORT, () => {
    console.log(`intruder at ${PORT}`)
})

app.get('/', (req,res) => {
    res.render('home')
})

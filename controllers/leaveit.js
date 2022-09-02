const express = require('express')
const router = express.Router()

router.get('/movies', (req, res) => {
    res.render('movies', {movies: ['The Godfather', 'Marvel']})
})

router.get('/products', (req, res) => {
    res.render('products', {products: ['swirl mop']})
})

module.exports = router
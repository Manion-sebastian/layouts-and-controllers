const express = require('express')
const router = express.Router()

router.get('/movies', (req, res) => {
    res.render('leaveit/movies', {movies: ['The Godfather', 'Marvel']})
})

router.get('/products', (req, res) => {
    res.render('leaveit/products', {products: ['swirl mop']})
})

module.exports = router
const express = require('express')
const router = express.Router()

router.get('/animals', (req, res) => {
    res.render('loveit/animals', {animals: ['sand crab', 'corny joke dog']})
  })

router.get('/food', (req, res) => {
    res.render('loveit/food', {food: ['Tiramisu', 'Tteokbokki']})
})

module.exports = router
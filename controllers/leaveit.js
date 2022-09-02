

app.get('/leaveit/movies', (req, res) => {
    res.render('movies', {movies: ['The Godfather', 'Marvel']})
})

app.get('/leaveit/products', (req, res) => {
    res.render('products', {products: ['swirl mop']})
})
const app = require('express')()

app.listen(process.env.PORT, () => {
    console.log('App started on port:' + process.env.PORT)
})

app.get('/', (req, res) => {
    res.json({
        "hello": "world",
        "docker": "is hard"
    })
})
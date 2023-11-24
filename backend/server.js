const express = require('express');
const app = express();
//const PORT = 5000;

app.get('/', (req, res) => {
    res.json({
        "hello": "world",
        "docker": "is hard"
    })
});

app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`);
});
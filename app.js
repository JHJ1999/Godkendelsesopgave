const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {res.send('Hello World!')})


app.get('/user', (req, res) => {
    res.json({"message": "user1"});
})

app.get('/paymentuser', (req, res) => {
    res.json({"message": "user2"});
})


app.listen(port, 
    () => {console.log(`Express app listening on port ${port}!`)})
    

    console.log();
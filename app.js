const express = require('express')
const app = express()
const port = 3000
const users = require("./Routes/Users.js")
const match = require("./Routes/Interest.js")
const match = require("./Routes/Match.js")


app.use("/Users", users);
app.use("/Interest", interest);
app.use("/Match", match)



app.get('/', (req, res) => {res.send('Hello World!')})



app
.route("/paymentuser")
.get( (req, res) => {})
.post( (req, res) => {})
.put( (req, res) => {})
.delete( (req, res) =>{});


app
.route('/freeuser')
.get( (req, res) => {})
.post( (req, res) => {})
.put( (req, res) => {})
.delete( (req, res) => {});

app.listen(port, 
    () => {console.log(`Express app listening on port ${port}!`)})
    

    console.log();
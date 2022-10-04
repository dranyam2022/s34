const express = require("express");
const app = express();
const port = 8080;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.get('/', (req, res) => {
    res.send('Welcome to the home page')
})

app.get('/users', (req, res) => {
    res.json([{
        "username": "johndoe",
        "password": "johndoe123"
    }])
})

app.delete("/delete-user", (req, res) => {
    res.send(`User ${req.body.username} has been deleted`)
})

app.listen(port, () => {
    console.log(`Server is running at localhost ${port}`)
})

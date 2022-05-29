const express = require('express');
const app = express();

const mongoose = require('mongoose');
const Note = require('./models/Note');

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());


mongoose.connect("mongodb+srv://manishrajput:manish123@cluster0.s2nzfod.mongodb.net/notesdb").then(function () {
    //Home Page Route
    app.get('/', function (req, res) {
        res.send("This is Home Page");
    });

    const noteRouter = require('./routes/routes');
    app.use("/notes",noteRouter);
});




//Strating the Server on a PORT
const PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
    console.log("Server Started at Port: " + PORT);
});
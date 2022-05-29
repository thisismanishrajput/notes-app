const express = require("express");
const router = express.Router();

const Note = require('./../models/Note');
// Fetch all list Route
router.get('/list', async function (req, res) {
    var notes = await Note.find();
    res.json(notes);
});

//  Fetch notes with userid in body
router.post('/list', async function (req, res) {
    var notes = await Note.find({
        userid: req.body.userid
    });
    res.json(notes);
});

// Add notes in database
// app.get('/notes/add',async function (req, res) {
//     const newNote = new Note({
//         id: "0003",
//         userid: "manishsingh5331@gmail.com",
//         title: "My another note with second account",
//         content: "This is the content of another note"
//     });
//     await newNote.save();
//     const respone = {status:200, message: "New Note Created"};
//     res.json(respone);
// });


// Adding data using post method

router.post('/add', async function (req, res) {
    await Note.deleteOne({id:req.body.id});

    const newNote = new Note({
        id: req.body.id,
        userid: req.body.userid,
        title: req.body.title,
        content: req.body.content
    });
    await newNote.save();
    const respone = 
       { message: "New Note Created" + `id: ${req.body.id}`};
  
    res.json(respone);

});

// Delete data 
router.post("/delete",async function(req, res){
    await Note.deleteOne({id:req.body.id});
    const respone = 
       { message: "Notes Deleted Succesfully " + `id: ${req.body.id}`};
    res.json(respone);
});

module.exports = router; 
'use strict';

const express = require('express');
const cors = require('cors');
const Data = require('./data');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/items', Data.getAllItems);
app.get('/items/:id', Data.getOneItem);
app.post('/items', Data.addAnItem);
app.delete('/items/:id', Data.deleteItem);



// Get 

// Data.getAllItems = async(req, res) => {
//   const items = await ItemModel.find({});
//   res.status(200).json(items);
// }

// // Post


// Data.addAnItem = async(req,res,next) => {
//   try {
//     const data = req.body;
//     const item = new ItemModel(data);
//     await item.save();
//     res.status(200).json(item);
//   } catch(e) { next(e.message); }
// }


// // Delete

// Data.deleteItems = async(req, res, next) => {
//     const id = req.params.id;
//     try {
//       await ItemModel.findByIdAndDelete(id);
//       res.sta
//     }
//   }
// }



// // Put 

// Data.getOneItem = async(req, res) => {
//   const id = req.params.id;
//   const items = await ItemModel.find({_id:id});
//   res.status(200).json(items[0]);
// }




app.use('*', (req,res) => {
  res.status(404).send('These are not the droids you are looking for.');
});

app.use( (error,res) => {
  res.status(500).send(`My Bad ... ${error.message}`);
});

// I know this looks different than what you have seen in class, but this is how we need to write the code for testing.
// The index.js is calling the start function to turn on the server.
// There are no errors in the code below. Do not make any changes to these lines.
module.exports = {
  server: app,
  start: (port) => {
    app.listen(port, console.log(`Server is up and running on port: ${port}`));
  },
};

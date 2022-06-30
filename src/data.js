'use strict';

const ItemModel = require('./item-model.js');

const Data = { };

Data.addAnItem = async(req,res,next) => {
  try {
    const data = req.body;
    const item = new ItemModel(data);
    await item.save();
    res.status(200).json(item);
  } catch(e) { next(e.message); }
}

Data.getAllItems = async(req, res) => {
  const data = req.body;
  const items = await ItemModel.find(data);
  res.status(200).json(items);
}

Data.getOneItem = async(req, res) => {
  const id = req.params.id;
  const items = await ItemModel.find({_id:id});
  res.status(200).json(items[0]);
}

Data.deleteItem = async(req, res, next) => {
  const id = req.params.id;
  try {
    const deleteItem = await ItemModel.findyByIdAndDelete(id);
    res.status(200).json(deleteItem);
  } catch(e) { next(e.message);  }
}

module.exports = Data;

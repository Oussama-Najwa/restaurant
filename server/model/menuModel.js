const mongoose = require('mongoose');
let menuSchema = mongoose.Schema({
    title: String,
    image: String,
    catégorie: String,

  });
  const Menu = mongoose.model("Menu", menuSchema);
  module.exports = Menu;
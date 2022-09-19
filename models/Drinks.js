const mongoose = require('mongoose');

const DrinksSchema = new mongoose.Schema ({
    name: String,
    Alchoholic: Boolean,
    Cocktail: String, 
    Glass: String,
    Ingredients: String
}, {timestamps: true});

const Drinks = mongoose.model("Drinks", DrinksSchema);

module.exports = Drinks
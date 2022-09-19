const express = require('express');
const { Drinks } = require('../models');
const { prependOnceListener } = require('../models/Drinks');
const router = express.Router();
const {Drinks} = require('..models')

router.get('/', async (req, res) => {
    try {
        res.json(await Drinks.find({}));
    } catch (error) {
        res.status(400).json(error)
    }
});

router.post('/', async (req, res) => {
    try {
        res.json(await Drinks.create(req.body));
        console.log(req);
        console.log(body)
    }catch (error) {
        res.status(400).json(error)
    }
});

router.get('/:id', async (req, res) => {
    try {
        res.json(await Drinks.findById(req.params.id));
    } catch (error) {
        res.status(400).json(error)
    }
});

router.delete('/:id', async (req, res) => {
    try{
        res.json(await Drinks.findByIdAndUpdate(req.params.id, req.body, {new:true})
        );
    } catch (error) {
        res.status(400).json(error);
    }
});

router.put("/:id", async (req, res) => {
    try{
        res.json(await Drinks.findByIdAndDelete(req.params.id));
    } catch(error) {
        res.status(400).json(error);
    }
});

module.exports = router 
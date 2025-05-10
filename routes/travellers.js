const express = require('express');
const router = express.Router();
const Traveller = require('../models/Traveller');

router.get('/', async (req, res) => {
    try {
        const travellers = await Traveller.find();
        res.json(travellers);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const newTraveller = new Traveller(req.body);
        const savedTraveller = await newTraveller.save();
        res.status(201).json(savedTraveller);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const updatedTraveller = await Traveller.findByIdAndUpdate(
            req.params.id, 
            req.body,
            { new: true }
        );
        if (!updatedTraveller) {
            return res.status(404).json({ message: 'Traveller not found' });
        }
        res.json(updatedTraveller);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const deletedTraveller = await Traveller.findByIdAndDelete(req.params.id);
        if (!deletedTraveller) {
            return res.status(404).json({ message: 'Traveller not found' });
        }
        res.json({ message: 'Traveller deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
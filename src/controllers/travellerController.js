const Traveller = require('../models/travellerModel');

// GET Controller
const getTravellers = async (req, res) => {
    try {
        const travellers = await Traveller.find();
        res.json(travellers);
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
};

// POST controller
const createTraveller = async (req, res) => {
    try {
        const newTraveller = new Traveller(req.body);
        const savedTraveller = await newTraveller.save();
        res.status(201).json(savedTraveller);
    } catch (err) {
        res.status(400).json({
            message: err.message
        });
    }
};

// PUT Controller
const updateTraveller = async (req, res) => {
    try {
        const updatedTraveller = await Traveller.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!updatedTraveller) {
            return res.status(404).json({
                message: 'Traveller not found'
            });
        }
        res.json(updatedTraveller);
    } catch (err) {
        res.status(400).json({
            message: err.message
        });
    }
};

//DELETEController
const deleteTraveller = async (req, res) => {
    try {
        const deletedTraveller = await Traveller.findByIdAndDelete(req.params.id);
        if (!deletedTraveller) {
            return res.status(404).json({
                message: 'Traveller not found'
            });
        }
        res.json({
            message: 'Traveller deleted successfully'
        });
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
};

module.exports = {
    getTravellers,
    createTraveller,
    updateTraveller,
    deleteTraveller
};
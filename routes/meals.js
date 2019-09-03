const express = require('express');
const router = express.Router();


// @route  GET  api/meals
// @desc   Get all user's meals
// @access Private
router.get('/', (req, res) => {
    res.send('Get All Meals');
});       //   ./ pertains to api/meals


// @route  POST  api/meals
// @desc   Add new meal
// @access Private
router.post('/', (req, res) => {
    res.send('Add new meal');
});


// @route  PUT  api/meals/:id
// @desc   Update a specific meal
// @access Private
router.put('/:id', (req, res) => {
    res.send('Update a specific contact');
});



// @route  Delete  api/meals/:id
// @desc   Update a specific meal
// @access Private
router.delete('/:id', (req, res) => {
    res.send('Delete a specific contact');
});


module.exports = router;
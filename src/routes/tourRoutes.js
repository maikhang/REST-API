const express = require('express');
const tourController = require('../app/controllers/tourController');

// Tours
const router = express.Router();
router.param('id', tourController.checkID);

router.route('/')
    .get(tourController.getAllTour)
    .post(tourController.postMiddleware, tourController.createNewTour);
router.route('/:id')
    .get(tourController.getTour)
    .patch(tourController.updateTour)
    .delete(tourController.deleteTour);

module.exports = router;
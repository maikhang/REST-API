const express = require('express');
const fs = require('fs');

// Tours
const tours = JSON.parse(
    fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
);

const getAllTour = (req, res, next) => {
    res.status(200).json({
        status: 'success',
        result: tours.length,
        data: {
            tours
        }
    });
}
const getTour = (req, res, next) => {
    const id = req.params.id * 1;
    const tour = tours.find(el => el.id === id);

    if (!tour) {
        return res.status(404).json({
            status: 'Fail',
            message: 'Not Found ID'
        })
    }

    res.status(200).json({
        status: 'Success',
        data: {
            tour
        }
    });
}
const updateTour = (req, res, next) => {
    const id = req.params.id * 1;
    const tour = tours.find(el => el.id === id);

    if (!tour) {
        return res.status(404).json({
            status: 'Fail',
            message: 'Not Found ID'
        })
    }

    res.status(204).json({
        status: 'Success',
        data: {
            message: "Coming Update..."
        }
    });
}
const deleteTour = (req, res, next) => {
    const id = req.params.id * 1;
    const tour = tours.find(el => el.id === id);

    if (!tour) {
        return res.status(404).json({
            status: 'Fail',
            message: 'Not Found ID'
        })
    }

    res.status(204).json({
        status: 'Success',
        data: {
            tour: null
        }
    });
}
const createNewTour = (req, res, next) => {
    const newId = tours[tours.length - 1].id + 1;
    const newTour = Object.assign({ id: newId }, req.body);

    tours.push(newTour);
    fs.writeFile(
        `${__dirname}/dev-data/data/tours-simple.json`,
        JSON.stringify(tours),
        err => {
            res.status(201).json({
                status: 'Success',
                data: {
                    tour: newTour
                }
            });
        }
    );
}

const router = express.Router();
router.route('/')
    .get(getAllTour)
    .post(createNewTour);
router.route('/:id')
    .get(getTour)
    .patch(updateTour)
    .delete(deleteTour);

module.exports = router;
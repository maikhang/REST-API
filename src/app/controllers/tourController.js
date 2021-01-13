const fs = require('fs');

const tours = JSON.parse(
    fs.readFileSync(`${__dirname}/../../dev-data/data/tours-simple.json`)
);
class tourController {
    // Tours
    checkID = (req, res, next, val) => {
        if (!tours) {
            return res.status(404).json({
                status: 'Fail',
                message: 'Not Found ID'
            })
        }
        next();
    }

    postMiddleware = (req, res, next) => {
        if (!req.body.name || !req.body.price) {
            res.status(400).json({
                status: 'failed',
                message: 'Name or Price not defined'
            });
        }
        next();
    }

    getAllTour = (req, res, next) => {
        res.status(200).json({
            status: 'success',
            result: tours.length,
            data: {
                tours
            }
        });
    }
    getTour = (req, res, next) => {
        const id = req.params.id * 1;
        const tour = tours.find(el => el.id === id);

        res.status(200).json({
            status: 'Success',
            data: {
                tour
            }
        });
    }
    updateTour = (req, res, next) => {
        const id = req.params.id * 1;
        const tour = tours.find(el => el.id === id);

        res.status(204).json({
            status: 'Success',
            data: {
                message: "Coming Update..."
            }
        });
    }
    deleteTour = (req, res, next) => {
        const id = req.params.id * 1;
        const tour = tours.find(el => el.id === id);

        res.status(204).json({
            status: 'Success',
            data: {
                tour: null
            }
        });
    }
    createNewTour = (req, res, next) => {
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

}

module.exports = new tourController;
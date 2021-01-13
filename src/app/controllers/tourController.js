const fs = require('fs');

// Tours
const tours = JSON.parse(
    fs.readFileSync(`${__dirname}/../../dev-data/data/tours-simple.json`)
);

exports.getAllTour = (req, res, next) => {
    res.status(200).json({
        status: 'success',
        result: tours.length,
        data: {
            tours
        }
    });
}
exports.getTour = (req, res, next) => {
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
exports.updateTour = (req, res, next) => {
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
exports.deleteTour = (req, res, next) => {
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
exports.createNewTour = (req, res, next) => {
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

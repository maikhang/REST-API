const express = require('express');

// Users
const getAllUser = (req, res) => {
    res.status(500).json({
        status: 'err',
        message: 'This Route is not defined'
    });
}

const getUser = (req, res) => {
    res.status(500).json({
        status: 'err',
        message: 'This Route is not defined'
    });
}

const createNewUser = (req, res) => {
    res.status(500).json({
        status: 'err',
        message: 'This Route is not defined'
    });
}

const updateUser = (req, res) => {
    res.status(500).json({
        status: 'err',
        message: 'This Route is not defined'
    });
}

const deleteUser = (req, res) => {
    res.status(500).json({
        status: 'err',
        message: 'This Route is not defined'
    });
}

const router = express.Router();
router.route('/')
    .get(getAllUser)
    .post(createNewUser);

router.route('/:id')
    .get(getUser)
    .patch(updateUser)
    .delete(deleteUser);

module.exports = router;
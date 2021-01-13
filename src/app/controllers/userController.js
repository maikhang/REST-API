
class userController {
    getAllUser = (req, res) => {
        res.status(500).json({
            status: 'err',
            message: 'This Route is not defined'
        });
    }

    getUser = (req, res) => {
        res.status(500).json({
            status: 'err',
            message: 'This Route is not defined'
        });
    }

    createNewUser = (req, res) => {
        res.status(500).json({
            status: 'err',
            message: 'This Route is not defined'
        });
    }

    updateUser = (req, res) => {
        res.status(500).json({
            status: 'err',
            message: 'This Route is not defined'
        });
    }

    deleteUser = (req, res) => {
        res.status(500).json({
            status: 'err',
            message: 'This Route is not defined'
        });
    }
}

module.exports = new userController;
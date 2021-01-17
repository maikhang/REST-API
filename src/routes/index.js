const tourRouter = require('./tourRoutes');
const userRouter = require('./userRoutes');

function route(app) {
	app.use('/api/v1/tours', tourRouter);
	app.use('/api/v1/users', userRouter);
}

module.exports = route;

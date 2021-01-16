//Env Variables
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const app = require('../index');

//Connect .Env File
dotenv.config({ path: `${__dirname}/.env` });

//Connect Database
const DB = process.env.DATABASE.replace(
	'<DB_PASSWORD>',
	process.env.DB_PASSWORD
).replace('<DB_NAME>', process.env.DB_NAME);

mongoose
	.set('useUnifiedTopology', true)
	.connect(DB, {
		useNewUrlParser: true,
		useCreateIndex: true,
		useFindAndModify: false,
	})
	.then(() => console.log('Connect DB Successfully!'));

//Start Server
const port = process.env.PORT;

app.listen(port, () => {
	console.log(`Start in port ${port}`);
});

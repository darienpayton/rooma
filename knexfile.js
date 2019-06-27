// Update with your config settings.
require('dotenv').config();
module.exports = {
	development: {
		client: 'mysql',
		connection: {
			user: process.env.DB_USER,
			password: process.env.DB_PW,
			database: process.env.DB_DEV
		},
		migrations: {
			directory: './config/database/migrations'
		}
	},

	production: {
		client: 'mysql',
		connection: {
			user: process.env.DB_USER,
			password: process.env.DB_PW,
			database: process.env.DB_PROD
		}
	}
};

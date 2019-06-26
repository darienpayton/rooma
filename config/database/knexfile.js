// Update with your config settings.
require('dotenv').config();
module.exports = {
	development: {
		client: 'mysql',
		connection: {
			user: process.env.DB_USER,
			password: process.env.DB_PW,
			database: process.env.DB_TEST
		},
		migrations: {
			directory: './migrations'
		}
	}

	// production: {
	// 	client: 'postgresql',
	// 	connection: {
	// 		database: 'my_db',
	// 		user: 'username',
	// 		password: 'password'
	// 	},
	// 	pool: {
	// 		min: 2,
	// 		max: 10
	// 	},
	// 	migrations: {
	// 		tableName: 'knex_migrations'
	// 	}
	// }
};

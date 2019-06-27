exports.up = function(knex, Promise) {
	return knex.schema.createTable('users', tbl => {
		tbl.increments('id');
		tbl.string('email').notNullable();
		tbl.string('first_name').notNullable();
		tbl.string('last_name').notNullable();
		tbl
			.string('pref_id')
			.references('id')
			.onTable('preferences');
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('users');
};

exports.up = function(knex, Promise) {
	return knex.schema.createTable('users', tbl => {
		tbl.increments('id');
		tbl.string('email').notNullable();
		tbl.string('first_name').notNullable();
		tbl.string('last_name').notNullable();
		tbl
			.integer('pref_id')
			.unsigned()
			.notNullable();
		tbl
			.foreign('pref_id')
			.references('preferences.id')
			.onDelete('CASCADE')
			.onUpdate('CASCADE');
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('users');
};

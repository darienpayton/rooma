exports.up = function(knex, Promise) {
	return knex.schema.table('homes', tbl => {
		tbl
			.integer('user_id')
			.unsigned()
			.notNullable();
		tbl
			.foreign('user_id')
			.references('users.id')
			.onDelete('CASCADE')
			.onUpdate('CASCADE');
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('homes');
};

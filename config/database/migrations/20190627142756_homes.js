exports.up = function(knex, Promise) {
	return knex.schema.createTable('homes', tbl => {
		tbl.increments('id');
		tbl
			.integer('user_id')
			.unsigned()
			.notNullable();
		tbl
			.foreign('user_id')
			.references('users.id')
			.onDelete('CASCADE')
			.onUpdate('CASCADE');
		tbl.string('address').notNullable();
		tbl.string('rooms').notNullable();
		tbl.string('pet_friendly').notNullable();
		tbl.string('bathroom').notNullable();
		tbl.string('transportation_proximity').notNullable();
		tbl.integer('rent').notNullable();
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('home');
};

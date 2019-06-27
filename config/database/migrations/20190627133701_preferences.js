exports.up = function(knex, Promise) {
	return knex.schema.createTable('preferences', tbl => {
		tbl.increments('id');
		tbl.string('location').notNullable();
		tbl.string('num_of_roommates').notNullable();
		tbl.string('prefer_pets').notNullable();
		tbl.string('private_bathroom').notNullable();
		tbl.string('transportation_proximity').notNullable();
		tbl.integer('budget').notNullable();
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('preferences');
};

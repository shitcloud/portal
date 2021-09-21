/**
 * @param {import('knex').Knex} knex 
 */
exports.up = function(knex) {
	return knex.schema.createTable('applications', table => {
		table.increments('id', { primaryKey: true });
		table.string('name').notNullable().unique();
		table.string('title').notNullable();
		table.text('description');
		table.string('url').notNullable();
		table.string('image');
		table.string('color').defaultTo('is-default');
		table.string('role');
	});
};

/**
 * @param {import('knex').Knex} knex 
 */
exports.down = function(knex) {
	return knex.schema.dropTableIfExists('applications');
};

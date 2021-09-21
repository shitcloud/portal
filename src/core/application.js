const knex = require('../lib/knex');

/**
 * Find one or more applications
 * @param {Object} filter 
 */
async function find(filter = {}) {
	const applications = await knex('applications').select('*').where(filter).orderBy('id', 'asc');
	return applications;
}

/**
 * Create an application
 * @param {String} name application name
 * @param {String} description application description
 * @param {String} url application url
 */
async function create(name, title, description, url, image, color, role) {
	await knex('applications').insert({
		name,
		title,
		description,
		url,
		image,
		color,
		role
	});
}

/**
 * Delete an application
 * @param {String} name application name
 */
async function remove(name) {
	await knex('applications').del().where('name', name);
}

module.exports = {
	find,
	create,
	remove
};
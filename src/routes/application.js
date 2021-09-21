const router = require('express').Router();
const keycloak = require('../lib/keycloak');
const application = require('../core/application');

router.get('/', keycloak.protect(), async (req, res) => {
	const token = req.kauth.grant.access_token.content;

	const applications = await application.find();
	return res.render('application.hbs', {
		title: 'Shitcloud Portal',
		applications: applications.filter(app => app.role?token.realm_access.roles.includes(app.role):true)
	});
});

module.exports = router;
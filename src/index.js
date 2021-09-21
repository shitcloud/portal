const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const keycloak = require('./lib/keycloak');
const session = require('./lib/session');
const knex = require('./lib/knex');

const applicationRoutes = require('./routes/application');

const app = express();

require('./cmd/application');

app.engine('.hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', 'src/views');
app.set('trust proxy', 'loopback, linklocal, uniquelocal'); 

app.use(session.middleware);

app.use(keycloak.middleware());

app.use(express.static(path.join(__dirname, 'static')));

app.use(applicationRoutes);

knex.migrate.latest().then(() => {
	app.listen(3000);
});
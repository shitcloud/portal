module.exports = {
	knex: {
		client: 'postgresql',
		connection: {
			host: 'localhost',
			database: 'shitcloud_portal',
			user:     'postgres',
			password: 'postgres'
		},
		pool: {
			min: 2,
			max: 10
		},
		migrations: {
			tableName: 'knex_migrations'
		}
	},
	keycloak: {
		'realm': 'shitcloud',
		'auth-server-url': 'https://login.shitcloud.io/auth',
		'ssl-required': 'external',
		'resource': 'portal',
		'public-client': true,
		'confidential-port': 0
	},
	session: {
		secret: 'jNNsr1BilFBqtJExfrM5x'
	},
	redis: {
		host: 'localhost',
		port: 6379
	},
	micro: {
		host: 'localhost'
	}
};
module.exports = {
	apps : [{
		name: "ckcsc-32nd",
		script: "./bin/www",
		watch: true,
		instances: 1,
		env: {
			NODE_ENV: "development",
		},
		env_production : {
			NODE_ENV: "production",
			PORT: 3456
		}
	}]
}


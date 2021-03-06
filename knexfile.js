require('dotenv').load()

module.exports = {
  development:  {
    client: 'pg',
    connection: 'postgres://localhost/galvanize-reads'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABSE_URL + '?ssl=true'
  }
}

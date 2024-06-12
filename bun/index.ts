import { Elysia } from 'elysia'
import { read, write } from './main'
import consola from 'consola'
import { Surreal } from 'surrealdb.js';

const db = new Surreal();


await db.connect('http://127.0.0.1:8000/rpc', {
  // Set the namespace and database for the connection
  namespace: 'test',
  database: 'test',

  // Set the authentication details for the connection
  auth: {
    username: 'root',
    password: 'root',
  },
});

new Elysia()
  .get('/', async () => await read(db))
  .get('/write', async () => await write(db))
  .listen(3000)

consola.box("Server running on port 3000")

import { Elysia } from 'elysia'
import { root } from './main'
import consola from 'consola'



new Elysia()
  .get('/', async () => await root())
  .listen(3000)

consola.box("Server running on port 3000")

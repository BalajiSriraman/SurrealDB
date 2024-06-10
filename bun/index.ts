import { Elysia } from 'elysia'
import { root } from './main'



new Elysia()
  .get('/', async () => await root())
  .listen(3000)
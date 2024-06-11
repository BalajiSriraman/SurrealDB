import consola from 'consola';
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

const readQuerys = [
  `SELECT rating, person.name, product.name AS product_name FROM review;`,
  `SELECT order_date, product_name, <-person.name as person_name, ->product.description FROM order;`,
  `SELECT name, email FROM person WHERE address.country = "England";`,
  `SELECT * FROM review WHERE product.category = "charcoal";`,
  `SELECT count() FROM order WHERE order_status IN ["delivered", "processing", "shipped"] GROUP ALL;`,
  `SELECT array::distinct(product_name) as ordered_products FROM order GROUP ALL;`,
  `SELECT ->product.category AS product_category, math::mean(price) AS avg_price FROM order GROUP BY product_category ORDER BY avg_price DESC;`,
  `RETURN fn::number_of_unfulfilled_orders();`,
  `SELECT product_name, fn::pound_to_usd(price) AS price_usd FROM order;`,
] as const

export const root = async () => {

  consola.start('Querying the database...');


  // random query
  const result = db.query(readQuerys[Math.floor(Math.random() * readQuerys.length)]);

  consola.success('Query successful');
  return result
}

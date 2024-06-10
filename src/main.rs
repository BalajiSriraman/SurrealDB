use surrealdb::engine::remote::ws::Ws;
use surrealdb::opt::auth::Root;
use surrealdb::Surreal;

#[macro_use] extern crate rocket;


#[get("/world")]
fn world() -> &'static str {
    "Hello, world!"
}
#[get("/ping")]
async fn index() -> &'static str {
  let db = Surreal::new::<Ws>("0.0.0.0:8000").await;

  
    // if db is None, then the connection failed
    if db.is_ok() {
    db.signin(Root {
    username: "root" ,
    password: "root",
    })
    .await;

}
"Jeff"
}
#[launch]
fn rocket() -> _ {
    rocket::build().mount("/", routes![index, world])
}
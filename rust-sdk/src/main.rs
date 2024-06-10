#[macro_use] extern crate rocket;

use serde::{Deserialize, Serialize};
use surrealdb::engine::remote::ws::Ws;
use surrealdb::opt::auth::Root;
use surrealdb::sql::Thing;
use surrealdb::Surreal;


#[derive(Debug, Deserialize)]
struct Record {
    #[allow(dead_code)]
    id: Thing,
}

// #[tokio::main]
// async fn secondary_function() -> surrealdb::Result<()> {
//     // Connect to the server
//     let db = Surreal::new::<Ws>("127.0.0.1:8000").await?;
 
//     // Signin as a namespace, database, or root user
//     db.signin(Root {
//         username: "root",
//         password: "root",
//     })
//     .await?;

//     // Select a specific namespace / database
//     db.use_ns("test").use_db("test").await?;

//     let people: Vec<Record> = db.select("person").await?;
//     dbg!(people);

//     // Perform a custom advanced query
//     let groups = db
//         .query("SELECT * FROM person")
//         .await?;
//     dbg!(groups);

//     Ok(())
// }

#[get("/")]
async fn secondary_function() -> surrealdb::Result<()> {
    // Connect to the server
    let db = Surreal::new::<Ws>("127.0.0.1:8000").await?;
 
    // Signin as a namespace, database, or root user
    db.signin(Root {
        username: "root",
        password: "root",
    })
    .await?;

    // Select a specific namespace / database
    db.use_ns("test").use_db("test").await?;

    let people: Vec<Record> = db.select("person").await?;
    dbg!(people);

    // Perform a custom advanced query
    let groups = db
        .query("SELECT * FROM person")
        .await?;
    dbg!(groups);

    Ok(())
}


#[launch]
fn rocket() -> _ {
    rocket::build().mount("/", routes![test])
}
import {createConnection, Connection} from "typeorm";

const connection = createConnection({
    type: "mysql",
    host: "localhost",
    port: 3333,
    username: "test",
    password: "test",
    database: "test"
});
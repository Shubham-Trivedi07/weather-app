const {mongoClient} = require('mongodb');
const connFun = async() => {
    const url = 'mongodb';  // localhost:3000
    const client = new mongoClient(url);
    const dbname = '' //name of the database
    await client.connect();
    console.log('connected succesfully to the server');
    const db = client.db(dbname);
    return db;

}

exports.connFun = connFun;
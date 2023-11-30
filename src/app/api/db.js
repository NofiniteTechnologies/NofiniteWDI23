// get the client
const mysql = require('mysql2');

// import mysql from "mysql2";
// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'lokesh',
  password: ''
});
if(connection){
    console.log("Sucess");
}else{
    console.log("error");
}

export default connection;


// const executeQuery = async (query,data) => {
//     try{
//         const db = await mysql.createConnection({
//             host: "localhost",
//             port: "3306",
//             database: 'lokesh',
//             user: 'root',
//             password: ''
//         });
//         const [result] = await db.execute(query,data);
//         await db.end();
//         console.log(result);
//         return result;
//     } 
//     catch (error){
//         console.log(error);
//         return error;
//     }
// };

// export default executeQuery;
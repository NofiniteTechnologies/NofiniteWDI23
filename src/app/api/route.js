// // import connection from "./db";

// // export async function GET() {
// //     // const res = await connection.query(
// //     //   'SELECT * FROM `user`',
// //     //   function(err, results, fields) {
// //     //     // console.log(results); // results contains rows returned by server
// //     //     // console.log(fields); // fields contains extra meta data about results, if available
// //     //     return results;
// //     //   }
// //     // );
    
// //     // const data = await res.json();
// //     // return Response.json({ "abc": 1234 });


// //     return { "abc": 1234 };
// //   };



// const express = require('express');
// const db = require('./db');

// const router = express.Router();

// router.get('/api/user', async (req, res) => {
//   const query = 'SELECT * FROM user';
//   const [user] = await db.query(query);

//   res.json({ user });
// });

// module.exports = router;



export async function GET() {
    return({
        "name": "lokesh"
    });
}
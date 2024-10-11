<reference type="cypress" />


//const { Pool } = require('pg')


/** 
* @type {Cypress.PluginConfig}
*/





//  module.exports = (on, config) => {

//     const configJson = require(config.configFile)

//     const pool = new Pool(configJson.dbConfig)

// //     const pool = new Pool({
// //         host: 'localhost',
// //         user:'postgres',
// //         password:'1234',
// //         database:'postgres',
// //         port: 5432

// //     })

//     on('task', {
//         removeUser(email) {
//             return new Promise(function(resolve){
//                 pool.query('DELETE FROM public.users WHERE email = $1' , [email] , function(error, result){
//                     if (error) {
//                         throw error
//                     }
//                     resolve({sucess:result})
    
//                 })

//             })
           

//         }


//      })


//  }
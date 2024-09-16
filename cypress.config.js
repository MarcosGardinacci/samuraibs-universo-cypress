
const { Pool } = require('pg')

const { defineConfig } = require("cypress");

module.exports = defineConfig({


  e2e: {

    

    viewportWidth: 1440,
    viewportHeight: 900,

    
  
    
    setupNodeEvents(on, config) {
      // implement node event listeners here

      const pool = new Pool({
        host: 'localhost',
        user:'postgres',
        password:'1234',
        database:'postgres',
        port: 5432

    })

    on('task', {
        removeUser(email) {
            return new Promise(function(resolve){
                pool.query('DELETE FROM public.users WHERE email = $1' , [email] , function(error, result){
                    if (error) {
                        throw error
                    }
                    resolve({sucess:result})
    
                })

            })
           

        }


    })


}

      
      
    },
  })




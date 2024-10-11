
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
                user: 'postgres',
                password: '1234',
                database: 'postgres',
                port: 5432

            })


            on('task', {
                removeUser(email) {
                    return new Promise(function (resolve) {
                        pool.query('DELETE FROM public.users WHERE email = $1', [email], function (error, result) {
                            if (error) {
                                throw error
                            }
                            resolve({ sucess: result })

                        })

                    })


                },

            findToken(email) {
                    return new Promise(function (resolve) {
                        pool.query('select B.token from ' +
                            'public.users A ' +
                            'INNER JOIN public.user_tokens B ' +
                            'ON A.id = B.user_id ' +
                            'Where A.email = $1' +
                            'Order By.created_at', [email], function (error, result) {
                                if (error) {
                                    throw error
                                }
                                resolve({ sucess: result.rows[0].token })

                            })

                    })


                }


            })


        }

    }

})




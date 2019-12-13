const router = require('express').Router();
let users = require('../models/users');

router.route('/auth').get((req, res) => {
    const query = gql`
        query {
            tickets{
                subject
                status{
                  slug
                }
                priority{
                  slug
                }
                user{
                  name
                }
                assigned_to_user{
                  name
                }
              }
        }
    `


    
    // const username = req.body.username;
    // const password = req.body.password;

    // const newUser = new users(
    //     {
    //         id: 5,
    //         name: username,
    //         email: password
    //     }
    // )

    // Console.log(newUser);
})

 module.exports = router;
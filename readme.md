
## RESTful api for basic crud operations
  
-- clone the repo
-- npm install
-- set up your mongodb connection
-- node index.js

api endpoints at http://localhost:3000

GET - `localhost:3000/travellers` - fetch all users

POST - `localhost:3000/travellers` - create user

    {
        "name": "",
        "age": ,
        "email": ""
    }

PUT - `localhost:3000/travellers/:id` - update user details
  
DELETE - `localhost:3000/travellers/:id` - delete user
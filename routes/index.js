// https://dev.to/andrewbaisden/creating-react-node-apps-that-connect-to-postgresql-and-harperdb-41h3
// create a node server 
const express = require('express'); 
const cors = require('cors'); 
const knex = require('knex')
require('dotenv').config()


// Create a connection to postgres database
const db = knex({
    client: 'pg',
    connection: {
        host: process.env.DATABASE_HOST, 
        user: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE,
    },

})
// console.log(db); 

const app = express();

app.use(express.json({extended: false}))


app.use(express.urlencoded({extended: false}));
app.use(express.json())
app.use(cors()); 

app.get('/', (req, res) => res.send('Home Route')); 

//GET request: Fetch all cities from the database 
app.get('/cities',async(req, res) =>  {
    // res.send('Hello');
        try {
            const data = await db.select('*')
            .from('cities'); 
            console.log(data);
            res.json(data);
            console.log('PostgresSQL connected');
        } catch (err) {
            console.error(err); 
        }
})


const port = process.env.PORT || 5000; 

app.listen(port, () => console.log(`Server running on port ${port}`)); 
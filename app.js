import 'dotenv/config';
import express from 'express';
import expressEjsLayouts from 'express-ejs-layouts';
import routes from './server/routes/mainroutes.js';
import connetdb from './server/config/db.js';
const app = express();
const PORT =  5000 || process.env.PORT


// body Parser

app.use(express.urlencoded({extended:true}))
app.use(express.json());

// static
app.use(express.static('public'))

// layout settings
app.use(expressEjsLayouts);
app.set('layout','./layout/main');
app.set('view engine', 'ejs')

//  set routes
app.use('/',routes)

// database settings
connetdb();


app.listen(PORT, () =>{
    console.log(`PORT IS LISTENING ON ${PORT}`);
})
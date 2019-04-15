const express = require('express');

const bodyParser =require('body-parser');

const app = express();
const PORT = process.env.PORT ||3000;

// app.use(bodyParser.json);
// app.use(express.static('./app/public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./routing/htmlRoutes')(app)
require('./routing/apiRoutes')(app)

app.listen(port, function(){
    console.log(`listening on ${PORT}, Have Fun!!`);

})

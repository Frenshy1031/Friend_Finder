const express = require('express');

const bodyParser =require('body-parser');

const app = express();
const PORT = process.env.PORT ||8080;

app.use(express.static(`app/public`));

app.use(express.urlencoded({ 
    extended: true 
}));
app.use(express.json());

require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

app.listen(PORT, function(){
    console.log("Listening on PORT" + PORT);
});


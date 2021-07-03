const express = require('express');
const app = express();
const morgan = require('morgan');

//Settings
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
//route

app.get('/', (req, res) => {
    res.json({"Autor":"Dario Lemos"});
});

//Starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port ' + app.get('port'));
});


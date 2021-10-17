const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const list = require('./routes/list');
const todo = require('./routes/todo');
const PORT = 3000;

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/todo', todo);
app.use('/list', list);

app.get('/', (req, res) => {
 res.send('TODO LIST APP!')
})

app.listen(PORT, () => {
 console.log(`app is running on PORT:${PORT}`)
});
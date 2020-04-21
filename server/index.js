const express = require('express')
const morgan = require('morgan')
const colors = require('colors')
const path = require('path')

const app = express();
const port = 3000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
//serving
app.use(express.static(path.join(__dirname, '../client-react/dist')))








app.listen(port, () => console.log(`SERVER ON @ ${port}!`.cyan))
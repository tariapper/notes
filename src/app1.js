const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.json());

require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true });

const notesRoute = require('./notePosts');
app.use('/', notesRoute);

app.listen(3000);
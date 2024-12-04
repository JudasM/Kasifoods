const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors')

const app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname)));
app.use(cors);
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const routes = require('./routes')

const app = express();

//mongoose.connect('mongodb+srv://gabrielsegalla:gabrielsegalla@cluster0-onmna.mongodb.net/devmap?retryWrites=true&w=majority', {
mongoose.connect('mongodb://gabrielsegalla:gabrielsegalla@cluster0-shard-00-00-onmna.mongodb.net:27017,cluster0-shard-00-01-onmna.mongodb.net:27017,cluster0-shard-00-02-onmna.mongodb.net:27017/devmap?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
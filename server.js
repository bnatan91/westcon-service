

const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const db = require('./models')
// import express from 'express';
// import dotenv from 'dotenv';
// import cors from 'cors';
// import db from './models/index.js'
require('dotenv').config();
const app = express();


app.use(cors({
    credentials: true,
    origin: ['http://localhost:3000']
}));
app.use(express.json());  // JSON

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({extended: true}));

// set port, listen for requests
// const PORT = process.env.PORT || 8080;


db.sequelize.sync();

const PORT = 4011;
app.listen(PORT, () => {
    console.log(`${PORT} - User Service`);
});
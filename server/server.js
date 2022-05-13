import express from 'express';
const app = express();
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

app.listen(8000);

const CONNECTION_URL = 'mongodb+srv://sylviamakowiec:<password>@cluster0.z6ydo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT|| 5000;

// app.get('/login', (req, res) => {
//     res.render('login.ejs')
//   })

// app.get('/signup', (req, res) => {
//     res.render('signup.ejs')
//   })
  
  
//   // POST method route
//   app.post('/', (req, res) => {
//     res.send('POST request to the homepage')
//   })
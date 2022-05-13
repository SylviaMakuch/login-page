const express = require('express');
const app = express();

app.set('view-engine.ejs');
app.listen(8000);

app.get('/login', (req, res) => {
    res.render('login.ejs')
  })

app.get('/signup', (req, res) => {
    res.render('signup.ejs')
  })
  
  
  // POST method route
  app.post('/', (req, res) => {
    res.send('POST request to the homepage')
  })
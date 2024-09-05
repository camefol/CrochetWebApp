const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors())

app.get('/', (req, res) => {
      res.send('Hello from our server!')
})

app.listen(8080, () => {
      console.log('server listening on port 8080')
})

app.get('/tutorials', (req, res) => {
      res.send('Tutorials page');
    });

    app.get('/generator', (req, res) => {
      res.send('Generator page');
    });
    
    app.get('/about-us', (req, res) => {
      res.send('About us page');
    });
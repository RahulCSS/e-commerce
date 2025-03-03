import express from 'express';

// Configuration
const app = express();
const port = 3000;

// Routes
app.get('/', (req, res) => {
  res.send('Hello World!');
})

// Listen
app.listen(port, () => {
    console.log(`Pinging at http://localhost:${port}`)
    })
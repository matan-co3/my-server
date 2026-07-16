const express = require('express');

const app = express();
const port = 3000;

// השורה הזאת חייבת להיות לפני ה-routes
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/about', (req, res) => {
  res.send(`
    <h1>About This Server</h1>
    <p>This server was built with Node.js and Express.</p>
  `);
});

app.get('/api/time', (req, res) => {
  const now = new Date();

  res.json({
    time: now.toLocaleTimeString(),
    date: now.toLocaleDateString()
  });

app.get('/api/greeting', (req, res) => {
  const name = req.query.name || 'World';
  res.json({ greeting: 'Hello, ' + name + '!' }); 
  });


});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

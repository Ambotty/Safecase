const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// Initialize express app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Sample route to check server
app.get('/', (req, res) => {
  res.send('Node.js server is running');
});

// Sample API endpoint for handling incidents
app.post('/report-incident', (req, res) => {
  const { title, type, description, date, status } = req.body;

  console.log('Incident received:', req.body);
  res.status(200).json({ message: 'Incident reported successfully' });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

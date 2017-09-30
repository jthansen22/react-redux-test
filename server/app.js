import express from 'express';
import path from 'path';

// Express Init
const app = express();

// Server Init
const PORT = process.env.PORT || 5000;

// Index Route
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
})

app.listen(PORT, () => {
  console.log(`Server Started on Port: ${PORT}`);
})


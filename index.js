const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Test Route
app.get('/', (req, res) => {
  res.send({ message: 'ReviewGenius AI Backend is running 🚀' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

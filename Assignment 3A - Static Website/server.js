const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static('public'));

// Home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Projects page
app.get('/projects', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'projects.html'));
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})

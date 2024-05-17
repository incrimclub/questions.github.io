const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/submit-question', (req, res) => {
    const question = req.body.question;
    if (!question) {
        return res.status(400).json({ message: 'Question is required' });
    }

    fs.appendFile('questions.txt', question + '\n', (err) => {
        if (err) {
            console.error('Error writing to file', err);
            return res.status(500).json({ message: 'Internal Server Error' });
        }

        res.json({ message: 'Question submitted successfully!' });
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

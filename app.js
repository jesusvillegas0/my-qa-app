const express = require('express');
const app = express();

app.get('/status', (req, res) => {
    res.json({ status: 'ok' });
});

app.get('/sum', (req, res) => {
    const { a, b } = req.query;
    const result = parseInt(a) + parseInt(b);
    res.json({ result });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const cors = require('cors');

const port = 4000;
const app = express();
app.use(bodyParser.json());
app.use(cors());

// Database memory //
const posts = {};

app.get('/posts', (req, res) => {
    res.send(posts);
});

app.post('/posts', (req, res) => {
    const id = randomBytes(4).toString('hex');
    const { title } = req.body;

    posts[id] = { id, title };

    res.status(201).send(posts[id]);
});

app.listen(port, () => {
    console.log(`Sever Posts is running on port: ${port}`);
});
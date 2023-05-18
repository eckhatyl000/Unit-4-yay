const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const { getCompliment, getRandomFortune } = require('./controller.js');

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getRandomFortune);

app.put('/api/users/:id', (req, res) => {
    const userId = req.params.id;
    const { name, email } = req.body;

    db.updateUser(userId, name, email)
        .then(() => {
            res.status(200).send('User updated successfully');
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send('Error updating user');
        });
});

let resources = [];

app.post('/resources', (req, res) => {
    const newResource = req.body;
    const newId = Math.floor(Math.random() * 100000);
    resources.push({ ...newResource, id: newId });
    res.status(201).json({ ...newResource, id: newId });
});

app.delete('/api/users/:id', (req, res) => {
    const id = req.params.id;

    res.status(204).end();
});

app.listen(4000, () => console.log("Server running on 4000"));



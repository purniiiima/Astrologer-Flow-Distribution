// src/index.js
const express = require('express');
const { Astrologer, User } = require('./models');
const { distributeUsers } = require('./algorithm');

const app = express();
const port = 3000;

app.use(express.json());

const astrologers = [];
const users = [];

// Add user
app.post('/users', (req, res) => {
    const { id, name } = req.body;
    const user = new User(id, name);
    users.push(user);
    res.status(201).send(user);
});

// Add astrologer
app.post('/astrologers', (req, res) => {
    const { id, name, topAstrologer } = req.body;
    const astrologer = new Astrologer(id, name, topAstrologer);
    astrologers.push(astrologer);
    res.status(201).send(astrologer);
});

// Toggle top astrologer status
app.put('/astrologers/:id/top', (req, res) => {
    const astrologer = astrologers.find(a => a.id === parseInt(req.params.id));
    if (astrologer) {
        astrologer.topAstrologer = !astrologer.topAstrologer;
        res.status(200).send(astrologer);
    } else {
        res.status(404).send({ message: 'Astrologer not found' });
    }
});

// Distribute users
app.post('/distribute', (req, res) => {
    distributeUsers(users, astrologers); 
    res.status(200).send({ message: 'Users distributed successfully' });
});

// Get user assignments
app.get('/assignments', (req, res) => {
    const assignments = astrologers.map(astrologer => ({
        astrologerId: astrologer.id,
        astrologerName: astrologer.name,
        assignedUsers: astrologer.assignedUsers.map(user => ({
            userId: user.id,
            userName: user.name
        }))
    }));
    res.json(assignments);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
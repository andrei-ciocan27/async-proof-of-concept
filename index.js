import express from 'express';
import Promise from 'bluebird';
import sqlite from 'sqlite';

const app = express();

app.set('json spaces', 4);

const port = process.env.PORT || 5000;

// opening the db then running migrations
const dbPromise = Promise.resolve()
    .then(() => sqlite.open('./database.sqlite', { Promise }))
    .then(db => db.migrate({ force: 'last' }));


// executing different db queries    
app.get('/', async (req, res, next) => {
    try {
        const db = await dbPromise;
        const [contacts, vehicles] = await Promise.all([
            db.all('SELECT * FROM contacts'),
            db.all('SELECT * FROM vehicles'),
        ]);
        res.json({ contacts, vehicles });
    } catch (err) {
        next(err);
    }
});

app.get('/contact/:id', async (req, res, next) => {
    try {
        const db = await dbPromise;
        const contact = await Promise.resolve(
            db.get('SELECT * FROM contacts WHERE contact_id = ?', req.params.id),
        );
        res.json(contact);
    } catch (err) {
        next(err);
    }
});

app.get('/contacts', async (req, res, next) => {
    try {
        const db = await dbPromise;
        const contacts = await Promise.resolve(
            db.all('SELECT * FROM contacts'),
        );
        res.json({contacts});
    } catch (err) {
        next(err);
    }
})

app.get('/vehicles', async (req, res, next) => {
    try {
        const db = await dbPromise;
        const vehicles = await Promise.resolve(
            db.all('SELECT * FROM vehicles'),
        );
        res.json({vehicles});
    } catch (err) {
        next(err);
    }
})

app.get('/vehicle/:id', async (req, res, next) => {
    try {
        const db = await dbPromise;
        const vehicle = await Promise.resolve(
            db.get('SELECT * FROM vehicles WHERE vehicle_id = ?', req.params.id),
        );
        res.json(vehicle);
    } catch (err) {
        next(err);
    }
});

app.get('/vehicles/color/:color', async (req, res, next) => {
    try {
        const db = await dbPromise;
        const vehicle = await Promise.resolve(
            db.get('SELECT * FROM vehicles WHERE vehicle_color = ?', req.params.color),
        );
        res.json(vehicle);
    } catch (err) {
        next(err);
    }
})

app.listen(port);
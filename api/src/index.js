import express from 'express';
import getItems from './routes/getItems.js';
import getItem from './routes/getItem.js';
import addItem from './routes/addItem.js';
import deleteItem from './routes/deleteItem.js';

const app = express()

app.use(express.json());

app.get('/items', getItems)
app.get('/item/:id', getItem)
app.get('/add/:name', addItem)
app.get('/delete/:id', deleteItem)
// app.post('/items', addItem);

let port = process.env.API_PORT
app.listen(port, () => console.log(`Listening on port ${port}`))

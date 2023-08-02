import express from 'express'
import mongoose from 'mongoose';
import Cards from './dbCards.js';
import Cors from 'cors';

//App config
const app = express();
const port = process.env.PORT || 8001
const connection_url = 'mongodb+srv://admin:333771194@cluster0.ppett8x.mongodb.net/?retryWrites=true&w=majority'
//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(Cors());
//db config
mongoose.connect(connection_url);
//api endpoints
app.get('/',(req, res) => res.status(200).send('hello world'));

app.post('/affinity/card', async (req, res) => {
    const dbCard = req.body;
  
    try {
      const createdCard = await Cards.create(dbCard);
      res.status(201).send(createdCard);
    } catch (err) {
      res.status(500).send(err);
    }
  });

  app.get('/affinity/card', async (req, res) => {
    try {
      const cards = await Cards.find();
      res.status(200).send(cards);
    } catch (err) {
      res.status(500).send(err);
    }
  });
//listener
app.listen(port, () => console.log(`listening on localhost: ${port}`));
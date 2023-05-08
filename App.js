
import express from  'express';
import placeRoutes from './Routes/PlaceRoutes.js'
import mongoose from 'mongoose';

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/places', placeRoutes);

// Start server
const port = 3000;


mongoose.connect('mongodb+srv://yassinehasnaouifabrikademy:yassine@cluster0.udtwdab.mongodb.net/todo?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=>{
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
      });
      
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
  console.log('Connected to database');
});

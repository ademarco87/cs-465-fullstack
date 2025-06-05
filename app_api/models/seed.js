// Load DB connection and Trip schema
const mongoose = require('./db');
const Trip = require('./travlr');

const fs = require('fs');
const trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));

// Async function to seed database
const seedDB = async () => {
  try {
    console.log('Deleting existing trips...');
    await Trip.deleteMany({});
    
    console.log('Inserting seed trips...');
    await Trip.insertMany(trips);
    
    console.log('Seeding complete.');
  } catch (err) {
    console.error('Error seeding the database:', err);
  } finally {
    await mongoose.connection.close();
    process.exit(0);
  }
};

seedDB();

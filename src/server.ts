import mongoose from 'mongoose';
import app from './app'

const port: number = 5000

async function main() {
  try{
    await mongoose.connect('mongodb://127.0.0.1:27017/mongoose-practice');
    console.log(`database collection successful`);

    app.listen(port, () => {
      console.log(`Server is Running on port ${port}`)
    })
  }
  catch(err){
    console.log(`failed to database collection`)
  }

}
main();






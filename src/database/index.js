import mongoose from 'mongoose';

class Database {
  constructor() {
    this.mongoDataBase();
  }
  mongoDataBase() {
    //Conexão com banco de dados
    mongoose.connect('mongodb://localhost/databaseSite', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    }).then(() => {
      console.log('Connection Successfully Established');
    }).catch((error) => {
      console.log(`Deu ruim! -> ${error}`);
    });
  }
}

export default new Database();
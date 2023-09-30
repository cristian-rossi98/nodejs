const mongoose = require("mongoose");

const connectToDatabase = async () => {
  await mongoose
    .connect(
      `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@learningnodejs.af09fit.mongodb.net/?retryWrites=true&w=majority`
    )
    .then(console.log("Conexão ao banco de dados realizada com sucesso!"))
    .catch((error) => {
      console.log(
        "Ocorreu um erro ao se conectar com o banco de dados: ",
        error
      );
    });
};

module.exports = connectToDatabase;

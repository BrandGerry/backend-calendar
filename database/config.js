const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_CNN);
    console.log("BD ONLINE");
  } catch (error) {
    console.log("error", error);
    throw new Error("Error inicializar la bd");
  }
};

module.exports = {
  dbConnection,
};

import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const dbConnection = async () => {
  try {
    console.log("URI:", process.env.MONGO_URI); // проверка

    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "qazsports",
    });

    console.log("Подключено к базе данных!");
  } catch (err) {
    console.log(`Ошибка подключения: ${err.message}`);
    process.exit(1);
  }
};

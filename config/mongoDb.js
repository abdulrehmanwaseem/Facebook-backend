import mongoose from "mongoose";

const DbConnection = async () => {
  try {
    await mongoose.connect(
      `${process.env.MONGODB_CONNECTION_URL}/${process.env.DB_NAME}`
    );
    console.log("DataBase Connected");
  } catch (error) {
    console.log(error);
  }
};
export default DbConnection;

import mongoose from "mongoose";

const DbConnection = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://abdulrehmancode1:facebook123@facebook.6rb8sga.mongodb.net/facebook`
    );
    console.log("DataBase Connected");
  } catch (error) {
    console.log(error);
  }
};
export default DbConnection;

import mongoose from "mongoose";

async function connectOnDatabase() {
    mongoose.connect(process.env.DB_CONNECTION_URL);
    return mongoose.connection;
}

export default connectOnDatabase;
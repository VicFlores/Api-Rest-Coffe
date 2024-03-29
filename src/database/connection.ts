import mongoose from "mongoose";

const config = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
	useCreateIndex: true,
	poolSize: 10,
};

const connection = async () => {
	try {
		await mongoose.connect(String(process.env.MONGO_DB), config);
		console.info("Database connected");
	} catch (error) {
		throw new Error(`Database error ${error}`);
	}
};

export default connection;

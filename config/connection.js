const mongoose =require("mongoose") 

const connectToDatabase = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://rudy17:rudy17@cluster0.9jinf.mongodb.net/date?retryWrites=true&w=majority",
      {
        useNewUrlParser: false,
        useUnifiedTopology: true,
      }
    );
    console.log("Connected to MongoDB");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectToDatabase;

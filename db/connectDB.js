const mongooose = require("mongoose");

const connectDB = async () => {
    mongooose
        .connect("mongodb+srv://Devansh:Pass@123@cluster0-8edf7.mongodb.net/<dbname>?retryWrites=true&w=majority", {
            useCreateIndex: true,
            useFindAndModify: true,
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(() => console.log("DB Connected"))
        .catch((e) => {
            console.log("Can't Connect To DB");
        });
};
module.exports = connectDB;
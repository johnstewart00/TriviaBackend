const mongoose = require("mongoose");
const userSchema = require("../misc/schemas");

const User = mongoose.model("User", userSchema);

async function loginClient(username, password) {
  try {
    await mongoose
      .connect(
        "mongodb+srv://johnstewart:1234@cluster0.ypghj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
      )
      .then(() => {
        console.log("Connected to MongoDB");
      })
      .catch((error) => {
        console.error("Error connecting to MongoDB:", error);
      });

    const user = await User.find({
      username: username,
      password: password,
    });
    //console.log('Users:', users);
    if (user.length === 0) {
      throw new Error(
        "Invalid Credentials. No user with that username and password exists"
      );
    }
    console.log("success!", user);

    await mongoose.connection.close();
    return user;
  } catch (error) {
    console.error("Error retrieving the users: ", error);
    throw error;
  }
}
module.exports = loginClient;

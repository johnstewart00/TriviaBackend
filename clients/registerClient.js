const mongoose = require("mongoose");
const userSchema = require("../misc/schemas");

const User = mongoose.model("User", userSchema);

async function registerClient(username, password, firstName, lastName) {
  console.log("in the signup Client signup function");
  console.log("username: ", username);
  console.log("hashedPassword: ", password);
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
    const user = await User.find({ username: username });
    if (user.length > 0) {
      console.log("already a user with that username");
      throw new Error("username already taken!");
    }
    const newUser = new User({
      username: username,
      password: password,
      firstName: firstName,
      lastName: lastName,
    });
    await newUser.save();
    console.log("added a new user", newUser);

    await mongoose.connection.close();
    return Promise.resolve();
  } catch (error) {
    console.log("error adding a user: ", error);
    throw error;
  }
}

module.exports = registerClient;

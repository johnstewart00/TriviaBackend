const registerProcessor = require("../processors/registerProcessor");

async function registerHandler({ username, password, firstName, lastName }) {
  try {
    const result = await registerProcessor(
      username,
      password,
      firstName,
      lastName
    );
    return result;
  } catch (error) {
    console.log("in the register Handler catch block", error);
    throw error;
  }
}

module.exports = registerHandler;

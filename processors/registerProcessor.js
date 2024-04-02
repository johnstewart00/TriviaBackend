const registerClient = require("../clients/registerClient");
const hashFunction = require("../misc/hashFunction");

async function registerProcessor(username, password, firstName, lastName) {
  const passwordHashed = hashFunction(password);
  try {
    const result = await registerClient(
      username,
      passwordHashed,
      firstName,
      lastName
    );
    return result;
  } catch (error) {
    console.log("registerProcessor catch block: ", error);
    throw error;
  }
}
module.exports = registerProcessor;

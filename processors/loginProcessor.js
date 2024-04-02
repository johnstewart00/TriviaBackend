const hashFunction = require("../misc/hashFunction");
const loginClient = require("../clients/loginClient");

async function loginProcessor(username, password) {
  const passwordHashed = hashFunction(password);
  try {
    const result = await loginClient(username, passwordHashed);
    return result;
  } catch (error) {
    console.log("in the login processor catch block: ", error);
    throw error;
  }
}
module.exports = loginProcessor;

// utils/userStore.js

// In-memory user store (temporary, for development/testing)
const users = new Map();

// Add a user to the store (returns false if already exists)
function addUser(email, name, password) {
  if (users.has(email)) return false;
  users.set(email, { email, name, password });
  return true;
}

// Get a user by email
function getUser(email) {
  return users.get(email);
}

// Check if a user already exists
function userExists(email) {
  return users.has(email);
}

// Remove a user (optional, for handling cleanup)
function removeUser(email) {
  users.delete(email);
}

// Clear all users (optional utility)
function clearStore() {
  users.clear();
}

// Export all functions
module.exports = {
  addUser,
  getUser,
  userExists,
  removeUser,
  clearStore,
};

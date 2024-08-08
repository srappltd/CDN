/**
 * Function that greets a user.
 * @param {string} name - The name of the user.
 * @param {string} greeting - The greeting message.
 * @returns {string} The complete greeting message.
 */
function greetUser(name, greeting = 'Hello') {
    return `${greeting}, ${name}!`;
}

// Example usage:
console.log(greetUser('Abhay', 'Hi'));

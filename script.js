let userName = prompt('What is the string of symbols you respond to?')
let userAge = prompt('How many winters have you survived?');
console.log(userName);
console.log(userAge);

let myStory = `Hello ${userName}, how are you doing today? 
How does it feel to be ${userAge} unc?`;
console.log(myStory);

document.getElementById('story').innerHTML = myStory;
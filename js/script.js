const GREETINGS = ['Hello', 'Hey', 'Hi', 'Hola', 'Bonjour', 'Welcome']

// Display a random greeting
document.getElementById('greeting').innerHTML = GREETINGS[Math.floor(Math.random() * GREETINGS.length)]

const GREETINGS = ['Hello', 'Hey', 'Hi', 'Hola', 'Bonjour', 'Welcome', '你好', 'ہیلو']

// Display a random greeting
document.getElementById('greeting').innerHTML = GREETINGS[Math.floor(Math.random() * GREETINGS.length)]

// Switch between light and dark mode based on time
const hours = new Date().getHours()
document.body.classList.add(hours > 6 && hours < 20 ? 'light' : 'dark')

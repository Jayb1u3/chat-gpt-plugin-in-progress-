// Import the openai library
import openai from 'openai';

// Set the API key
openai.apiKey = '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';

// Initialize the chat GPT model
const chatGPT = new openai.CompletionModel('text-davinci-002');

// Function to generate a response
async function generateResponse(input) {
  // Use the chat GPT model to generate a response
  const response = await chatGPT.complete(input);

  // Add the response to the chat window
  const chatMessage = document.createElement('div');
  chatMessage.classList.add('chat-message');
  chatMessage.textContent = response;
  chatMessages.appendChild(chatMessage);
}

// Bind the function to the "Ctrl+Shift+R" hotkey
document.addEventListener('keydown', (event) => {
  if (event.ctrlKey && event.shiftKey && event.key === 'R') {
    // Call the function when the hotkey is pressed
    openChatWindow();
  }
});

// Function to open the chat window
function openChatWindow() {
  // Create the chat window element
  const chatWindow = document.createElement('div');
  chatWindow.classList.add('chat-window');

  // Add the chat header
  const chatHeader = document.createElement('div');
  chatHeader.classList.add('chat-header');
  chatHeader.textContent = 'Chat with Assistant';
  chatWindow.appendChild(chatHeader);

  // Add the chat messages container
  const chatMessages = document.createElement('div');
  chatMessages.classList.add('chat-messages');
  chatWindow.appendChild(chatMessages);

  // Add the chat input container
  const chatInput = document.createElement('div');
  chatInput.classList.add('chat-input');
  chatWindow.appendChild(chatInput);

  // Add the chat input field
  const chatInputField = document.createElement('input');
  chatInput.appendChild(chatInputField);

  // Add the chat send button
  const chatSendButton = document.createElement('button');
  chatSendButton.textContent = 'Send';
  chatInput.appendChild(chatSendButton);

  // Add the chat window to the document
  document.body.appendChild(chatWindow);
}

// Function to toggle between light and dark mode
function toggleLightDarkMode() {
  const chatWindow = document.querySelector('.chat-window');
  chatWindow.classList.toggle('dark-mode');
}

// Function to send a message and get a response from Assistant
async function sendMessage(message) {
  // Send the message to Assistant
  const response = await fetch('https://api.openai.com/v1/chat/gpt', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer YOUR_API_KEY', // Replace with your API key
    },
    body: JSON.stringify({

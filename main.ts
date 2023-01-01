import { App, Plugin, Setting } from 'obsidian';
import openai from 'openai';

// Set the API key
openai.apiKey = 'YOUR_API_KEY';

// Initialize the chat GPT model
const chatGPT = new openai.CompletionModel('text-davinci-002');

export default class ChatGPTPlugin extends Plugin {
  // A setting to configure the API key for the OpenAI API
  @Setting({
    type: 'apiKey',
    label: 'OpenAI API Key',
    required: true,
  })
  apiKey: string;

  async onload() {
    // Set the API key for the OpenAI API
    openai.apiKey = this.apiKey;

    // Bind the function to the "Ctrl+Shift+C" hotkey
    document.addEventListener('keydown', (event) => {
      if (event.ctrlKey && event.shiftKey && event.key === 'C') {
        // Call the function when the hotkey is pressed
        this.openChatWindow();
      }
    });
  }

  // Function to open the chat window
  openChatWindow() {
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
    const chatSendButton = document.createElement

// Add the chat send button const chatSendButton = document.createElement('button'); chatSendButton.textContent = 'Send'; chatInput.appendChild(chatSendButton);
// Handle the send button click event chatSendButton.addEventListener('click', () => { // Get the message from the input field const message = chatInputField.value;
// Clear the input field chatInputField.value = '';
// Send the message to Assistant and get the response this.sendMessage(message).then((response) => { // Display the response in the chat window this.displayMessage('Assistant', response); }); });
// Add the chat window to the DOM document.body.appendChild(chatWindow); }
// Function to display a message in the chat window displayMessage(sender, message) { // Create the message element const messageEl = document.createElement('div'); messageEl.classList.add('message');
// Add the sender const senderEl = document.createElement('div'); senderEl.classList.add('sender'); senderEl.textContent = sender; messageEl.appendChild(senderEl);
// Add the message text const messageTextEl = document.createElement('div'); messageTextEl.classList.add('message-text'); messageTextEl.textContent = message; messageEl.appendChild(messageTextEl);
// Add the message to the chat messages container const chatMessages = document.querySelector('.chat-messages'); chatMessages.appendChild(messageEl); }
// Function to send a message and get a response from Assistant async sendMessage(message) { // Send the message to Assistant const response = await chatGPT.complete(message, { temperature: 0.7, max_tokens: 200, frequency_penalty: 0.5, });
// Get the response from Assistant return response.text; } }

// Register the plugin
App.register(ChatGPTPlugin);
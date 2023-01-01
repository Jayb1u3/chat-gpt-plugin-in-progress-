<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Style-Type" content="text/css">
  <title></title>
  <meta name="Generator" content="Cocoa HTML Writer">
  <meta name="CocoaVersion" content="2299">
  <style type="text/css">
    p.p1 {margin: 0.0px 0.0px 0.0px 0.0px; font: 16.0px Helvetica; color: #121215; -webkit-text-stroke: #121215; background-color: #ffffff}
    p.p2 {margin: 0.0px 0.0px 0.0px 0.0px; font: 16.0px Helvetica; color: #121215; -webkit-text-stroke: #121215; background-color: #ffffff; min-height: 19.0px}
    p.p3 {margin: 0.0px 0.0px 0.0px 0.0px; font: 16.0px Helvetica; color: #121215; -webkit-text-stroke: #121215}
    span.s1 {font-kerning: none}
    span.s2 {font-kerning: none; background-color: #ffffff}
  </style>
</head>
<body>
<p class="p1"><span class="s1">import { Plugin } from 'obsidian';</span></p>
<p class="p1"><span class="s1">import * as openai from 'openai';</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">export class ChatGPT {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>// Initialize the chat GPT model</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>chatGPT = new openai.CompletionModel('text-davinci-002');</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>async sendMessage(input) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>// Use the chat GPT model to generate a response</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>const response = await this.chatGPT.complete(input);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>return response;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>}</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">export default class ChatGPTPlugin extends Plugin {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>// Create an instance of the chatGPT class</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>chatGPT = new ChatGPT();</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>async onload() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>// Bind the function to the "Ctrl+Shift+C" hotkey</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>document.addEventListener('keydown', (event) =&gt; {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>if (event.ctrlKey &amp;&amp; event.shiftKey &amp;&amp; event.key === 'C') {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>// Call the function when the hotkey is pressed</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>this.openChatWindow();</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>});</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>// Function to open the chat window</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>openChatWindow() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>// Create the chat window element</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>const chatWindow = document.createElement('div');</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>chatWindow.classList.add('chat-window');</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>// Add the chat header</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>const chatHeader = document.createElement('div');</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>chatHeader.classList.add('chat-header');</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>chatHeader.textContent = 'Chat with Assistant';</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>chatWindow.appendChild(chatHeader);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>// Add the chat messages container</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>const chatMessages = document.createElement('div');</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>chatMessages.classList.add('chat-messages');</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>chatWindow.appendChild(chatMessages);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>// Add the chat input container</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>const chatInput = document.createElement('div');</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>chatInput.classList.add('chat-input');</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>chatWindow.appendChild(chatInput);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>// Add the chat input field</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>const chatInputField = document.createElement('input');</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>chatInput.appendChild(chatInputField);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>// Add the chat send button</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>const chatSendButton = document.createElement('button');</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>chatSendButton.textContent = 'Send';</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>chatInput.appendChild(chatSendButton);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>// Handle the send button click event</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>chatSendButton.addEventListener('click', () =&gt; {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>// Get the message from the input field</span></p>
<p class="p3"><span class="s2"><span class="Apple-converted-space">      </span>const message = chatInputField.value;</span><span class="s1"><br>
</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>// Clear the input field</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>chatInputField.value = '';</span></p>
<p class="p3"><span class="s1"><br>
</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>// Send the message to Assistant and get the response</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>this.chatGPT.sendMessage(message).then((response) =&gt; {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>// Display the response in the chat window</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>this.displayMessage('Assistant', response);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">      </span>});</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>});</span></p>
<p class="p3"><span class="s1"><br>
</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>// Add the chat window to the DOM</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>document.body.appendChild(chatWindow);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>}</span></p>
<p class="p3"><span class="s1"><br>
</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>// Function to display a message</span></p>
<p class="p1"><span class="s1">Import openai from 'openai';<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s1">export class ChatGPT {<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s1">// Initialize the chat GPT model<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s1">chatGPT = new openai.CompletionModel('text-davinci-002');<span class="Apple-converted-space"> </span></span></p>
<p class="p3"><span class="s1"><br>
</span></p>
<p class="p1"><span class="s1">async sendMessage(input) {<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s1">// Use the chat GPT model to generate a response<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s1">const response = await this.chatGPT.complete(input);<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s1">return response;<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s1">}<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s1">}</span></p>
</body>
</html>

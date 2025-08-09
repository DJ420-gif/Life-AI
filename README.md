<html lang="en" >.
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Advanced Life Doubt Chatbot</title>
  <style>
    /* Reset & base */
    * {
      box-sizing: border-box;
    }
    body {
      margin: 0; padding: 0; background: #1a1a1a;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      display: flex; justify-content: center; align-items: center;
      height: 100vh;
      color: #eee;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    #chat-container {
      background: #252b36;
      width: 100%; max-width: 450px;
      height: 600px;
      border-radius: 12px;
      box-shadow: 0 10px 40px rgba(0,0,0,0.5);
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }
    #chat-header {
      background: #2f3640;
      padding: 20px;
      text-align: center;
      font-size: 1.4rem;
      font-weight: 700;
      letter-spacing: 1px;
      border-bottom: 1px solid #3a3f4b;
      user-select: none;
    }
    #chat-window {
      flex: 1;
      padding: 20px;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      gap: 12px;
      scroll-behavior: smooth;
      background: #1c2028;
    }
    /* Messages */
    .message {
      max-width: 75%;
      padding: 14px 18px;
      border-radius: 20px;
      font-size: 1rem;
      line-height: 1.4;
      position: relative;
      word-wrap: break-word;
      user-select: text;
    }
    .bot-message {
      background: #3b82f6;
      color: #fff;
      align-self: flex-start;
      border-bottom-left-radius: 2px;
      animation: fadeInUp 0.3s ease forwards;
    }
    .user-message {
      background: #10b981;
      color: #f0fdf4;
      align-self: flex-end;
      border-bottom-right-radius: 2px;
      animation: fadeInUp 0.3s ease forwards;
    }
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(12px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    /* Fixed questions area */
    #fixed-questions {
      padding: 12px 20px;
      background: #2f3640;
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      border-top: 1px solid #3a3f4b;
      user-select: none;
    }
    .question-chip {
      background: #394152;
      padding: 10px 16px;
      border-radius: 30px;
      font-size: 0.9rem;
      cursor: pointer;
      color: #a0aec0;
      transition: background-color 0.25s ease, color 0.25s ease;
      box-shadow: 0 2px 5px rgba(0,0,0,0.2);
    }
    .question-chip:hover,
    .question-chip:focus {
      background: #3b82f6;
      color: white;
      outline: none;
      box-shadow: 0 4px 12px rgba(59,130,246,0.7);
    }
    /* Input area */
    #input-area {
      display: flex;
      padding: 15px 20px;
      background: #2f3640;
      border-top: 1px solid #3a3f4b;
    }
    #user-input {
      flex: 1;
      padding: 14px 18px;
      border-radius: 30px;
      border: none;
      font-size: 1rem;
      outline: none;
      background: #394152;
      color: #eee;
      transition: background-color 0.25s ease;
      font-weight: 600;
    }
    #user-input::placeholder {
      color: #a0aec0;
      font-weight: 400;
    }
    #user-input:focus {
      background: #46505f;
    }
    #send-btn {
      margin-left: 12px;
      background: #3b82f6;
      border: none;
      padding: 0 24px;
      border-radius: 30px;
      color: white;
      font-weight: 700;
      font-size: 1rem;
      cursor: pointer;
      transition: background-color 0.25s ease;
      user-select: none;
    }
    #send-btn:hover,
    #send-btn:focus {
      background: #2563eb;
      outline: none;
    }
    /* Typing indicator */
    #typing-indicator {
      align-self: flex-start;
      display: flex;
      gap: 6px;
      margin-bottom: 10px;
      margin-left: 5px;
    }
    .dot {
      width: 10px;
      height: 10px;
      background: #3b82f6;
      border-radius: 50%;
      animation: blink 1.4s infinite both;
    }
    .dot:nth-child(2) {
      animation-delay: 0.2s;
    }
    .dot:nth-child(3) {
      animation-delay: 0.4s;
    }
    @keyframes blink {
      0%, 80%, 100% {
        opacity: 0.3;
      }
      40% {
        opacity: 1;
      }
    }
    /* Scrollbar styling */
    #chat-window::-webkit-scrollbar {
      width: 6px;
    }
    #chat-window::-webkit-scrollbar-track {
      background: #1c2028;
    }
    #chat-window::-webkit-scrollbar-thumb {
      background: #3b82f6;
      border-radius: 3px;
    }
    /* Responsive */
    @media (max-width: 480px) {
      #chat-container {
        height: 100vh;
        max-width: 100vw;
        border-radius: 0;
      }
      #chat-header {
        font-size: 1.2rem;
        padding: 15px;
      }
      #fixed-questions {
        padding: 10px 12px;
      }
      .question-chip {
        font-size: 0.85rem;
        padding: 8px 12px;
      }
      #input-area {
        padding: 10px 12px;
      }
      #user-input {
        font-size: 0.9rem;
        padding: 12px 14px;
      }
      #send-btn {
        font-size: 0.9rem;
        padding: 0 18px;
      }
    }
  </style>
</head>
<body>

<div id="chat-container" role="main" aria-label="Life Doubt Chatbot">
  <header id="chat-header">Life Doubt Chatbot</header>
  <section id="chat-window" aria-live="polite" aria-relevant="additions"></section>
  <nav id="fixed-questions" aria-label="Common questions"></nav>
  <form id="input-area" onsubmit="return false;">
    <input type="text" id="user-input" aria-label="Type your doubt" autocomplete="off" placeholder="Type your doubt here..." />
    <button id="send-btn" aria-label="Send message">Send</button>
  </form>
</div>

<script>
  // Fixed Q&A you can customize
  const qa = {
    "How to be happy?": "Happiness comes from within. Focus on gratitude and self-care.",
    "How to handle stress?": "Try meditation, exercise, and time management to reduce stress.",
    "What is the meaning of life?": "Life's meaning is personal; find purpose in what you love.",
    "How to improve relationships?": "Communicate openly and show empathy to build strong relationships."
  };

  const chatWindow = document.getElementById('chat-window');
  const fixedQuestions = document.getElementById('fixed-questions');
  const userInput = document.getElementById('user-input');
  const sendBtn = document.getElementById('send-btn');

  // Utility: Smooth scroll chat to bottom
  function scrollChatToBottom() {
    chatWindow.scrollTo({ top: chatWindow.scrollHeight, behavior: 'smooth' });
  }

  // Typing animation for bot messages
  async function botTypingEffect(text) {
    const typingIndicator = document.createElement('div');
    typingIndicator.id = 'typing-indicator';
    typingIndicator.innerHTML = `
      <span class="dot"></span><span class="dot"></span><span class="dot"></span>
    `;
    chatWindow.appendChild(typingIndicator);
    scrollChatToBottom();

    // Wait about 1.2 seconds for typing simulation
    await new Promise(res => setTimeout(res, 1200));

    // Remove typing indicator
    typingIndicator.remove();

    // Show message with fade-in animation
    addMessage(text, 'bot');
  }

  // Add message to chat window
  function addMessage(text, sender) {
    const msgDiv = document.createElement('div');
    msgDiv.classList.add('message');
    msgDiv.classList.add(sender === 'bot' ? 'bot-message' : 'user-message');
    msgDiv.textContent = text;
    chatWindow.appendChild(msgDiv);
    scrollChatToBottom();
  }

  // Display fixed questions as chips/buttons
  function displayFixedQuestions() {
    fixedQuestions.innerHTML = '';
    Object.keys(qa).forEach(question => {
      const chip = document.createElement('button');
      chip.type = 'button';
      chip.className = 'question-chip';
      chip.textContent = question;
      chip.addEventListener('click', () => handleUserQuestion(question));
      fixedQuestions.appendChild(chip);
    });
  }

  // Handle user question (from chip or input)
  async function handleUserQuestion(question) {
    if (!question.trim()) return;

    addMessage(question, 'user');

    // Check fixed answers, else fallback message
    if (qa.hasOwnProperty(question)) {
      await botTypingEffect(qa[question]);
    } else {
      await botTypingEffect("We will answer you as soon as possible.");
    }
  }

  // Handle sending message
  sendBtn.addEventListener('click', () => {
    const question = userInput.value.trim();
    if (!question) return;
    userInput.value = '';
    handleUserQuestion(question);
  });

  // Send on Enter key pressed
  userInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      sendBtn.click();
    }
  });

  // Initialize chatbot with greeting and fixed questions
  async function initChatbot() {
    await botTypingEffect("HAVE A DOUBT REGARDING LIFE?");
    displayFixedQuestions();
  }

  initChatbot();
</script>

</body>
</html>

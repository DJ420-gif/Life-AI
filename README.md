<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Class 10 Study Hub - Modern study materials and solutions for Class 10 students.">
    <title>Class 10 Study Hub | Advanced Features</title>
    <style>
        /* Global Styling */
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            transition: background-color 0.3s, color 0.3s;
        }
        body.dark-mode {
            background-color: #121212;
            color: #ffffff;
        }
        header {
            background: linear-gradient(90deg, #4CAF50, #66BB6A);
            color: white;
            padding: 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .dashboard {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            margin: 20px;
        }
        .card {
            background: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            text-align: center;
            transition: transform 0.3s;
        }
        .card:hover {
            transform: scale(1.05);
        }
        footer {
            background: #333;
            color: white;
            text-align: center;
            padding: 10px 0;
        }
        /* Chatbot Styling */
        .chatbot {
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 60px;
            height: 60px;
            background: #4CAF50;
            border-radius: 50%;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
        }
        .chatbot-icon {
            color: white;
            font-size: 1.5rem;
        }
        .chatbot-popup {
            position: fixed;
            bottom: 100px;
            right: 20px;
            width: 300px;
            background: white;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            border-radius: 10px;
            padding: 20px;
            display: none;
        }
        .chatbot-popup.active {
            display: block;
        }
        .chatbot-header {
            font-weight: bold;
            margin-bottom: 10px;
        }
        .chatbot-input {
            width: calc(100% - 40px);
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
            margin-top: 10px;
        }
    </style>
</head>
<body>
    <header>
        <h1>Class 10 Study Hub</h1>
        <button onclick="toggleTheme()">Light/Dark Mode</button>
    </header>
    <div class="container">
        <!-- User Profile Section -->
        <section id="profile">
            <h2>Welcome, <span id="username">Guest</span>!</h2>
            <button onclick="login()">Login/Signup</button>
        </section>
        <!-- Dashboard Section -->
        <h2>Subjects</h2>
        <div class="dashboard">
            <div class="card" onclick="navigateTo('Math')">
                <h3>Math</h3>
                <p>Master formulas, practice tests, and solutions.</p>
            </div>
            <div class="card" onclick="navigateTo('Science')">
                <h3>Science</h3>
                <p>Explore notes, diagrams, and experiments.</p>
            </div>
            <div class="card" onclick="navigateTo('English')">
                <h3>English</h3>
                <p>Improve grammar, comprehension, and writing.</p>
            </div>
            <div class="card" onclick="navigateTo('Social Science')">
                <h3>Social Science</h3>
                <p>Learn history, geography, and economics.</p>
            </div>
        </div>
        <!-- Progress Tracker -->
        <h2>Progress Tracker</h2>
        <div>
            <p><strong>Chapters Completed:</strong> 10/20</p>
            <progress value="10" max="20"></progress>
        </div>
        <!-- Chatbot Section -->
        <div class="chatbot" onclick="toggleChatbot()">
            <span class="chatbot-icon">💬</span>
        </div>
        <div class="chatbot-popup" id="chatbot-popup">
            <div class="chatbot-header">Chatbot Assistant</div>
            <div id="chatbot-output"></div>
            <input
                type="text"
                id="chatbot-input"
                class="chatbot-input"
                placeholder="Ask me anything..."
                onkeydown="if(event.key === 'Enter') handleChatInput()"
            />
        </div>
    </div>
    <footer>
        <p>&copy; 2025 Class 10 Study Hub</p>
    </footer>
    <script>
        // Toggle Light/Dark Mode
        function toggleTheme() {
            document.body.classList.toggle('dark-mode');
        }
        // Navigate to a Section
        function navigateTo(subject) {
            alert(`Navigating to ${subject} resources!`);
        }
        // Chatbot Functionality
        function toggleChatbot() {
            const chatbotPopup = document.getElementById('chatbot-popup');
            chatbotPopup.classList.toggle('active');
        }
        function handleChatInput() {
            const input = document.getElementById('chatbot-input').value;
            const output = document.getElementById('chatbot-output');
            if (input) {
                const response = `You asked: "${input}" (I'm still learning, but I'll help soon!)`;
                output.innerHTML += `<p>${response}</p>`;
                document.getElementById('chatbot-input').value = '';
            }
        }
        // Login Functionality
        function login() {
            const username = prompt("Enter your name:");
            if (username) {
                document.getElementById('username').textContent = username;
            }
        }
    </script>
</body>
</html>

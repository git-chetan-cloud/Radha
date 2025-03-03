// Advanced Conversation Tree for Krishna Darshan Chatbot with Multi-step Exchanges and Home Option
const conversationTree = {
    initial: {
      message: "Jai Shri Krishna!! How can we help you?",
      quickReplies: ["Temples", "Accommodation", "Travel Routes", "Holidays", "Events", "Home"]
    },
    Home: {
      message: "You are at the home menu. What would you like to do next?",
      quickReplies: ["Temples", "Accommodation", "Travel Routes", "Holidays", "Events"]
    },
    // Temples Conversation Flow (5 exchanges)
    Temples: {
        message: "Our top temples include: Shri Krishna Janmasthan, Dwarkadhish Temple, Vrindavan Temple, Banke Bihari Temple, and Radha Rani Temple. Please select one:",
        quickReplies: ["Shri Krishna Janmasthan", "Dwarkadhish Temple", "Vrindavan Temple", "Banke Bihari Temple", "Radha Rani Temple", "Home"]
      },
    "Shri Krishna Janmasthan": {
      message: "Shri Krishna Janmasthan, the sacred birthplace of Lord Krishna, holds deep spiritual significance. Explore its history or check visiting timings here!",
      quickReplies: ["History", "Timings", "Home"]
    },
    History: {
      message: "Shri Krishna Janmasthan carries centuries of rich tradition and spiritual heritage. Discover its history or get directions to visit!",
      quickReplies: ["More Details", "Get Directions", "Home"]
    },
    "More Details": {
      message: "For a detailed overview, please visit our temple details page.",
      quickReplies: ["Visit Details Page", "Home"]
    },
    "Get Directions": {
      message: "Detailed directions are available on our website.",
      quickReplies: ["View Directions", "Home"]
    },
    "Dwarkadhish Temple": {
      message: "Dwarkadhish Temple is one of Mathura's revered sites. Do you want to know more about its rituals or get directions?",
      quickReplies: ["Rituals", "Get Directions", "Home"]
    },
    Rituals: {
      message: "Dwarkadhish Temple is known for its unique aarti and daily puja ceremonies. Would you like more ritual details or directions?",
      quickReplies: ["More Ritual Details", "Get Directions", "Home"]
    },
    "Vrindavan Temple": {
      message: "Vrindavan Temple is celebrated for its serene ambiance and divine architecture. Would you like its history or check the visiting hours?",
      quickReplies: ["History", "Timings", "Home"]
    },
    "Banke Bihari Temple": {
      message: "Banke Bihari Temple is famous for its vibrant devotion and rituals. Would you like to know more about its significance or visiting timings?",
      quickReplies: ["Significance", "Timings", "Home"]
    },
    "Radha Rani Temple": {
      message: "Radha Rani Temple is cherished for its spiritual ambiance. Would you like to learn about its history or see its visiting schedule?",
      quickReplies: ["History", "Timings", "Home"]
    },
    // Accommodation Conversation Flow
    Accommodation: {
      message: "Would you like to explore options for Hotels or Dharamshalas/Ashrams?",
      quickReplies: ["Hotels", "Dharamshalas/Ashrams", "Home"]
    },
    Hotels: {
      message: "We recommend premium hotels like Hotel Radha Residency, Shyam Palace Inn, etc. Would you like to view our hotel recommendations?",
      quickReplies: ["View Hotels", "Home"]
    },
    "Dharamshalas/Ashrams": {
      message: "Our verified options include quality Dharamshalas and Ashrams. Would you like to view details?",
      quickReplies: ["View Dharamshalas/Ashrams", "Home"]
    },
    // Travel Routes Conversation Flow
    "Travel Routes": {
      message: "What mode of travel do you prefer? Please choose from Flight, Train, or Bus.",
      quickReplies: ["Flight", "Train", "Bus", "Home"]
    },
    Flight: {
      message: "For flights, do you want the fastest route or a customized tour package?",
      quickReplies: ["Fastest Route", "Customize Tour", "Home"]
    },
    Train: {
      message: "For trains, would you like the fastest route or a scenic journey?",
      quickReplies: ["Fastest Route", "Scenic Route", "Home"]
    },
    Bus: {
      message: "For buses, would you prefer the fastest or the most scenic route?",
      quickReplies: ["Fastest Route", "Scenic Route", "Home"]
    },
    "Fastest Route": {
      message: "Our system calculates the fastest travel route based on real-time data. Would you like to view detailed directions?",
      quickReplies: ["View Fastest Route", "Home"]
    },
    "Scenic Route": {
      message: "Our scenic route offers a picturesque journey. Would you like to view the scenic route map?",
      quickReplies: ["View Scenic Route", "Home"]
    },
    // Holidays Conversation Flow
    Holidays: {
      message: "Would you like to customize a tour package for your holiday? Please choose one of our packages:",
      quickReplies: ["Barsana Tour", "Vrindavan Tour", "Mathura Tour", "Home"]
    },
    "Barsana Tour": {
      message: "Our Barsana Tour package offers a curated itinerary for exploring Barsana's temples. Would you like to view the package details?",
      quickReplies: ["View Barsana Package", "Home"]
    },
    "Vrindavan Tour": {
      message: "The Vrindavan Tour package includes guided temple visits and cultural experiences. Would you like more information?",
      quickReplies: ["View Vrindavan Package", "Home"]
    },
    "Mathura Tour": {
      message: "Our Mathura Tour package covers major temples and secure accommodations. Would you like to see the package details?",
      quickReplies: ["View Mathura Package", "Home"]
    },
    // Events Conversation Flow
    Events: {
      message: "We have upcoming spiritual events in Mathura and Vrindavan. Would you like to know more about these events?",
      quickReplies: ["View Upcoming Events", "Home"]
    },
    // Final Redirects
    "View Hotels": {
      message: "Please visit our Hotels page for more details: ",
      quickReplies: ["Home"]
    },
    "View Dharamshalas/Ashrams": {
      message: "Please visit our Dharamshalas/Ashrams page for more details: ",
      quickReplies: ["Home"]
    },
    "View Fastest Route": {
      message: "Please visit our Routes page for the fastest route details: ",
      quickReplies: ["Home"]
    },
    "View Scenic Route": {
      message: "Please visit our Routes page for the scenic route map: ",
      quickReplies: ["Home"]
    },
    "View Barsana Package": {
      message: "Please visit our Holidays page for the Barsana Tour package details: ",
      quickReplies: ["Home"]
    },
    "View Vrindavan Package": {
      message: "Please visit our Holidays page for the Vrindavan Tour package details: ",
      quickReplies: ["Home"]
    },
    "View Mathura Package": {
      message: "Please visit our Holidays page for the Mathura Tour package details: ",
      quickReplies: ["Home"]
    },
    "View Upcoming Events": {
      message: "Please visit our Events page for upcoming spiritual events: ",
      quickReplies: ["Home"]
    },
    default: {
      message: "I'm sorry, I can't help you in this. Please choose one of the options or press Home to restart.",
      quickReplies: ["Home"]
    }
  };
  
  let currentState = "initial";
  
  // Append a message to the chat log
  function appendMessage(message, type) {
    const chatLog = document.getElementById('chat-log');
    const msgElem = document.createElement('div');
    msgElem.className = 'chat-message ' + type;
    msgElem.innerText = message;
    chatLog.appendChild(msgElem);
    chatLog.scrollTop = chatLog.scrollHeight;
  }
  
  // Display quick reply buttons
  function displayQuickReplies(options) {
    const quickReplyContainer = document.getElementById('quick-replies');
    quickReplyContainer.innerHTML = "";
    options.forEach(option => {
      const btn = document.createElement('button');
      btn.className = 'quick-reply';
      btn.innerText = option;
      btn.addEventListener('click', () => handleQuickReply(option));
      quickReplyContainer.appendChild(btn);
    });
  }
  
  // Display a conversation state (message + quick replies)
  function displayState(stateKey) {
    const state = conversationTree[stateKey] || conversationTree.default;
    appendMessage(state.message, 'bot-message');
    displayQuickReplies(state.quickReplies);
    currentState = stateKey;
  }
  
  // Display initial state
  displayState("initial");
  
  // Handle quick reply clicks
  function handleQuickReply(reply) {
    appendMessage(reply, 'user-message');
    setTimeout(() => {
      if (reply === "Home") {
        displayState("Home");
      } else {
        displayState(reply);
      }
    }, 600);
  }
  
  // Process free text input (fallback for unrecognized input)
  function processFreeText(input) {
    appendMessage(conversationTree.default.message, 'bot-message');
    displayQuickReplies(["Home"]);
  }
  
  // Event listeners for free text input
  document.getElementById('user-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      sendMessage();
    }
  });
  document.getElementById('send-btn').addEventListener('click', sendMessage);
  
  function sendMessage() {
    const inputField = document.getElementById('user-input');
    const userInput = inputField.value.trim();
    if (!userInput) return;
    appendMessage(userInput, 'user-message');
    inputField.value = "";
    setTimeout(() => {
      processFreeText(userInput);
    }, 1000);
  }
  
  // Toggle Chatbot Visibility
  const openChatBtn = document.getElementById('open-chat');
  const closeChatBtn = document.getElementById('close-chat');
  
  openChatBtn.addEventListener('click', () => {
    document.getElementById('chatbot').style.display = 'flex';
    openChatBtn.style.display = 'none';
  });
  closeChatBtn.addEventListener('click', () => {
    document.getElementById('chatbot').style.display = 'none';
    openChatBtn.style.display = 'flex';
  });
  
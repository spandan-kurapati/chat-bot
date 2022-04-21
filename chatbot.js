let chatbotMsgList = ["Hi", "Hey", "Good Morning", "Good Evening", "How can I help you?", "Thank You"];
let chatContainer = document.getElementById("chatContainer");
let userInput = document.getElementById("userInput");
let index = 0;

function sending() {

    let msgToChatbotContainer = document.createElement("div");
    msgToChatbotContainer.classList.add("msg-to-chatbot-container");

    let msgToChatbot = document.createElement("p");
    msgToChatbot.textContent = userInput.value;
    msgToChatbot.classList.add("msg-to-chatbot");

    msgToChatbotContainer.appendChild(msgToChatbot);
    chatContainer.appendChild(msgToChatbotContainer);
    userInput.value = "";

    let msgFromChatbotContainer = document.createElement("div");
    msgFromChatbotContainer.classList.add("msg-from-chatbot-container");

    let msgFromChatbot = document.createElement("p");
    msgFromChatbot.textContent = chatbotMsgList[index];
    msgFromChatbot.classList.add("msg-from-chatbot");
    index = index + 1;

    msgFromChatbotContainer.appendChild(msgFromChatbot);
    chatContainer.appendChild(msgFromChatbotContainer);
}
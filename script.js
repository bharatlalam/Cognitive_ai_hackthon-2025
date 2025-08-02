const slogans = [
  "Plan Smart. Save Smart.",
  "Track. Analyze. Improve.",
  "Take Charge of Your Finance."
];

const ids = ["line1", "line2", "line3"];

let line = 0;
let char = 0;

function typeLines() {
  if (line < slogans.length) {
    const currentLine = slogans[line];
    const currentElement = document.getElementById(ids[line]);

    currentElement.textContent = currentLine.slice(0, char + 1);
    char++;

    if (char < currentLine.length) {
      setTimeout(typeLines, 100);
    } else {
      char = 0;
      line++;
      setTimeout(typeLines, 1000); // wait before starting next line
    }
  }
}

typeLines();
function toggleChatbot() {
  const box = document.getElementById("chatbotBox");
  box.style.display = box.style.display === "block" ? "none" : "block";
}

function handleChat() {
  const input = document.getElementById("chatbotInput");
  const message = input.value.trim();
  if (message === "") return;

  const chatBox = document.getElementById("chatbotMessages");
  chatBox.innerHTML += `<div><strong>You:</strong> ${message}</div>`;

  let reply = "Sorry, I didn’t get that.";

  // Basic if-else logic
  if (message.toLowerCase().includes("how to save")) {
    reply = "Start by categorizing your expenses and setting a savings goal.";
  } else if (message.toLowerCase().includes("ideal saving")) {
    reply = "Ideally, save at least 20% of your monthly income.";
  } else if (message.toLowerCase().includes("track expenses")) {
    reply = "Use our tool above to log and track your expenses.";
  } else if (message.toLowerCase().includes("hello") || message.toLowerCase().includes("hi")) {
    reply = "Hello! I’m here to assist you with savings. 💰";
  }

  chatBox.innerHTML += `<div><strong>Bot:</strong> ${reply}</div>`;
  chatBox.scrollTop = chatBox.scrollHeight;
  input.value = "";
}


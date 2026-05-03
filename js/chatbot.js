// =========================================
// Chatbot Logic
// =========================================

// Extended Intents Library (Could integrate into APP_DATA for i18n, but hardcoding for simplicity here as per typical keyword bot requirements)
const botResponses = {
    en: {
        intents: [
            {
                keywords: ["register", "registration", "enroll", "form 6", "apply"],
                response: "To register to vote, you need to fill out Form 6. You can do this online through the NVSP (National Voters' Service Portal) website or apply offline via your local Booth Level Officer (BLO)."
            },
            {
                keywords: ["eligible", "eligibility", "age", "who can vote", "18"],
                response: "Every Indian citizen who has attained the age of 18 years on the qualifying date (usually 1st Jan of the year) is eligible to be enrolled as a voter."
            },
            {
                keywords: ["document", "documents", "id", "proof", "aadhaar", "epic"],
                response: "You'll need a recent passport-sized photograph, an age proof (like Birth Certificate, 10th marksheet, or Aadhaar), and an address proof (Aadhaar, Passport, Utility Bill) to register."
            },
            {
                keywords: ["process", "voting process", "how to vote", "polling", "evm"],
                response: "On polling day, visit your designated booth with your Voter ID (EPIC). The polling officer will check your name. Your finger will be inked, and you can proceed to the voting compartment to cast your vote by pressing the button next to your candidate on the EVM."
            },
            {
                keywords: ["hi", "hello", "hey", "start"],
                response: "Hello there! I am the ECI Assistant. Feel free to ask me questions about the voting process, registration, or eligibility."
            }
        ],
        fallback: "I'm not exactly sure about that, but I can help you with registration, eligibility, or required documents. Try asking something like 'How do I register?'"
    },
    te: {
        intents: [
            {
                keywords: ["నమోదు", "register", "form 6", "రిజిస్ట్రేషన్", "ఎలా"],
                response: "ఓటరుగా నమోదు చేసుకోవడానికి, మీరు ఫారమ్ 6 నింపాలి. మీరు దీనిని ఆన్‌లైన్‌లో NVSP పోర్టల్ ద్వారా లేదా మీ స్థానిక BLO ద్వారా ఆఫ్‌లైన్‌లో చేయవచ్చు."
            },
            {
                keywords: ["అర్హత", "వయస్సు", "eligible", "ఎవరు", "18"],
                response: "18 సంవత్సరాలు నిండిన ప్రతి భారతీయ పౌరుడు ఓటరుగా నమోదు చేసుకోవడానికి అర్హుడు."
            },
            {
                keywords: ["పత్రాలు", "ఆధార్", "document", "id", "proof"],
                response: "నమోదు చేసుకోవడానికి మీకు పాస్‌పోర్ట్ సైజు புகைப்படம், వయస్సు రుజువు మరియు చిరునామా రుజువు అవసరం."
            },
            {
                keywords: ["ప్రక్రియ", "ఓటు", "evm", "process"],
                response: "పోలింగ్ రోజున మీ ఓటర్ ID తో మీ బూత్‌ను సందర్శించండి. అధికారి మీ పేరును తనిఖీ చేస్తారు. మీ వేలికి సిరా వేస్తారు, మరియు మీరు EVM ద్వారా ఓటు వేయవచ్చు."
            },
            {
                keywords: ["నమస్కారం", "హలో", "hi", "hello"],
                response: "నమస్కారం! నేను ECI అసిస్టెంట్‌ని. ఓటింగ్ ప్రక్రియ, నమోదు లేదా అర్హత గురించి నన్ను అడగడానికి సంకోచించకండి."
            }
        ],
        fallback: "నాకు దాని గురించి ఖచ్చితంగా తెలియదు, కానీ నేను రిజిస్ట్రేషన్ లేదా అర్హతతో మీకు సహాయం చేయగలను. 'నేను ఎలా నమోదు చేసుకోవాలి?' అని అడగండి."
    }
};

document.addEventListener('DOMContentLoaded', () => {
    initChatbotUI();
});

function initChatbotUI() {
    const fab = document.getElementById('chatbot-fab');
    const widget = document.getElementById('chatbot-widget');
    const closeBtn = document.querySelector('.btn-close-chat');
    const sendBtn = document.getElementById('send-chat-btn');
    const inputField = document.getElementById('chat-input');

    // Toggle Chatbot
    fab.addEventListener('click', () => {
        widget.classList.add('open');
        fab.classList.remove('bounce');
    });

    closeBtn.addEventListener('click', () => {
        widget.classList.remove('open');
    });

    // Send Message Handlers
    sendBtn.addEventListener('click', handleUserMessage);
    inputField.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleUserMessage();
        }
    });
}

function handleUserMessage() {
    const inputField = document.getElementById('chat-input');
    const messageText = inputField.value.trim();
    
    if (messageText === "") return;

    // 1. Add User Message to UI
    appendMessage('user', messageText);
    inputField.value = '';

    // 2. Determine Bot Response with slight delay for realism
    setTimeout(() => {
        const response = generateBotResponse(messageText);
        appendMessage('bot', response);
    }, 500);
}

function generateBotResponse(userInput) {
    const text = userInput.toLowerCase();
    const currentLexicon = botResponses[currentLang] || botResponses['en'];
    
    // Keyword Matching Logic
    for (const intent of currentLexicon.intents) {
        // If any keyword is found within the user input
        if (intent.keywords.some(keyword => text.includes(keyword.toLowerCase()))) {
            return intent.response;
        }
    }
    
    // Fallback if no match
    return currentLexicon.fallback;
}

function appendMessage(sender, text) {
    const chatMessages = document.getElementById('chat-messages');
    
    const msgDiv = document.createElement('div');
    msgDiv.className = `message ${sender}-message`;
    
    const contentDiv = document.createElement('div');
    contentDiv.className = 'msg-content';
    contentDiv.textContent = text;
    
    msgDiv.appendChild(contentDiv);
    chatMessages.appendChild(msgDiv);
    
    // Scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

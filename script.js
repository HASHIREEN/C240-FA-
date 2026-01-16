// Generate a unique ID for this session
const sessionId = 'session-' + Math.random().toString(36).substr(2, 9);

// Initialize Botpress Webchat
window.botpress.init({
    "botId": "ec45131a-f5a7-4051-a15e-d2b05da579fb",
    "clientId": "f14e1bf1-e0c4-4f8d-9ef3-8ee2efeadd0b",
    "userId": sessionId, // Force a reset on refresh
    "selector": "#webchat",
    "configuration": {
        "version": "v2",
        "composerPlaceholder": "type your message here..",
        "botName": "SpeakEasy Korean Assistant",
        "botDescription": "SpeakEasy Korean is an interactive AI tutor that helps learners practise Korean through quick drills, roleplay scenarios, and focused lessons.\nThe chatbot adapts its teaching style and content based on the learner's level, goals, and interests, making Korean learning simple, engaging, and practical.",
        "botAvatar": "https://files.bpcontent.cloud/2026/01/16/04/20260116045502-PNL50NEI.png",
        "color": "#90d6e3",
        "variant": "solid",
        "headerVariant": "solid",
        "themeMode": "light",
        "fontFamily": "ADLaM Display",
        "radius": 3,
        "feedbackEnabled": false,
        "soundEnabled": false
    }
});

// Function to toggle chat
function openChat() {
    if (window.botpress) {
        window.botpress.toggle();
    }
}

// Initialize Botpress Webchat
window.botpress.init({
    //"botId": "7a95fc67-b765-4583-8794-2d85c6dfffa1", //
    "clientId": "a6f2c39d-2221-4d0a-92a3-48cfb93078c0", //
    "selector": "#webchat", //
    "configuration": {
        "botName": "SpeakEasy Korean", //
        "botDescription": "Your AI Korean Language Tutor", //
        
        /* PASTE YOUR AVATAR IMAGE URL BELOW */
        "botAvatar": "https://img.freepik.com/premium-vector/south-korea-flag-heart-shape_493206-528.jpg", 
        
        "color": "#f97316", // SpeakEasy Orange
        "variant": "solid",
        "themeMode": "light",
        "fontFamily": "inter",
        "radius": 1.5
    }
});

// Function to toggle chat
function openChat() {
    if (window.botpress) {
        window.botpress.toggle();
    }
}

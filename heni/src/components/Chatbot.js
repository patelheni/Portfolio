import React, { useEffect } from 'react';
import './Chatbot.css';

function Chatbot() {
  useEffect(() => {
    // Adding the chatbot configuration script
    const scriptConfig = document.createElement('script');
    scriptConfig.innerHTML = `
      window.embeddedChatbotConfig = {
        chatbotId: "IO5Vwak5x_Y6rk7H22EnH",
        domain: "www.chatbase.co"
      };
    `;
    document.body.appendChild(scriptConfig);

    // Adding the actual chatbot script
    const script = document.createElement('script');
    script.src = "https://www.chatbase.co/embed.min.js";
    script.async = true;
    script.defer = true;
    script.setAttribute('chatbotId', 'IO5Vwak5x_Y6rk7H22EnH');
    script.setAttribute('domain', 'www.chatbase.co');
    document.body.appendChild(script);

    // Clean up the scripts when the component unmounts
    return () => {
      document.body.removeChild(scriptConfig);
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="chatbot-container">
      <h3>Chat with our AI Assistant!</h3>
      {/* The embedded chatbot will automatically add itself to the page */}
    </div>
  );
}

export default Chatbot;

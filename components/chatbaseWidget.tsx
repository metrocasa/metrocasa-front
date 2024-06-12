'use client';

import { useEffect } from 'react';

function ChatbaseWidget() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.chatbase.co/embed.min.js';
    script.setAttribute('chatbotId', 'kZpPSiYj08GUlp_bZyPw3');
    script.setAttribute('domain', 'www.chatbase.co');
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Clean up on component unmount
    };
  }, []);

  return (
    <iframe
      src="https://www.chatbase.co/chatbot-iframe/kZpPSiYj08GUlp_bZyPw3"
      width="100%"
      style={{ height: '100%', minHeight: '700px' }}
      frameBorder="0"
    />
  );
}

export default ChatbaseWidget;

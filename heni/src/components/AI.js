import React, { useState } from 'react';

function AI() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple static response
    setResponse("Hello! I am your personal assistant. How can I help?");
  };

  return (
    <section id="ai" className="ai-section">
      <h1>Ask Me Anything</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your question here..."
        />
        <button type="submit">Ask</button>
      </form>
      <p>{response}</p>
    </section>
  );
}

export default AI;

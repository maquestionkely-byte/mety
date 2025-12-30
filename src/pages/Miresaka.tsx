import { useState, useRef } from 'react';

type Message = {
  from: 'user' | 'worker';
  text: string;
};

export default function Miresaka() {
  const [name, setName] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [started, setStarted] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  async function startChat() {
    if (!name) return;

    setStarted(true);

    // message automatique du worker
    setMessages([
      {
        from: 'worker',
        text: "Félicitations d'avoir écrit avec nous, débutons la discussion.",
      },
    ]);
  }

  async function sendMessage() {
    if (!input) return;

    const userMessage = { from: 'user' as const, text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');

    // ENVOI AU WORKER (on fera le vrai worker après)
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, message: input }),
    });

    const data = await res.json();

    setMessages((prev) => [...prev, { from: 'worker', text: data.reply }]);
  }

  if (!started) {
    return (
      <div style={{ padding: 20, textAlign: 'center' }}>
        <h2>Ajoutez votre nom</h2>
        <p>Ampidiro ny anaranao</p>

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ padding: 10, width: '80%' }}
        />
        <br />
        <br />
        <button onClick={startChat}>Commencer</button>
      </div>
    );
  }

  return (
    <div style={{ paddingBottom: 70 }}>
      {/* Messages */}
      {messages.map((m, i) => (
        <div
          key={i}
          style={{
            textAlign: m.from === 'user' ? 'right' : 'left',
            padding: '8px 16px',
          }}
        >
          <span
            style={{
              display: 'inline-block',
              background: m.from === 'user' ? '#4f8cff' : '#eee',
              color: m.from === 'user' ? 'white' : 'black',
              padding: '10px',
              borderRadius: '12px',
              maxWidth: '80%',
            }}
          >
            {m.text}
          </span>
        </div>
      ))}

      {/* Barre écriture FIXE */}
      <div
        style={{
          position: 'fixed',
          bottom: 'env(safe-area-inset-bottom)',
          left: 0,
          right: 0,
          display: 'flex',
          padding: 10,
          background: '#fff',
          borderTop: '1px solid #ccc',
        }}
      >
        <input
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{ flex: 1, padding: 10 }}
          placeholder="Écrire un message..."
        />
        <button onClick={sendMessage}>Envoyer</button>
      </div>
    </div>
  );
}

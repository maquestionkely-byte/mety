import { useState, useRef, useEffect } from 'react';

type Message = {
  from: 'user' | 'worker';
  text: string;
};

export default function Miresaka() {
  const [name, setName] = useState('');
  const [started, setStarted] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Démarrer le chat
  const startChat = () => {
    if (!name.trim()) return;
    setStarted(true);
    setMessages([
      {
        from: 'worker',
        text: "Bienvenue ! Débutons la discussion.",
      },
    ]);
  };

  // Envoyer un message
  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { from: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');

    try {
      const res = await fetch('https://app.tsaraasa51.workers.dev/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userName: name, message: input }),
      });
      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { from: 'worker', text: data.reply || 'Pas de réponse du Worker.' },
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { from: 'worker', text: 'Erreur de communication avec le Worker.' },
      ]);
    }
  };

  if (!started) {
    return (
      <div
        style={{
          minHeight: '100vh',
          background: '#e5ddd5',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 20,
          textAlign: 'center',
        }}
      >
        <h2>Miresaka</h2>
        <p>Entrez votre nom :</p>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Votre nom..."
          style={{ padding: 10, width: '80%', marginBottom: 10 }}
        />
        <br />
        <button
          onClick={startChat}
          style={{
            padding: '10px 20px',
            background: '#0b3d2e',
            color: 'white',
            border: 'none',
            borderRadius: 8,
            cursor: 'pointer',
          }}
        >
          Commencer
        </button>
      </div>
    );
  }

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        background: '#e5ddd5',
      }}
    >
      {/* Header type WhatsApp */}
      <div
        style={{
          padding: 15,
          background: '#0b3d2e',
          color: 'white',
          fontWeight: 'bold',
          textAlign: 'center',
        }}
      >
        Miresaka - {name}
      </div>

      {/* Messages */}
      <div
        style={{
          flex: 1,
          padding: 10,
          overflowY: 'auto',
        }}
      >
        {messages.map((msg, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              justifyContent: msg.from === 'user' ? 'flex-end' : 'flex-start',
              marginBottom: 8,
            }}
          >
            <div
              style={{
                background: msg.from === 'user' ? '#0b3d2e' : '#ffffff',
                color: msg.from === 'user' ? '#ffffff' : '#000000',
                fontWeight: msg.from === 'user' ? 'bold' : 'normal',
                padding: 10,
                borderRadius: 12,
                maxWidth: '70%',
                boxShadow: '0 1px 2px rgba(0,0,0,0.2)',
                whiteSpace: 'pre-line',
              }}
            >
              {msg.text}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Barre d’écriture type WhatsApp */}
      <div
        style={{
          display: 'flex',
          padding: 10,
          background: '#f0f0f0',
          borderTop: '1px solid #ccc',
        }}
      >
        <input
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Écrire un message..."
          style={{
            flex: 1,
            padding: 10,
            borderRadius: 20,
            border: '1px solid #ccc',
            outline: 'none',
          }}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
        />
        <button
          onClick={sendMessage}
          style={{
            marginLeft: 10,
            padding: '10px 15px',
            borderRadius: '50%',
            border: 'none',
            background: '#0b3d2e',
            color: 'white',
            cursor: 'pointer',
            fontWeight: 'bold',
          }}
        >
          ➤
        </button>
      </div>
    </div>
  );
}

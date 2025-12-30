import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'rgba(0,0,255,0.3)',
        backdropFilter: 'blur(8px)',
        paddingTop: '40px',
        textAlign: 'center',
      }}
    >
      <h1>Mazoto Mianatra</h1>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          marginTop: '30px',
          fontWeight: 'bold',
          cursor: 'pointer',
        }}
      >
        <div onClick={() => navigate('/dictionnaire')}>Dictionnaire</div>
        <div onClick={() => navigate('/miresaka')}>Miresaka</div>
        <div onClick={() => navigate('/lecons')}>Leçon</div>
      </div>

      <p style={{ marginTop: '50px', fontSize: '18px' }}>
        Tsara ny mahay ny fiteny français, indrindra amin'izao fotoana izao.
      </p>
    </div>
  );
}

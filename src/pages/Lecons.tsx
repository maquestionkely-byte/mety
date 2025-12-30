export default function Lecons() {
  return (
    <div style={{ textAlign: 'center', padding: 20 }}>
      <button onClick={() => alert('Mbola tsy vita ny lesona')}>
        Niveau débutant
      </button>

      <br />
      <br />

      <button onClick={() => alert('Attendez un peu')}>
        Niveau intermédiaire
      </button>
    </div>
  );
}

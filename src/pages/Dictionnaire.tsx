import { useState } from 'react';

type Mot = { fr: string; mg: string };

const mots: Mot[] = [
  { fr: 'Bonjour', mg: 'Salama' },
  { fr: 'Merci', mg: 'Misaotra' },
  { fr: 'Au revoir', mg: 'Veloma' },
  { fr: 'Oui', mg: 'Eny' },
  { fr: 'Non', mg: 'Tsia' },
];

export default function Dictionnaire() {
  const [search, setSearch] = useState('');
  const [lang, setLang] = useState<'fr' | 'mg'>('fr');

  const result = mots.filter((m) =>
    (lang === 'fr' ? m.fr : m.mg).toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: 20 }}>
      <input
        placeholder="Écrire ici..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ width: '100%', padding: 10 }}
      />

      <div style={{ marginTop: 10 }}>
        <button onClick={() => setLang('fr')}>Français</button>
        <button onClick={() => setLang('mg')}>Malagasy</button>
      </div>

      <ul>
        {result.map((m, i) => (
          <li key={i}>
            {lang === 'fr' ? `${m.fr} → ${m.mg}` : `${m.mg} → ${m.fr}`}
          </li>
        ))}
      </ul>
    </div>
  );
}

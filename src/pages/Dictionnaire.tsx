import { useState } from 'react';

type Mot = { fr: string; mg: string };

const mots: Mot[] = [
  { fr: 'Bonjour', mg: 'Salama' },
  { fr: 'Merci', mg: 'Misaotra' },
  { fr: 'Au revoir', mg: 'Veloma' },
  { fr: 'Oui', mg: 'Eny' },
  { fr: 'Non', mg: 'Tsia' },
  { "fr": "Être", "mg": "dia" },
  { "fr": "Avoir", "mg": "Manana" },
  { "fr": "Aller", "mg": "Mandeha" },
  { "fr": "Faire", "mg": "Manao" },
  { "fr": "Dire", "mg": "Milaza" },
  { "fr": "Pouvoir", "mg": "Mahavita" },
  { "fr": "Vouloir", "mg": "Te-hanao" },
  { "fr": "Savoir", "mg": "Mahafantatra" },
  { "fr": "Voir", "mg": "Mahita" },
  { "fr": "Venir", "mg": "Avy" },
  { "fr": "Donner", "mg": "manome" },
   { fr: 'Avoir', mg: 'Manana' },
  { fr: 'Aller', mg: 'Mandeha' },
  { fr: 'Faire', mg: 'Manao' },
  { fr: 'Dire', mg: 'Milaza' },
  { fr: 'Pouvoir', mg: 'Mahavita' },
  { fr: 'Vouloir', mg: 'Te-hanao' },
  { fr: 'Savoir', mg: 'Mahafantatra' },
  { fr: 'Voir', mg: 'Mahita' },
  { fr: 'Venir', mg: 'Avy' },
  { fr: 'Donner', mg: 'Manao' },
  { fr: 'Prendre', mg: 'Maka' },
  { fr: 'Parler', mg: 'Miteny' },
  { fr: 'Manger', mg: 'Mihinana' },
  { fr: 'Boire', mg: 'Misotro' },
  { fr: 'Aimer', mg: 'Mankasitraka' },
  { fr: 'Dormir', mg: 'Matory' },
  { fr: 'Travailler', mg: 'Miasa' },
  { fr: 'Étudier', mg: 'Mianatra' },
  { fr: 'Lire', mg: 'Mamaky' },
  { fr: 'Écrire', mg: 'Manao soratra' },
  { fr: 'Marcher', mg: 'Mandeha an-tongotra' },
  { fr: 'Courir', mg: 'Mihazakazaka' },
  { fr: 'Nager', mg: 'Milomano' },
  { fr: 'Jouer', mg: 'Milalao' },
  { fr: 'Acheter', mg: 'Mividy' },
  { fr: 'Vendre', mg: 'Mivarotra' },
  { fr: 'Attendre', mg: 'Miandry' },
  { fr: 'Entrer', mg: 'Miditra' },
  { fr: 'Sortir', mg: 'Mivoaka' },
  { fr: 'Monter', mg: 'Miakatra' },
  { fr: 'Descendre', mg: 'Midina' },
  { fr: 'Tomber', mg: 'Lavo' },
  { fr: 'Ouvrir', mg: 'Manokatra' },
  { fr: 'Fermer', mg: 'Mikatona' },
  { fr: 'Chercher', mg: 'Mitady' },
  { fr: 'Trouver', mg: 'Mahita' },
  { fr: 'Commencer', mg: 'Manomboka' },
  { fr: 'Finir', mg: 'Mamarana' },
  { fr: 'Appeler', mg: 'Miantso' },
  { fr: 'Répondre', mg: 'Mamaly' },
  { fr: 'Entendre', mg: 'Mahare' },
  { fr: 'Écouter', mg: 'Mihaino' },
  { fr: 'Regarder', mg: 'Mijery' },
  { fr: 'Sentir', mg: 'Mahatsapa' },
  { fr: 'Toucher', mg: 'Mikasika' },
  { fr: 'Rester', mg: 'Mijanona' },
  { fr: 'Partir', mg: 'Miala' },
  { fr: 'Tomber', mg: 'Lavo' },
  { fr: 'Changer', mg: 'Manao fiovana' },
  { fr: 'Essayer', mg: 'Miezaka' },
  { fr: 'Aider', mg: 'Manampy' },
  { fr: 'Protéger', mg: 'Miaro' },
  { fr: 'Oublier', mg: 'Manao hadino' },
  { fr: 'Se souvenir', mg: 'Mahatsiaro' },
  { fr: 'Courir', mg: 'Mihazakazaka' },
  { fr: 'Sauter', mg: 'Mitsambikina' },
  { fr: 'Rire', mg: 'Mihomehy' },
  { fr: 'Pleurer', mg: 'Mitaraina' },
  { fr: 'Parler', mg: 'Miteny' },
  { fr: 'Écrire', mg: 'Manao soratra' }
  { "fr": "Prendre", "mg": "Maka" },
  { "fr": "Parler", "mg": "Miteny" },
  { "fr": "Manger", "mg": "Mihinana" },
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


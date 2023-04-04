const utenti = [
  {
    nome: 'Filippo',
    cognome: 'Mangialupi',
    eta: 18
  },
  {
    nome: 'Giovanni',
    cognome: 'Barbaro',
    eta: 21
  },
  {
    nome: 'Dario',
    cognome: 'La Spina',
    eta: 14
  },
  {
    nome: 'Angela',
    cognome: 'Civiletti',
    eta: 70
  },
  {
    nome: 'Giuseppe',
    cognome: 'Ortiga',
    eta: 66
  },
  {
    nome: 'Gertrude',
    cognome: 'Raballo',
    eta: 50
  },
  {
    nome: 'Anna',
    cognome: 'Manna',
    eta: 80
  },
  {
    nome: 'Romualda',
    cognome: 'Ortense',
    eta: 10
  }
]

const under18 = utenti.filter(utente => (utente.eta < 18));
const over65 = utenti.filter(utente => (utente.eta > 65));

console.log('utenti', utenti);
console.log('under18', under18);
console.log('over65', over65);


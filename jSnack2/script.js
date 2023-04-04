const studenti = [
  {
    nome: 'Giancarlo',
    cognome: 'Alessi',
    matricola: '521469',
    voti: {
      matematica: 7,
      informatica: 6,
      fisica: 8,
      chimica: 5,
    }
  },
  {
    nome: 'Alessia',
    cognome: 'Giancarli',
    matricola: '154896',
    voti: {
      matematica: 8,
      informatica: 8,
      fisica: 8,
      chimica: 8,
    }
  },
  {
    nome: 'Onesta',
    cognome: 'Fasulli',
    matricola: '219845',
    voti: {
      matematica: 6,
      informatica: 3,
      fisica: 10,
      chimica: 5,
    }
  },
  {
    nome: 'Filippo',
    cognome: 'Privitera',
    matricola: '486159',
    voti: {
      matematica: 9,
      informatica: 5,
      fisica: 3,
      chimica: 1,
    }
  },
]

const container = document.querySelector('.container');

const neoStudenti = studenti.map(object => {
  const studente = {
    nomeCognome: `${object.nome} ${object.cognome}`,
    matricola: object.matricola,
    mediaVoti: calcoloMediaVoti(object.voti),
  }
  return studente;
})

neoStudenti.forEach((studente) => {
  container.innerHTML += `
  <div class="col">
    <div class="card">
      <img src="img/5005529.webp" alt="${studente.nomeCognome}">
      <h3>${studente.nomeCognome}</h3>
      <p>Matricola: ${studente.matricola}</p>
      <p>Media: ${studente.mediaVoti}</p>
    </div>
  </div>
`
})

function calcoloMediaVoti(voti) {
  const length = Object.keys(voti).length;
  let somma = 0;
  let media = 0;
  for (let key in voti) {
    somma += voti[key];
  }
  media = somma / length;
  return media;
}



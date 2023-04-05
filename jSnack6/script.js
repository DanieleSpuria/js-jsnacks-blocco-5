const teams = [
  {
    nome: 'Inter',
    puntiFatti: 0,
    falliSubiti: 0
  },
  {
    nome: 'Roma',
    puntiFatti: 0,
    falliSubiti: 0
  },
  {
    nome: 'Juventus',
    puntiFatti: 0,
    falliSubiti: 0
  },
  {
    nome: 'Messina',
    puntiFatti: 0,
    falliSubiti: 0
  },
  {
    nome: 'Napoli',
    puntiFatti: 0,
    falliSubiti: 0
  },
  {
    nome: 'Palermo',
    puntiFatti: 0,
    falliSubiti: 0
  },
  {
    nome: 'Camaro',
    puntiFatti: 0,
    falliSubiti: 0
  }
]

const container = document.querySelector('.container');
let getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

teams.forEach((team) => {
  team.puntiFatti = getRandomNumber(1,100);
  team.falliSubiti = getRandomNumber(1,100);
});

const newArray = teams.map(team => {
  const {nome, falliSubiti} = team;
  team = {
    nome,
    falliSubiti
  }
  return team;
});

newArray.forEach(team => {
  const {nome, falliSubiti} = team;
  container.innerHTML += `
    <div class="team">
      <h2>${nome}</h2>
      <p>Falli subiti: ${falliSubiti}</p>
    </div>
  `

});

console.log(newArray);
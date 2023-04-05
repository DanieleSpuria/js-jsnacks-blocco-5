const bikes = [
  {
    name: 'gianni',
    weigth: 10
  },
  {
    name: 'filippo',
    weigth: 15
  },
  {
    name: 'carmela',
    weigth: 18
  },
  {
    name: 'anselmo',
    weigth: 16
  },
  {
    name: 'gianfilippo',
    weigth: 13
  },
  {
    name: 'amalda',
    weigth: 9
  },
  {
    name: 'montagna',
    weigth: 18
  }
]

const min = bikes.find(bike => {
  const {name, weigth} = bike;
  if (weigth === Math.min(weigth))
    console.log(
      `La bici ${name} è la più leggera e pesa solo ${weigth}`
      );
  return weigth;
});
console.log(min);

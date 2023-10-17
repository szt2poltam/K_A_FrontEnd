const heroes = [ 
  {firstName: "Ahsoka", lastName: "Tano", job: "padawan"},
  {firstName: "Boba", lastName: "Fett", job: "fejvadász"},
  {firstName: "Han", lastName: "Solo", job: "csempész"},
  {firstName: "Leia", lastName: "Organa", job: "szenátor"}
];

function renderHeroes() {
  const heroesContainer = document.getElementById('heroes-container');

  heroesContainer.innerHTML = '';

  heroes.forEach(hero => {
    const heroCard = document.createElement('div');
    heroCard.classList.add('hero-card');

    const heroInfo = `
      <h2>${hero.firstName} ${hero.lastName}</h2>
      <p>Állás: ${hero.job}</p>`;

    heroCard.innerHTML = heroInfo;
    heroesContainer.appendChild(heroCard);
  });
}
renderHeroes();
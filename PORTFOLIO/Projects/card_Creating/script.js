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

document.getElementById('add-hero-button').addEventListener('click', function() {
  const firstName = document.getElementById('hero-firstname').value;
  const lastName = document.getElementById('hero-lastname').value;
  const job = document.getElementById('hero-job').value;

  if (firstName && lastName && job) {
    heroes.push({ firstName, lastName, job });
    renderHeroes();

    // Töröljük az űrlap mezők tartalmát
    document.getElementById('hero-firstname').value = '';
    document.getElementById('hero-lastname').value = '';
    document.getElementById('hero-job').value = '';
  }
});

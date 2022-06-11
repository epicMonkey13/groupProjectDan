// G's form in case R will have a different approach :)
let search = (e) => {
  const keyAPI = `7494051743a90f30bbb0d95ae29d2a21`;
  const loc = document.getElementById('locInput').value;
  const endpoint = `http://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${keyAPI}`;

  fetch(endpoint)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const temperature = Math.trunc(data.main.temp) - 273;
      const description = data.weather[0].description;
      const main = data.weather[0].main;
      const wind = data.wind.speed;
      document.querySelector('#wind').innerHTML = `<p> The wind speed is <b>${wind} meter/sec</p>`;

      document.getElementById(
        'results'
      ).innerHTML = `<p> The temperature is <b>${temperature} °C</b><br> Mainly ${main} there, <br>${description} to be specific :)  </p>`;
    })
    .catch((err) => console.log(err));

  e.preventDefault();
};

document.getElementById('myBTN').addEventListener('click', search);

// end of G's form in case R will have a different approach :)

//hamburger
const hamburgerIcon = document.querySelector('#nav-toggle-button');
const navItems = document.querySelector('#nav-items');
hamburgerIcon.addEventListener('click', () => {
  navItems.classList.toggle('active');
});
//end of hamburger

// card
const card = document.querySelector('#card');
window.addEventListener('mousemove', ({ clientX, clientY }) => {
  const { x, y, width, height } = card.getBoundingClientRect();
  const dx = clientX - (x + 0.5 * width);
  const dy = clientY - (y + 0.5 * height);
  const angle = Math.atan2(dy, dx) * 180 / Math.PI;
  
  card.style.setProperty('--startDeg', `${angle + 90}deg`);
  
}, false)
//end of card

// destinations list 
const list = document.querySelector('#destinations-list');
const input = document.querySelector('#item');
const button = document.querySelector('#adding-button');

button.addEventListener('click', () => {
  const myItem = input.value;
  input.value = '';

  const listItem = document.createElement('li');
  const listText = document.createElement('span');
  const listBtn = document.createElement('button');
  listBtn.style.backgroundColor = 'gray';
  listBtn.style.margin = '1rem';
  listBtn.style.padding = '0.5rem';
  listBtn.style.borderRadius = '0.5rem';
  listItem.style.margin = '0.5rem'

  listItem.appendChild(listText);
  listText.textContent = myItem;
  listItem.appendChild(listBtn);
  listBtn.textContent = 'Delete';
  list.appendChild(listItem);

  listBtn.addEventListener('click', () => {
    list.removeChild(listItem);
  });

  input.focus();
});
// end of destinations list
// polaroid pic
const PARTICLE_COUNT = 5;

const POLAROID = document.querySelector('.polaroid__wrapper')
const PARTICLE_PEN = document.querySelector(".polaroid__particles");

const SHAPES = [
  `<svg viewBox="0 0 448 512" title="square">
  <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z" />
</svg>`,
  `<svg viewBox="0 0 512 512" title="circle">
  <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
</svg>`,
  `<svg viewBox="0 0 576 512" title="star">
  <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
</svg>`,
  `<svg viewBox="0 0 384 512" title="map-marker-alt">
  <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" />
</svg>`
];

const createParticle = () => {
  const NEW_PARTICLE = document.createElement('div')
  const ROTATION = Math.random() * 360;
  const SPIN = Math.random() * 360 - 180;
  const DISTANCE = Math.random();
  const SCALE = Math.random() * 2 + 1;
  const HUE = Math.random() * 360;
  NEW_PARTICLE.className = 'polaroid__particle'
  NEW_PARTICLE.innerHTML = SHAPES[Math.floor(Math.random() * SHAPES.length)]
  NEW_PARTICLE.style.setProperty('--rotation', ROTATION)
  NEW_PARTICLE.style.setProperty('--distance', DISTANCE)
  NEW_PARTICLE.style.setProperty('--scale', SCALE)
  NEW_PARTICLE.style.setProperty('--hue', HUE)
  NEW_PARTICLE.style.setProperty('--spin', SPIN)
  PARTICLE_PEN.appendChild(NEW_PARTICLE)
};

const genParticles = () => {
  PARTICLE_PEN.innerHTML = ''
  let p = 0;
  while (p < PARTICLE_COUNT) {
    createParticle();
    p++;
  }
}

genParticles()

POLAROID.addEventListener('pointerup', () => genParticles());
// end of polaroid pic

//accordion
const accordianHeaders = document.querySelectorAll('.accordion-item-header');
console.log(accordianHeaders);
accordianHeaders.forEach((header) => {
  header.addEventListener('click', () => {
    header.nextElementSibling.classList.toggle('hide-accordion');
  });
});
//end of accordion
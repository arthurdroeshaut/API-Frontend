// Sets the number of stars we wish to display
const numStars = 500;

// For every star we want to display
for (let i = 0; i < numStars; i++) {
const stars = 400

for (let i =0; i < stars; i++) {
    let star = document.createElement("div")
    star.className = 'stars'
  const xy = randomPosition();
  star.style.top = xy[0] + 'px'
    star.style.left = xy[1] + 'px'
    document.body.append(star)
}

function randomPosition() {
  const x = window.innerWidth;
  const y = window.innerHeight;
  const randomX = Math.floor(Math.random() * x);
  const randomY = Math.floor(Math.random() * y);
  return [randomX, randomY]
}}
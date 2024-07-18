console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', () => {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  const breedUrl = "https://dog.ceo/api/breeds/list/all";
  const imageContainer = document.getElementById('dog-image-container');
  const breedsList = document.getElementById('dog-breeds');
  const breedDropdown = document.getElementById('breed-dropdown');
  let allBreeds = [];

  // Challenge 1
  fetch(imgUrl)
    .then(response => response.json())
    .then(data => {
      data.message.forEach(imageUrl => {
        const img = document.createElement('img');
        img.src = imageUrl;
        imageContainer.appendChild(img);
      });
    });

  // Challenge 2
  fetch(breedUrl)
    .then(response => response.json())
    .then(data => {
      allBreeds = Object.keys(data.message);
      renderBreeds(allBreeds);
    });

  function renderBreeds(breeds) {
    breedsList.innerHTML = '';
    breeds.forEach(breed => {
      const li = document.createElement('li');
      li.innerText = breed;
      li.addEventListener('click', () => {
        li.style.color = 'firebrick'; // Change this color to whatever you prefer
      });
      breedsList.appendChild(li);
    });
  }

  // Challenge 3
  // Included in the renderBreeds function above

  // Challenge 4
  breedDropdown.addEventListener('change', (event) => {
    const selectedLetter = event.target.value;
    const filteredBreeds = allBreeds.filter(breed => breed.startsWith(selectedLetter));
    renderBreeds(filteredBreeds);
  });
});
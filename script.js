let image = document.querySelector('img')

image.addEventListener('error', () => {
  console.info("Error loading the passed image, dynamically loading a new image...");
  image.src = 'https://api.lorem.space/image/pizza?w=300&h=300'
})
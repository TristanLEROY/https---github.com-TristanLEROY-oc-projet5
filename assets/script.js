const slides = [
  {
    image: 'slide1.jpg',
    tagLine: 'Impressions tous formats <span>en boutique et en ligne</span>',
  },
  {
    image: 'slide2.jpg',
    tagLine:
      'Tirages haute définition grand format <span>pour vos bureaux et events</span>',
  },
  {
    image: 'slide3.jpg',
    tagLine: 'Grand choix de couleurs <span>de CMJN aux pantones</span>',
  },
  {
    image: 'slide4.png',
    tagLine: 'Autocollants <span>avec découpe laser sur mesure</span>',
  },
]
// function that load the carrousel
document.body.onload = function () {
  //variable that pass to the previous image and call function
  document
    .querySelector('.arrow_left')
    .addEventListener('click', leftArrowClick)
  //variable that pass to the next image and call function
  document
    .querySelector('.arrow_right')
    .addEventListener('click', rightArrowClick)
  let current = 0
  let totalSlides = slides.length
  let dotDiv = document.querySelector('.dots')

  //loop that creat the point in function of the number of image
  for (let i = 0; i < totalSlides; i++) {
    let newDot = document.createElement('div')
    dotDiv.appendChild(newDot)
    newDot.classList.add('dot')
    if (current === i) {
      newDot.classList.add('dot_selected')
    }
  }

  // function that change image, text and current dot
  function changeImage() {
    let image = document.querySelector('.banner-img')
    let text = document.querySelector('#banner p')
    image.setAttribute(
      'src',
      './assets/images/slideshow/' + slides[current].image
    )
    text.innerHTML = slides[current].tagLine

    let dotSelected = document.querySelector('.dot_selected')
    dotSelected.classList.remove('dot_selected')

    let onDotChange = document.querySelector(
      '.dots :nth-child(' + (current + 1) + ')'
    )
    onDotChange.classList.add('dot_selected')
  }

  //function that change current image to the left when she's call
  function leftArrowClick() {
    current -= 1
    if (current < 0) {
      current = totalSlides - 1
    }
    changeImage()
  }

  //function that change current image to the right  when she's call
  function rightArrowClick() {
    current += 1
    if (current >= totalSlides) {
      current = 0
    }
    changeImage()
  }
}

function init(){
  const btnSubmit = document.getElementById('btn-submit')

  btnSubmit.addEventListener('click', () => {
    showModal(getRating())
  })
}

function getRating(){
  const ratingButtons = document.querySelectorAll('[name="rating"]')
  const arrayRatingButtons = Array.from(ratingButtons)
  const rating = arrayRatingButtons.filter(rBtn => rBtn.checked)[0]

  return rating? rating.value : 0
}

function showModal(rating){
  const modal = document.getElementById('box-thank-you')
  const resultRating = document.getElementById('result__rating')
  resultRating.innerText = rating
  modal.classList.add('show')

  setTimeout(() => {
    modal.classList.remove('show')
  }, 5000)
}

init()
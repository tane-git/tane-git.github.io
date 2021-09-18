document.addEventListener('DOMContentLoaded', start)

function start () {
    // document.addEventListener("click", hide)

  bindEventListeners(document.getElementsByClassName('trick')[0].children)
  console.log(document.getElementsByClassName('trick')[0].children)
  console.log("Test")
}

function bindEventListeners (dots) {
  for (var i = 0; i < dots.length; i++) {
//     // BIND YOUR EVENT LISTENERS HERE
    // The first one is provided for you
    dots[i].addEventListener('click', hide)
  }
}


function hide (evt) {
    document.getElementsByClassName("invisible")[0].classList.toggle("invisible")

  evt.target.classList.toggle('invisible')

  console.log("Toggled")
}





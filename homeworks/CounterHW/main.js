let zero = false

function increment() {
  zero++
  let incNumber = document.getElementById('number').innerHTML = zero
}

function decrement() {
  zero--
  let decNumber = document.getElementById('number').innerHTML = zero
}
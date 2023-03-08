// clock
let play = document.getElementById('play') 
let stop = document.getElementById('stop') 
let plus = document.getElementById('plus') 
let minus = document.getElementById('minus')
let hours = document.getElementById('hours')
let minutes = document.getElementById('minutes')
let stopTimer = false
// sounds
let tree = document.getElementById('tree')
let cardTree = document.getElementById('cardTree')
let cloud = document.getElementById('cloud')
let cardCloud = document.getElementById('cardCloud')
let store = document.getElementById('store')
let cardStore = document.getElementById('cardStore')
let fire = document.getElementById('fire')
let cardFire = document.getElementById('cardFire')
let treeSound = new Audio('./audio/Floresta.wav')
let treeVolume = document.getElementById('treeVolume')
let cloudSound = new Audio('./audio/Chuva.wav')
let cloudVolume = document.getElementById('cloudVolume')
let storeSound = new Audio('./audio/Cafeteria.wav')
let storeVolume = document.getElementById('storeVolume')
let fireSound = new Audio('./audio/Lareira.wav')
let fireVolume = document.getElementById('fireVolume')
let volume = 5
// theme
let darkMode = document.getElementById('darkMode')
let moon = document.getElementById('lua') 
let sun = document.getElementById('sun') 
let timer = document.getElementById('timer')
let clock = document.getElementById('clock')
let darkOn = false

// theme actions
darkMode.onclick = () => {
  darkOn = !darkOn
  document.body.style.backgroundColor = darkOn ? '#111' : '#fff'
  clock.style.color = darkOn ? '#fff' : '#000'
  moon.hidden = !darkOn
  sun.hidden = darkOn
}

// clock actions
function countDown() {
  setTimeout(() => {
    if (stopTimer) return

    if (minutes.textContent == 0) {
      if (hours.textContent == 0) return
      hours.textContent = (hours.textContent - 1).toString().padStart(2, '0')
      minutes.textContent = (60).toString().padStart(2, '0')
    } else {
      minutes.textContent = (minutes.textContent - 1).toString().padStart(2, '0')
    }

    countDown()
  }, 950);
}

play.onclick = () => {
  countDown()
}

stop.onclick = () => {
  stopTimer = true
  hours.textContent = 25
  minutes.textContent = (00).toString().padStart(2, '0')
}

plus.onclick = () => {
  hours.textContent = (Number(hours.textContent) + 5).toString().padStart(2, '0')
}

minus.onclick = () => {
  hours.textContent = (Number(hours.textContent) - 5).toString().padStart(2, '0')
  if (hours.textContent < 0) hours.textContent = 00.toString().padStart(2, '0')
}

// sounds actions
function pauseSounds() {
  treeSound.pause()
  cloudSound.pause()
  storeSound.pause()
  fireSound.pause()
}

tree.onclick = () => {
  pauseSounds()
  cardTree.classList.toggle('active') ? treeSound.play() : treeSound.pause()
  cardCloud.classList.remove('active')
  cardStore.classList.remove('active')
  cardFire.classList.remove('active')
  treeSound.loop = true
  treeSound.volume = Number(document.querySelector("#treeVolume").value) / 10
}
treeVolume.addEventListener('input', () => {
  treeSound.volume = Number(document.querySelector("#treeVolume").value) / 10
})

cloud.onclick = () => {
  pauseSounds()
  cardCloud.classList.toggle('active') ? cloudSound.play() : cloudSound.pause()
  cardTree.classList.remove('active')
  cardStore.classList.remove('active')
  cardFire.classList.remove('active')
  cloudSound.loop = true 
  cloudSound.volume = 1
}
cloudVolume.addEventListener('input', () => {
  cloudSound.volume = Number(document.querySelector("#cloudVolume").value) / 10
})

store.onclick = () => {
  pauseSounds()
  cardStore.classList.toggle('active') ? storeSound.play() : storeSound.pause()
  cardTree.classList.remove('active')
  cardCloud.classList.remove('active')
  cardFire.classList.remove('active')
  storeSound.loop = true 
  storeSound.volume = 1
}
storeVolume.addEventListener('input', () => {
  storeSound.volume = Number(document.querySelector("#storeVolume").value) / 10
})

fire.onclick = () => {
  pauseSounds()
  cardFire.classList.toggle('active') ? fireSound.play() : fireSound.pause()
  cardTree.classList.remove('active')
  cardStore.classList.remove('active')
  cardCloud.classList.remove('active')
  fireSound.loop = true 
  fireSound.volume = 1
}
fireVolume.addEventListener('input', () => {
  fireSound.volume = Number(document.querySelector("#fireVolume").value) / 10
})

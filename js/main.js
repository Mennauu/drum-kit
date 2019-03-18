const keyCodes = [65, 83, 68, 70, 71, 72, 74, 75, 76]

const appendData = () => {
  const keyContainer = document.querySelector('.key-container')
  const keys = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L']
  const sounds = ['Clap', 'Hihat', 'Kick', 'Openhat', 'Boom', 'Ride', 'Snare', 'Tom', 'Tink']
  const soundFiles = ['clap.wav', 'hihat.wav', 'kick.wav', 'openhat.wav', 'boom.wav', 'ride.wav', 'snare.wav', 'tom.wav', 'tink.wav']

  for (let i in keys) {
    const keyElement = document.createElement('div')

    keyElement.className = 'key'
    keyElement.insertAdjacentHTML('beforeend', 
      `<span class="letter">${keys[i]}</span>
       <span class="sound-name">${sounds[i]}</span>
       <audio class="${sounds[i].toLowerCase()}">
         <source src="assets/sounds/${soundFiles[i]}" type="audio/wav">
       </audio>`)
    keyContainer.appendChild(keyElement)
  }
}

const playSound = (e) => {
  for (let i = 0; i < keyCodes.length; i++) {
    // Check if the pushed key(code) is 
    // equal to a keycode in the array
    if (e.keyCode == keyCodes[i]) {
      let sound = document.querySelector('.' + sounds[i].toLowerCase() + '')
      // If a sound isnt playing start
      // playing it else set timer to 0
      sound.paused ? sound.play() : sound.currentTime = 0
      // add class to parent element
      sound.parentNode.classList.add('active-key')
    }
  }
}

const removeClass = () => {
  this.classList.remove('active-key')
}

// Wait until the DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
  // trigger function appendData
  appendData()

  const keyDivs = document.querySelectorAll('.key')
  // Check if a key element has 
  // ended with transitiong (transform).
  // If so, trigger function removeClass
  keyDivs.forEach(key => key.addEventListener('transitionend', removeClass))
})

// Trigger function playSound on keydown
document.addEventListener('keydown', playSound)
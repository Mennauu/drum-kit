/********************************
***                           ***
******      JavaScript     ******
***                           ***
* Copyright (c) 2019 menno.work *
*********************************/
const keyContainer = document.querySelector('.key-container')
const keys = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L']
const keyCodes = [65, 83, 68, 70, 71, 72, 74, 75, 76]
const sounds = ['Clap', 'Hihat', 'Kick', 'Openhat', 'Boom', 'Ride', 'Snare', 'Tom', 'Tink']
const soundFiles = ['clap.wav', 'hihat.wav', 'kick.wav', 'openhat.wav', 'boom.wav', 'ride.wav', 'snare.wav', 'tom.wav', 'tink.wav']

function appendData() {
  for (let i = 0; i < keys.length; i++) {
    // Create a new div for every element in "keys" array
    let key = document.createElement('div')
    key.className = 'key'
    // Add the values from keys, sounds and soundFiles 
    // Note: positions are equal
    key.insertAdjacentHTML('beforeend', '<span class="letter">' + keys[i] + '</span><span class="sound-name">' + sounds[i] + '</span><audio class="' + sounds[i].toLowerCase() + '"><source src="assets/sounds/' + soundFiles[i] + '" type="audio/wav"></audio>')
    // Append the newly created divs to the container
    keyContainer.appendChild(key)
  }
}

function playSound(e) {
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

function removeClass() {
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
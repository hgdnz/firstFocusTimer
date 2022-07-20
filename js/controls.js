import Sounds from './sounds.js'
let minutes
export default function Controls({
  buttonPause,
  buttonPlay,
  newMinutes,
  minutesDisplay,
  secondsDisplay
}) {
  function playTime() {
    if (newMinutes <= '00') {
      controls.hold()
    } else {
      buttonPlay.classList.add('hide')
      buttonPause.classList.remove('hide')
    }
  }

  function pauseTime() {
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
  }

  function stopTime() {
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
    minutesDisplay.textContent = String(0).padStart(2, '0')
    secondsDisplay.textContent = String(0).padStart(2, '0')
    Sounds().coffeeShop.pause()
    Sounds().nature.pause()
    Sounds().rain.pause()
    Sounds().bonfire.pause()
    Sounds().timeEnd.pause()
  }

  
  return {
    playTime,
    pauseTime,
    stopTime,
    newMinutes,
   minutes
  }
}

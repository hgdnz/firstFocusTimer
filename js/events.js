import {
  buttonPlay,
  buttonPause,
  buttonAddTime,
  buttonSubTime,
  buttonStop,
  buttonCoffeeShop,
  buttonNature,
  buttonRain,
  buttonBonfire
} from './elements.js'

export default function ({ controls, timer, sound }) {
  buttonPlay.addEventListener('click', function () {
    controls.playTime()
    timer.countdown()
  })

  buttonPause.addEventListener('click', function () {
    controls.pauseTime()
    timer.hold()
    sound.coffeeShop.pause()
    sound.nature.pause()
    sound.rain.pause()
    sound.bonfire.pause()
  })

  buttonAddTime.addEventListener('click', function () {
    timer.addMinutes()
  })

  buttonSubTime.addEventListener('click', function () {
    timer.subTime()
  })

  buttonStop.addEventListener('click', function () {
    controls.stopTime()
    timer.hold()
    timer.resetTimer()
    sound.coffeeShop.pause()
    sound.nature.pause()
    sound.rain.pause()
    sound.bonfire.pause()
    sound.timeEnd.pause()
  })

  buttonCoffeeShop.addEventListener('click', function () {
    sound.coffeeShop.play()
    sound.nature.pause()
    sound.rain.pause()
    sound.bonfire.pause()
  })

  buttonNature.addEventListener('click', function () {
    sound.coffeeShop.pause()
    sound.nature.play()
    sound.rain.pause()
    sound.bonfire.pause()
  })

  buttonRain.addEventListener('click', function () {
    sound.coffeeShop.pause()
    sound.nature.pause()
    sound.rain.play()
    sound.bonfire.pause()
  })

  buttonBonfire.addEventListener('click', function () {
    sound.coffeeShop.pause()
    sound.nature.pause()
    sound.rain.pause()
    sound.bonfire.play()
  })

  return {
    buttonStop,
    buttonAddTime,
    buttonSubTime,
    buttonCoffeeShop,
    buttonNature,
    buttonRain,
    buttonBonfire
  }
}

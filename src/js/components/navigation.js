const navigationButton = document.querySelector('.main-navigation__controls')
const navigation = document.querySelector('.main-navigation__list')
const overlay = document.querySelector('.overlay')
const subMenus = document.querySelectorAll('.sub-menu-indicator')

navigationButton.addEventListener('click', e => {
  overlay.classList.toggle('active')
  navigationButton.classList.toggle("active")
  navigation.classList.toggle('active')
})

overlay.addEventListener('click', e => {
  overlay.classList.remove('active')
  navigationButton.classList.remove("active")
  navigation.classList.remove('active')
})

subMenus.forEach(element => element.addEventListener('click', e => {
  e.currentTarget
    .closest('.main-navigation__item_has-children')
    .classList
    .toggle('active')
}))
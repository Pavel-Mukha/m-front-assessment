const tableBody = document.querySelector('.agents__body')
const tableFooter = document.querySelector('.agents__footer')

window.addEventListener('resize', setWidth)

function setWidth() {
    tableFooter.style.width = tableBody.offsetWidth + 'px'
}
setWidth()

const menu = document.getElementById('menu')
const header = document.querySelector('.header-content')
const menuIcon = menu.firstChild

menu.onclick = () => toggleMenu()

document.body.onclick = e => {
  if (!e.target.closest('.header-content') && header.classList.contains('open')){
    toggleMenu()
  }
}

function toggleMenu(){
  let isOpened = header.classList.toggle('open')

  if (isOpened){
    menuIcon.className = 'fa fa-times'
    document.body.style.overflow = 'hidden'
    return 

  } else {
    document.body.style.overflow = 'auto'
    menuIcon.className = 'fa fa-bars'
  }
}
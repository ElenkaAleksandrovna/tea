// Открытие и закрытие leftside и затемнение фона
const headerBtn = document.querySelector(".header__burger");
const leftsideMenu = document.querySelector(".burger-menu");
const leftsideMenuClose = document.querySelector(".burger-menu__btn");
const overlay = document.querySelector(".overlay");

headerBtn.addEventListener("click", () => {
   leftsideMenu.classList.remove("burger-menu_close")
   leftsideMenu.classList.add("active")
   overlay.classList.add("active")
})

leftsideMenuClose.addEventListener("click", () => {
   leftsideMenu.classList.add("burger-menu_close")
   leftsideMenu.classList.remove("active")
   overlay.classList.remove("active")
})

overlay.addEventListener("click", () => {
   leftsideMenu.classList.add("burger-menu_close")
   leftsideMenu.classList.remove("active")
   overlay.classList.remove("active")
})


// Открытие и закрытие leftside
// const headerBtn = document.querySelector(".header__burger")
// const leftsideMenu = document.querySelector(".burger-menu")
// const leftsideMenuClose = document.querySelector(".burger-menu__btn")

// const closeButton = () => {
//       headerBtn.addEventListener('click', () => {
//       leftsideMenu.classList.remove('burger-menu_close')
//    })

//    leftsideMenuClose.addEventListener('click', () => {
//       leftsideMenu.classList.toggle('burger-menu_close')
//    })
// }
// closeButton()







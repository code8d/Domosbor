const wrapper = document.querySelector('.wrapper')
const login = document.querySelector('.login-wrapper')
const form = document.querySelector('.feedback')

/* Tabs */
const blocksLogin = document.querySelectorAll('.block_login')
const tabs = document.querySelectorAll('.user_button')

function vh() {
    const hero = document.querySelector('.hero-block')
    const loginWrapper = document.querySelector('.login-wrapper')
    const signupWrapper = document.querySelector('.signup-wrapper')
    const registration = document.querySelector('.registration')
    const feedback = document.querySelector('.feedback')

    const height = (a, b, c, d, e) => {
        if (a === undefined || a === null) {
            a = null
        }   else {
            a.style.height = `${document.documentElement.clientHeight - 80}px`
            a.style.minHeight = `820px`
        }
        if (b === undefined || a === null) {
            b = null
        }   else {
            b.style.height = `${document.documentElement.clientHeight - 80}px`
            b.style.minHeight = `820px`
        }
        if (c === undefined || a === null) {
            c = null
        }   else {
            c.style.height = `${document.documentElement.clientHeight - 80}px`
            c.style.minHeight = `820px`
        }
        if (d === undefined || a === null) {
            d = null
        }   else {
            d.style.height = `${document.documentElement.clientHeight - 80}px`
            d.style.minHeight = `820px`
        }
        if (e === undefined || a === null) {
            e = null
        }   else {
            e.style.height = `${document.documentElement.clientHeight - 80}px`
            e.style.minHeight = `820px`
        }
    }
    return height(hero, loginWrapper, signupWrapper, registration, feedback)
}
vh()

const headerButtons = document.querySelectorAll('.header-button')
const showMenu = document.querySelector('.hamburger')
const showLogin = document.querySelectorAll('.header_btn')[2]
const menu = document.querySelector('.menu-wrapper')
const loginMenu = document.querySelector('.login-wrapper')

function prevDefault(e) {
    e.preventDefault()
}

headerButtons.forEach(button => {
    button.addEventListener('click', prevDefault)
})

showMenu.addEventListener('click', () => {
    showMenuFunc()
    overflow()
})

if (loginMenu.classList.contains('menu_active')) {
    showMenu.classList.add('active')
}

function showMenuFunc() {
    if (showMenu.classList.contains('active')) {
        menu.classList.remove('menu_active')
        loginMenu.classList.remove('menu_active')
    }   else {
        menu.classList.toggle('menu_active')
    }
    showMenu.classList.toggle('active')
}

showLogin.addEventListener('click', () => {
    showLoginFunc()
    overflow()
})

function showLoginFunc() {
    showMenu.classList.toggle('active')
    loginMenu.classList.toggle('menu_active')
}

function overflow() {
    if (showMenu.classList.contains('active')) {
        wrapper.classList.add('hide')
    }   else {
        wrapper.classList.remove('hide')
    }
}
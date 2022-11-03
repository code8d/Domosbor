function vh() {
    const hero = document.querySelector('.hero-block')
    const loginWrapper = document.querySelector('.login-wrapper')

    const height = (a, b) => {
        a.style.height = `${document.documentElement.clientHeight - 80}px`
        a.style.minHeight = `820px`

        b.style.height = `${document.documentElement.clientHeight - 80}px`
        b.style.minHeight = `820px`
    }

    return height(hero, loginWrapper)
}
vh()

function showRegister() {
    const btns = document.querySelectorAll('.header_btn')
    const registration = document.querySelector('.login-wrapper')
    const wrapper = document.querySelector('.wrapper')

    btns[2].addEventListener('click', () => {

        registration.classList.toggle('login-show')

        if (registration.classList.contains('login-show')) {
            wrapper.style.overflow = 'hidden'
            wrapper.style.maxHeight = '100vh'
        }   else {
            wrapper.style.overflow = 'auto'
            wrapper.style.maxHeight = 'auto'
        }
    })
}
showRegister()
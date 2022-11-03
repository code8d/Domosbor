function vh() {
    const hero = document.querySelector('.hero-block')
    const loginWrapper = document.querySelector('.login-wrapper')
    const signupWrapper = document.querySelector('.signup-wrapper')
    const registration = document.querySelector('.registration')
    const feedback = document.querySelector('.feedback')

    const height = (a, b, c, d, e) => {
        a.style.height = `${document.documentElement.clientHeight - 80}px`
        a.style.minHeight = `820px`

        b.style.height = `${document.documentElement.clientHeight - 80}px`
        b.style.minHeight = `820px`

        c.style.height = `${document.documentElement.clientHeight - 80}px`
        c.style.minHeight = `820px`

        d.style.height = `${document.documentElement.clientHeight - 80}px`
        d.style.minHeight = `820px`

        e.style.height = `${document.documentElement.clientHeight - 80}px`
        e.style.minHeight = `820px`
    }

    return height(hero, loginWrapper, signupWrapper, registration, feedback)
}
vh()

function showRegistration() {
    const btns = document.querySelectorAll('.header_btn')
    const login = document.querySelector('.login-wrapper')
    const signup = document.querySelector('.signup-wrapper')
    const wrapper = document.querySelector('.wrapper')

    btns[2].addEventListener('click', () => {

        login.classList.toggle('login-show')

        if (login.classList.contains('login-show')) {
            wrapper.style.overflow = 'hidden'
            wrapper.style.maxHeight = '100vh'
        }   else {
            wrapper.style.overflow = 'auto'
            wrapper.style.maxHeight = 'auto'
        }
    })
}
showRegistration()

function switchingTabs() {
    const blocksLogin = document.querySelectorAll('.block_login')
    const tabs = document.querySelectorAll('.user_button')

    tabs[0].addEventListener('click', () => {

        if (tabs[0].classList.contains('acitve')) {
            return
        }
        if (!tabs[0].classList.contains('active')) {
            tabs[0].classList.add('active')
            tabs[1].classList.remove('active')

            blocksLogin[0].classList.add('active')
            blocksLogin[1].classList.remove('active')
        }
    })
    tabs[1].addEventListener('click', () => {

        if (tabs[1].classList.contains('acitve')) {
            return
        }
        if (!tabs[1].classList.contains('active')) {
            tabs[1].classList.add('active')
            tabs[0].classList.remove('active')

            blocksLogin[1].classList.add('active')
            blocksLogin[0].classList.remove('active')
        }
    })

}
switchingTabs()
const wrapper = document.querySelector('.wrapper')
const login = document.querySelector('.login-wrapper')

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

function switchingTabs() {
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

function showQuestions() {
    const buttons = document.querySelectorAll('.question_button')

    buttons.forEach(button => {
        button.addEventListener('click', (e) => {

            button.nextElementSibling.classList.toggle('active')
        })
    })
}
showQuestions()

/* Registration */
const registartionBtn = document.querySelector('.registration-button'),
    registrationBlock = document.querySelector('.registration')

/* Hamburger */
const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu-wrapper')

/* Authorization */
const loginBlock = document.querySelector('.login-wrapper'),
    displayLogin = document.querySelectorAll('.header_btn')[2]

const displayMenu = () => {

    return function showMenuBlock(hideBtn, displayBtn, displayBlock, hideOverflow = wrapper) {

        displayBtn.addEventListener('click', () => {
            displayBlock.classList.toggle('show_menu')

            if (displayBlock.classList.contains('show_menu')) {
                hideOverflow.classList.add('hide')
                hamburger.classList.add('active')
            }   else {
                hideOverflow.classList.remove('hide')
                hamburger.classList.remove('active')
            }
        })
    }
}
const showMenu = displayMenu()
showMenu(hamburger, hamburger, menu)
showMenu(hamburger, displayLogin, loginBlock)
// send-form

const form = document.querySelector('.feedback')
const sendFormBtns = document.querySelectorAll('.send-form')

const displayForm = () => {

    return function showFormBlock(hideBtn, displayBtn, displayBlock, hideOverflow = wrapper) {

        displayBtn.forEach(btn => {
            btn.addEventListener('click', () => {
                displayBlock.classList.toggle('show_menu')
                console.log('work')

                if (displayBlock.classList.contains('show_menu')) {
                    hideOverflow.classList.add('hide')
                    hamburger.classList.add('active')    
                }   else {
                    hideOverflow.classList.remove('hide')
                    hamburger.classList.remove('active')
                }
            })
        })
        hideBtn.addEventListener('click', () => {
            displayBlock.classList.remove('show_menu')
        })
    }
}
const showForm = displayForm()
showForm(hamburger, sendFormBtns, form)

/* Gallery */

// const buttons = document.querySelectorAll('.gallery-button')
// const carousel = document.querySelector('.carousel')

// buttons.forEach(button => {
//     button.addEventListener('click', () => {
//         if (button.classList.contains('gallery-button_left')) {
//             slide(button, false)
//         }   else if (button.classList.contains('gallery-button_right')) {
//             slide(false, button)
//         }
//     })
// })

// let currentImage = 0
// const image = carousel.querySelectorAll('.item')

// function slide(left, right) {

//     if (currentImage < carousel.childNodes.length) {
//         currentImage++
//     }
//     if (currentImage === carousel.childNodes.length) {
//         currentImage = 0
//     }

//     if (left) {
//         carousel.style.left = `${currentImage * image[0].clientWidth}px`
//     }   else if (right) {
//         carousel.style.left = `-${currentImage * image[0].clientWidth}px`
//     }
// }
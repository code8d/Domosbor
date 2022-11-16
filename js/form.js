function formFunc() {
    const form = document.querySelector('.feedback')
    const sendForm = document.querySelector('.send-form')
    const wrapper = document.querySelector('.wrapper')

    sendForm.addEventListener('click', () => {
        sendFormFunc()
    })

    function sendFormFunc() {
        form.classList.toggle('menu_active')
        form.style.minHeight = '820px'
        form.style.maxHeight = `100vh`
        wrapper.classList.toggle('hide')
    }
}
// formFunc()
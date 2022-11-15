function slider(active = 0) {
    const carousel = document.querySelector('.carousel')
    const carouselItems = carousel.querySelectorAll('.item')
    const buttons = document.querySelectorAll('.gallery-button')
    const marks = document.querySelectorAll('.mark')
    
    let activeSlide = 0
    
    marks[active].classList.add('active')

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            innerSlider(button)
        })
    })
    
    function innerSlider(button) {
        const itemWidth = carouselItems[0].clientWidth
    
        if (button.classList.contains('gallery-button_left')) {
            if (activeSlide === 0) {
                return
            }   else {
                activeSlide--
            }
        }   else if (button.classList.contains('gallery-button_right')) {
            if (activeSlide < carouselItems.length - 5) {
                activeSlide++
            }   else {
                return
            }
        }
        carousel.style.left = `-${itemWidth * activeSlide}px`
    
        if (activeSlide === 0) {
            activeMark(0)
            marks[0].classList.add('active')
        }
        if (activeSlide === 5) {
            activeMark(1)
            marks[1].classList.add('active')
        }
        if (activeSlide === 10) {
            activeMark(2)
            marks[2].classList.add('active')
        }
        if(activeSlide === 15) {
            activeMark(3)
            marks[3].classList.add('active')
        }
        if (activeSlide === 20) {
            activeMark(4)
        }
        function activeMark(number) {
            marks.forEach(mark => mark.classList.remove('active'))
            marks[number].classList.add('active')
        }
    }
}
slider()
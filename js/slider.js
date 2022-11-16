function slider(active = 0) {
    const carousel = document.querySelector('.carousel')
    const carouselItems = carousel.querySelectorAll('.item')
    const buttons = document.querySelectorAll('.gallery-button')
    const marks = document.querySelectorAll('.mark')
    
    let activeSlide = 0

    marks[active].classList.add('active')

    marks.forEach(flag => {
        flag.addEventListener('click', () => {
            activeFlag(flag)
        })
    })
    const itemWidth = carouselItems[0].clientWidth

    function activeFlag(element) {
        marks.forEach(flag => flag.classList.remove('active'))
        element.classList.add('active')

        if ( marks[0].classList.contains('active')) {
            activeSlide = 0
        }   else if ( marks[1].classList.contains('active')) {
            activeSlide = 5
        }   else if ( marks[2].classList.contains('active')) {
            activeSlide = 10
        }   else if ( marks[3].classList.contains('active')) {
            activeSlide = 15
        }

        carousel.style.left = `-${itemWidth * activeSlide}px`
    }
    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            innerSlider(button)
        })
    })
    
    function innerSlider(button) {
    
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
        }
        if (activeSlide === 5) {
            activeMark(1)
        }
        if (activeSlide === 10) {
            activeMark(2)
        }
        if (activeSlide === 15) {
            activeMark(3)
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
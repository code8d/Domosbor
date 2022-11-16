const itemsBlock = document.querySelector('.items-block')
const items = itemsBlock.querySelectorAll('.item')

items.forEach(item => {
    item.children[0].addEventListener('click', () => {
        toggle(item.children[0])
    })
})

function toggle(element) {
    const parent = element.parentNode.parentNode
    const grandParent = parent.parentNode
    const items = grandParent.children[0].children
    const content = element.nextElementSibling

    for (let item of items) {
        if (item === element.parentNode) {
            element.parentNode.classList.toggle('active')
            content.classList.add('active')
        }   else {
            item.children[1].classList.remove('active')
            item.classList.remove('active')
        }
    }
}
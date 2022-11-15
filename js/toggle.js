const itemsBlock = document.querySelector('.items-block')
const items = itemsBlock.querySelectorAll('.item')

items.forEach(item => {
    item.addEventListener('click', (e) => {
        // if (e.target === item.children[0]) {
        //     toggle(e)
        // }
        toggle(e)
    })
})

function toggle(element) {
    const target = element.target
    const parent = target.parentNode.parentNode
    const grandParent = parent.parentNode
    const itemsChlidrens = grandParent.children[0].children
    const content = target.nextElementSibling

    for (let item of itemsChlidrens) {
        if (item === target.parentNode) {
            target.parentNode.classList.toggle('active')
            content.classList.toggle('active')
        }   else {
            item.children[1].classList.remove('active')
            item.classList.remove('active')
        }
    }

    console.log(target.tagName)
}
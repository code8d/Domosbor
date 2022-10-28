const hero = document.querySelector('.hero-block')

hero.style.height = `${document.documentElement.clientHeight - 80}px`
hero.style.minHeight = `820px`

console.log(document.documentElement.clientHeight)
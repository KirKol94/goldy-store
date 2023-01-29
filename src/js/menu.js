!(() => {
    const burger = document.querySelector('.js-burger')
    const menu = document.querySelector('.js-menu')
    const overlay = menu.querySelector('.js-menu__overlay')
    const content = menu.querySelector('.js-menu__content')
    const items = menu.querySelectorAll('.js-menu__item')

    burger.addEventListener('click', () => {
        menu.classList.toggle('_hidden')
    })

    overlay.addEventListener('click', () => {
        menu.classList.add('_hidden')
    })

    items.forEach((item) => {
        item.addEventListener('click', () => {
            menu.classList.add('_hidden')
        })
    })

    content.addEventListener('click', (e) => {
        e.stopPropagation()
    })
})()

!(() => {
    new Swiper('.js-sale__slider', {
        loop: true,
        pagination: {
            el: '.js-sale__pagination',
            clickable: true,
            renderBullet(index, className) {
                return `<span class="${className}"></span>`
            },
        },
    })
})()

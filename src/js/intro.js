!(() => {
    new Swiper('.js-intro__slider', {
        loop: true,
        navigation: {
            nextEl: '.js-intro__nav_right',
            prevEl: '.js-intro__nav_left',
        },

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet(index, className) {
                return `<span class="${className}"></span>`
            },
        },

    })
})()

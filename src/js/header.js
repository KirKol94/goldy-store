(() => {
    const headerLocationBlock = document.querySelector('[data-js=\'header-location-js\']')
    const headerLocationList = headerLocationBlock.querySelector('[data-js=\'header-location-list-js\']')
    const headerLocationListItems = headerLocationList.querySelectorAll('[data-js=\'header-location-list-item-js\']')
    const headerLocationCityTex = headerLocationBlock.querySelector('[data-js=\'header-location-city-text-js\']')
    const headerSearchForm = document.querySelector('[data-js=\'header-search-js\']')
    const headerSearchInput = headerSearchForm.querySelector('input')

    // при нажатии на блок с выбором города появляется / исчезает список
    headerLocationBlock.addEventListener('click', (e) => {
        e.stopPropagation()
        headerLocationList.classList.toggle('_hidden')
    })

    // при нажатии на элемент этого списка список закрывается
    // тут же обработка в дальнейшем
    headerLocationListItems.forEach((item) => {
        item.addEventListener('click', (e) => {
            headerLocationList.classList.remove('_hidden')
            headerLocationCityTex.textContent = item.textContent
        })
    })

    // при наведении на инпут поиска на него вешается фокус
    headerSearchInput.addEventListener('click', () => {
        headerSearchForm.classList.add('_active')
    })

    // при потери фокуса с инпута - с блока убирается подсветка
    headerSearchInput.addEventListener('blur', () => {
        headerSearchForm.classList.remove('_active')
    })

    // Обработка нажатия клавиш
    document.addEventListener('keydown', (e) => {
        // При нажатии на escape, если отображается список городов - он закрывается
        if (e.key === 'Escape' && !headerLocationList.classList.contains('_hidden')) {
            headerLocationList.classList.add('_hidden')
        }
    })

    document.addEventListener('click', (event) => {
        // При клике вне блока header__location - будет скрываться список городов
        if (!event.target.closest('.header__top_location')) {
            headerLocationList.classList.add('_hidden')
        }
    })
})()

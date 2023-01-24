(() => {
    const headerSearchForm = document.querySelector('[data-js=\'header-search-js\']')
    const headerSearchInput = headerSearchForm.querySelector('input')

    headerSearchInput.addEventListener('mousemove', () => {
        headerSearchInput.focus()
    })

    headerSearchInput.addEventListener('focus', () => {
        headerSearchForm.classList.add('_active')
    })

    headerSearchInput.addEventListener('blur', () => {
        headerSearchForm.classList.remove('_active')
    })
})()

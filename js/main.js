const { forwardRef } = require("react")

// FAQ ACCORDION
document.addEventListener('DOMContentLoaded', () => {
    const faqContainer = document.querySelector('.faq-content')

    faqContainer.addEventListener('click', (e) => {
        const groupHeader = e.target.closest('.faq-group-header')
        if (!groupHeader) return

        const group = groupHeader.parentElement
        const groupBody = group.querySelector('.faq-group-body')
        const icon = groupHeader.querySelector('i')

        // TOGGLE ICON
        icon.classList.toggle('fa-plus')
        icon.classList.toggle('fa-xmark')


        // TOGGLE VISIBILITY OF BODY
        groupBody.classList.toggle('open')

        // CLOSE OTHER OPEN FAQ BODIES
        const otherGroups = faqContainer.querySelectorAll('.faq-group')
        otherGroups.forEach((otherGroup) => {
            if (otherGroup !== group) {
                const otherGroupBody = otherGroup.querySelector('.faq-group-body')
                const otherIcon = otherGroup.querySelector('.faq-group-header i')

                otherGroupBody.classList.remove('open')
                otherIcon.classList.remove('fa-xmark')
                otherIcon.classList.add('fa-plus')
            }
        })

    })

})

// MOBILE MENU
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerButtton = document.querySelector('.hamburger-button')
    const mobileMenu = document.querySelector('.mobile-menu ')

    hamburgerButtton.addEventListener('click', () =>
        mobileMenu.classList.toggle('active')
    )
})


const formulario = document.querySelector('form[name=newsletter]')

formulario.addEventListener("submit", cambioAsunto)

function cambioAsunto() {
    const asunto = document.querySelector('input[name="subject"]')
    const nombre = document.querySelector("input[name=nombre]")
    asunto.value = "%{submissionId} - Nueva consulta de " + nombre.value + "en el formulario de %{formName}"
}
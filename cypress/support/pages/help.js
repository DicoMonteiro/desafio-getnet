class HelpPage {

    mouseHover() {
        cy.get('.o-faq-cards__content h4').realMouseDown({ position: "bottomLeft" });
    }

    search(text) {
        cy.get('#faq-search-input').type(text)
    }

    selectOneOption() {
        cy.get('a[href*="solucao-de-dividas"] h2').click()
    }

    validateModalTitle(msg) {
        cy.get('.is-modal-open .o-modal__title')
            .should('have.text', msg)
    }

    validateModalText(msg) {
        cy.contains('.is-modal-open > .o-modal__content > .o-modal__text > .o-modal__text-content', msg)
            .should('be.visible')
    }
}

export default new HelpPage()
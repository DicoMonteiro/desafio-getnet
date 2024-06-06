
class Navbar {

    // Para acessar com resolução de tela menores
    accessMenuBurger() {
        cy.get("#gnt-burger").click()
    }

    accessMenuHelp() {
        cy.get('#gnt-navbar #menu-header-menu span[class*="gnt-nav-info"]').realHover();
    }

    accessHelpCentral() {
        cy.get('#menu-ajuda-sou-cliente-central-ajuda').click()
    }

}

export default new Navbar()
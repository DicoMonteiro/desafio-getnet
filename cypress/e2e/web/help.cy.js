import homePage from '../../support/pages/home'
import navBar from '../../support/components/Navbar'
import helpPage from '../../support/pages/help'
import helpData from '../../fixtures/web/help.json'

describe('help', () => {
    it('access help and search by Boleto', () => {
      homePage.go()
      navBar.accessMenuHelp()
      navBar.accessHelpCentral()
      helpPage.mouseHover()
      helpPage.search('Boleto')
      helpPage.selectOneOption()
      helpPage.validateModalTitle('Eu concluí a negociação, de que forma receberei meu boleto?')

      const messages = helpData.messagesBoleto

      messages.forEach(e => {
        helpPage.validateModalText(e.text)
      })
    })
})
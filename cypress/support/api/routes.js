Cypress.Commands.add('postToken', (client, payload)=> {
    cy.api({
        url: Cypress.env('apiRest') + '/auth/oauth/v2/token',
        method: 'POST',
        headers: {
            'Authorization': `Basic ${client}`,
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        form: true,
        body: payload,
        failOnStatusCode: false
      }).then((response)=> {
        return response
    })
})

Cypress.Commands.add('postTokenizacaoPCI', (token, payload)=> {
    cy.api({
        url: Cypress.env('apiRest') + '/v1/tokens/card',
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: payload,
        failOnStatusCode: false
      }).then((response)=> {
        return response
    })
})

Cypress.Commands.add('postTokenizacaoBandeira', (token, payload)=> {
    cy.api({
        url: Cypress.env('apiRest') + '/v1/tokenization/token',
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: payload,
        failOnStatusCode: false
      }).then((response)=> {
        return response
    })
})
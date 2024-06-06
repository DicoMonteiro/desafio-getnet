import usersData from '../../fixtures/api/users.json'
import cardsData from '../../fixtures/api/cardsData.json'

describe('POST /v1/tokenization/token', ()=> {

  it('card token generated without success - Visa Brand - Pan On File', ()=> {

    // Datas Test
    const sessionData = {
        clientId: usersData.session.client_id,
        clientSecret: usersData.session.client_secret
    }

    const payloadToken = {
        scope: usersData.session.scope,
        grant_type: usersData.session.grant_type
    }

    let concatenacaoClientIdClientSecret = sessionData.clientId + ':' + sessionData.clientSecret
    let client = btoa(concatenacaoClientIdClientSecret)


    cy.postToken(client, payloadToken)
        .then(response => {
            expect(response.status).to.eq(200)
            cy.postTokenizacaoBandeira(response.body.access_token, cardsData.cardDataVisaWithOnFile)
                .then(resp => {
                    expect(resp.status).to.eq(422)
                    expect(resp.body.name).to.eq('UnprocessableEntity')
                    expect(resp.body.message).to.eq('Unprocessable Entity')
                    expect(resp.body.details[0].status).to.eq('DENIED')
                    expect(resp.body.details[0].error_code).to.eq('GENERIC-422')
                    expect(resp.body.details[0].description).to.eq('Unprocessable Entity')
                    expect(resp.body.details[0].description_detail).to.eq('Tokenização do cartão não realizada')
                })
        })
  })

  it('card token generated without success - Visa Brand - Pan Manually Entered', ()=> {

    // Datas Test
    const sessionData = {
        clientId: usersData.session.client_id,
        clientSecret: usersData.session.client_secret
    }

    const payloadToken = {
        scope: usersData.session.scope,
        grant_type: usersData.session.grant_type
    }

    let concatenacaoClientIdClientSecret = sessionData.clientId + ':' + sessionData.clientSecret
    let client = btoa(concatenacaoClientIdClientSecret)


    cy.postToken(client, payloadToken)
        .then(response => {
            expect(response.status).to.eq(200)
            cy.postTokenizacaoBandeira(response.body.access_token, cardsData.cardDataVisaWithManuallyEntered)
                .then(resp => {
                    expect(resp.status).to.eq(422)
                    expect(resp.body.name).to.eq('UnprocessableEntity')
                    expect(resp.body.message).to.eq('Unprocessable Entity')
                    expect(resp.body.details[0].status).to.eq('DENIED')
                    expect(resp.body.details[0].error_code).to.eq('GENERIC-422')
                    expect(resp.body.details[0].description).to.eq('Unprocessable Entity')
                    expect(resp.body.details[0].description_detail).to.eq('Tokenização do cartão não realizada')
                })
        })
  })

  it('card token generated without success - Visa Brand - Pan Via Application', ()=> {

    // Datas Test
    const sessionData = {
        clientId: usersData.session.client_id,
        clientSecret: usersData.session.client_secret
    }

    const payloadToken = {
        scope: usersData.session.scope,
        grant_type: usersData.session.grant_type
    }

    let concatenacaoClientIdClientSecret = sessionData.clientId + ':' + sessionData.clientSecret
    let client = btoa(concatenacaoClientIdClientSecret)


    cy.postToken(client, payloadToken)
        .then(response => {
            expect(response.status).to.eq(200)
            cy.postTokenizacaoBandeira(response.body.access_token, cardsData.cardDataVisaWithViaApplication)
                .then(resp => {
                    expect(resp.status).to.eq(422)
                    expect(resp.body.name).to.eq('UnprocessableEntity')
                    expect(resp.body.message).to.eq('Unprocessable Entity')
                    expect(resp.body.details[0].status).to.eq('DENIED')
                    expect(resp.body.details[0].error_code).to.eq('GENERIC-422')
                    expect(resp.body.details[0].description).to.eq('Unprocessable Entity')
                    expect(resp.body.details[0].description_detail).to.eq('Tokenização do cartão não realizada')
                })
        })
  })

  it('card token generated without success - Mastercard Brand - Pan On File', ()=> {

    // Datas Test
    const sessionData = {
        clientId: usersData.session.client_id,
        clientSecret: usersData.session.client_secret
    }

    const payloadToken = {
        scope: usersData.session.scope,
        grant_type: usersData.session.grant_type
    }

    let concatenacaoClientIdClientSecret = sessionData.clientId + ':' + sessionData.clientSecret
    let client = btoa(concatenacaoClientIdClientSecret)


    cy.postToken(client, payloadToken)
        .then(response => {
            expect(response.status).to.eq(200)
            cy.postTokenizacaoBandeira(response.body.access_token, cardsData.cardDataMasterWithOnFile)
                .then(resp => {
                    expect(resp.status).to.eq(422)
                    expect(resp.body.name).to.eq('UnprocessableEntity')
                    expect(resp.body.message).to.eq('Unprocessable Entity')
                    expect(resp.body.details[0].status).to.eq('DENIED')
                    expect(resp.body.details[0].error_code).to.eq('GENERIC-422')
                    expect(resp.body.details[0].description).to.eq('Unprocessable Entity')
                    expect(resp.body.details[0].description_detail).to.eq('Tokenização do cartão não realizada')
                })
        })
  })

  it('card token generated without success - Mastercard Brand - Pan Manually Entered', ()=> {

    // Datas Test
    const sessionData = {
        clientId: usersData.session.client_id,
        clientSecret: usersData.session.client_secret
    }

    const payloadToken = {
        scope: usersData.session.scope,
        grant_type: usersData.session.grant_type
    }

    let concatenacaoClientIdClientSecret = sessionData.clientId + ':' + sessionData.clientSecret
    let client = btoa(concatenacaoClientIdClientSecret)


    cy.postToken(client, payloadToken)
        .then(response => {
            expect(response.status).to.eq(200)
            cy.postTokenizacaoBandeira(response.body.access_token, cardsData.cardDataMasterWithManuallyEntered)
                .then(resp => {
                    expect(resp.status).to.eq(422)
                    expect(resp.body.name).to.eq('UnprocessableEntity')
                    expect(resp.body.message).to.eq('Unprocessable Entity')
                    expect(resp.body.details[0].status).to.eq('DENIED')
                    expect(resp.body.details[0].error_code).to.eq('GENERIC-422')
                    expect(resp.body.details[0].description).to.eq('Unprocessable Entity')
                    expect(resp.body.details[0].description_detail).to.eq('Tokenização do cartão não realizada')
                })
        })
  })

  it('card token generated without success - Mastercard Brand - Pan Via Application', ()=> {

    // Datas Test
    const sessionData = {
        clientId: usersData.session.client_id,
        clientSecret: usersData.session.client_secret
    }

    const payloadToken = {
        scope: usersData.session.scope,
        grant_type: usersData.session.grant_type
    }

    let concatenacaoClientIdClientSecret = sessionData.clientId + ':' + sessionData.clientSecret
    let client = btoa(concatenacaoClientIdClientSecret)


    cy.postToken(client, payloadToken)
        .then(response => {
            expect(response.status).to.eq(200)
            cy.postTokenizacaoBandeira(response.body.access_token, cardsData.cardDataMasterWithViaApplication)
                .then(resp => {
                    expect(resp.status).to.eq(422)
                    expect(resp.body.name).to.eq('UnprocessableEntity')
                    expect(resp.body.message).to.eq('Unprocessable Entity')
                    expect(resp.body.details[0].status).to.eq('DENIED')
                    expect(resp.body.details[0].error_code).to.eq('GENERIC-422')
                    expect(resp.body.details[0].description).to.eq('Unprocessable Entity')
                    expect(resp.body.details[0].description_detail).to.eq('Tokenização do cartão não realizada')
                })
        })
  })

  it('card token generated without success - Without Email', ()=> {

    // Datas Test
    const sessionData = {
        clientId: usersData.session.client_id,
        clientSecret: usersData.session.client_secret
    }

    const payloadToken = {
        scope: usersData.session.scope,
        grant_type: usersData.session.grant_type
    }

    let concatenacaoClientIdClientSecret = sessionData.clientId + ':' + sessionData.clientSecret
    let client = btoa(concatenacaoClientIdClientSecret)


    cy.postToken(client, payloadToken)
        .then(response => {
            expect(response.status).to.eq(200)
            cy.postTokenizacaoBandeira(response.body.access_token, cardsData.cardDataWithoutEmail)
                .then(resp => {
                    expect(resp.status).to.eq(400)
                    expect(resp.body.name).to.eq('ValidationError')
                    expect(resp.body.message).to.eq('Bad Request')
                    expect(resp.body.details[0].status).to.eq('DENIED')
                    expect(resp.body.details[0].error_code).to.eq('GENERIC-400')
                    expect(resp.body.details[0].description).to.eq('Bad Request')
                    expect(resp.body.details[0].description_detail).to.eq('\"email\" is not allowed to be empty')
                })
        })
  })

  it('card token generated without success - Without Card Band', ()=> {

    // Datas Test
    const sessionData = {
        clientId: usersData.session.client_id,
        clientSecret: usersData.session.client_secret
    }

    const payloadToken = {
        scope: usersData.session.scope,
        grant_type: usersData.session.grant_type
    }

    let concatenacaoClientIdClientSecret = sessionData.clientId + ':' + sessionData.clientSecret
    let client = btoa(concatenacaoClientIdClientSecret)


    cy.postToken(client, payloadToken)
        .then(response => {
            expect(response.status).to.eq(200)
            cy.postTokenizacaoBandeira(response.body.access_token, cardsData.cardDataWithoutCardBrand)
                .then(resp => {
                    expect(resp.status).to.eq(400)
                    expect(resp.body.name).to.eq('ValidationError')
                    expect(resp.body.message).to.eq('Bad Request')
                    expect(resp.body.details[0].status).to.eq('DENIED')
                    expect(resp.body.details[0].error_code).to.eq('GENERIC-400')
                    expect(resp.body.details[0].description).to.eq('Bad Request')
                    expect(resp.body.details[0].description_detail).to.eq('\"card_brand\" is not allowed to be empty')
                })
        })
  })
  
  it('card token generated without success - Without Card Pan Source', ()=> {

    // Datas Test
    const sessionData = {
        clientId: usersData.session.client_id,
        clientSecret: usersData.session.client_secret
    }

    const payloadToken = {
        scope: usersData.session.scope,
        grant_type: usersData.session.grant_type
    }

    let concatenacaoClientIdClientSecret = sessionData.clientId + ':' + sessionData.clientSecret
    let client = btoa(concatenacaoClientIdClientSecret)


    cy.postToken(client, payloadToken)
        .then(response => {
            expect(response.status).to.eq(200)
            cy.postTokenizacaoBandeira(response.body.access_token, cardsData.cardDataWithoutCardPanSource)
                .then(resp => {
                    expect(resp.status).to.eq(400)
                    expect(resp.body.name).to.eq('ValidationError')
                    expect(resp.body.message).to.eq('Bad Request')
                    expect(resp.body.details[0].status).to.eq('DENIED')
                    expect(resp.body.details[0].error_code).to.eq('GENERIC-400')
                    expect(resp.body.details[0].description).to.eq('Bad Request')
                    expect(resp.body.details[0].description_detail).to.eq('\"card_pan_source\" is not allowed to be empty')
                })
        })
  })

  it('card token generated without success - Without Card Pan', ()=> {

    // Datas Test
    const sessionData = {
        clientId: usersData.session.client_id,
        clientSecret: usersData.session.client_secret
    }

    const payloadToken = {
        scope: usersData.session.scope,
        grant_type: usersData.session.grant_type
    }

    let concatenacaoClientIdClientSecret = sessionData.clientId + ':' + sessionData.clientSecret
    let client = btoa(concatenacaoClientIdClientSecret)


    cy.postToken(client, payloadToken)
        .then(response => {
            expect(response.status).to.eq(200)
            cy.postTokenizacaoBandeira(response.body.access_token, cardsData.cardDataWithoutCardPan)
                .then(resp => {
                    expect(resp.status).to.eq(400)
                    expect(resp.body.name).to.eq('ValidationError')
                    expect(resp.body.message).to.eq('Bad Request')
                    expect(resp.body.details[0].status).to.eq('DENIED')
                    expect(resp.body.details[0].error_code).to.eq('GENERIC-400')
                    expect(resp.body.details[0].description).to.eq('Bad Request')
                    expect(resp.body.details[0].description_detail).to.eq('\"card_pan\" is not allowed to be empty')
                })
        })
  })

  it('card token generated without success - Without Expiration Month', ()=> {

    // Datas Test
    const sessionData = {
        clientId: usersData.session.client_id,
        clientSecret: usersData.session.client_secret
    }

    const payloadToken = {
        scope: usersData.session.scope,
        grant_type: usersData.session.grant_type
    }

    let concatenacaoClientIdClientSecret = sessionData.clientId + ':' + sessionData.clientSecret
    let client = btoa(concatenacaoClientIdClientSecret)


    cy.postToken(client, payloadToken)
        .then(response => {
            expect(response.status).to.eq(200)
            cy.postTokenizacaoBandeira(response.body.access_token, cardsData.cardDataWithoutExpirationMonth)
                .then(resp => {
                    expect(resp.status).to.eq(400)
                    expect(resp.body.name).to.eq('ValidationError')
                    expect(resp.body.message).to.eq('Bad Request')
                    expect(resp.body.details[0].status).to.eq('DENIED')
                    expect(resp.body.details[0].error_code).to.eq('GENERIC-400')
                    expect(resp.body.details[0].description).to.eq('Bad Request')
                    expect(resp.body.details[0].description_detail).to.eq('\"expiration_month\" is not allowed to be empty')
                })
        })
  })

  it('card token generated without success - Without Expiration Year', ()=> {

    // Datas Test
    const sessionData = {
        clientId: usersData.session.client_id,
        clientSecret: usersData.session.client_secret
    }

    const payloadToken = {
        scope: usersData.session.scope,
        grant_type: usersData.session.grant_type
    }

    let concatenacaoClientIdClientSecret = sessionData.clientId + ':' + sessionData.clientSecret
    let client = btoa(concatenacaoClientIdClientSecret)


    cy.postToken(client, payloadToken)
        .then(response => {
            expect(response.status).to.eq(200)
            cy.postTokenizacaoBandeira(response.body.access_token, cardsData.cardDataWithoutExpirationYear)
                .then(resp => {
                    expect(resp.status).to.eq(400)
                    expect(resp.body.name).to.eq('ValidationError')
                    expect(resp.body.message).to.eq('Bad Request')
                    expect(resp.body.details[0].status).to.eq('DENIED')
                    expect(resp.body.details[0].error_code).to.eq('GENERIC-400')
                    expect(resp.body.details[0].description).to.eq('Bad Request')
                    expect(resp.body.details[0].description_detail).to.eq('\"expiration_year\" is not allowed to be empty')
                })
        })
  })

  it('card token generated without success - Without Customer Id', ()=> {

    // Datas Test
    const sessionData = {
        clientId: usersData.session.client_id,
        clientSecret: usersData.session.client_secret
    }

    const payloadToken = {
        scope: usersData.session.scope,
        grant_type: usersData.session.grant_type
    }

    let concatenacaoClientIdClientSecret = sessionData.clientId + ':' + sessionData.clientSecret
    let client = btoa(concatenacaoClientIdClientSecret)


    cy.postToken(client, payloadToken)
        .then(response => {
            expect(response.status).to.eq(200)
            cy.postTokenizacaoBandeira(response.body.access_token, cardsData.cardDataWithoutCustomerId)
                .then(resp => {
                    // Era esperado que retornasse 200 ou 422 conforme os demais cenários de sucesso
                    // Pois este campo de acordo com a documentação não é obrigatório
                    expect(resp.status).to.eq(422)
                    //expect(resp.body.name).to.eq('ValidationError')
                    //expect(resp.body.message).to.eq('Bad Request')
                    //expect(resp.body.details[0].status).to.eq('DENIED')
                    //expect(resp.body.details[0].error_code).to.eq('GENERIC-400')
                    //expect(resp.body.details[0].description).to.eq('Bad Request')
                    //expect(resp.body.details[0].description_detail).to.eq('\"customer_id\" is not allowed to be empty')
                })
        })
  })

  it('card token generated without success - Without Security Code', ()=> {

    // Datas Test
    const sessionData = {
        clientId: usersData.session.client_id,
        clientSecret: usersData.session.client_secret
    }

    const payloadToken = {
        scope: usersData.session.scope,
        grant_type: usersData.session.grant_type
    }

    let concatenacaoClientIdClientSecret = sessionData.clientId + ':' + sessionData.clientSecret
    let client = btoa(concatenacaoClientIdClientSecret)


    cy.postToken(client, payloadToken)
        .then(response => {
            expect(response.status).to.eq(200)
            cy.postTokenizacaoBandeira(response.body.access_token, cardsData.cardDataWithoutSecurityCode)
                .then(resp => {
                    // Era esperado que retornasse 200 ou 422 conforme os demais cenários de sucesso
                    // Pois este campo de acordo com a documentação não é obrigatório
                    expect(resp.status).to.eq(422)
                    //expect(resp.body.name).to.eq('ValidationError')
                    //expect(resp.body.message).to.eq('Bad Request')
                    //expect(resp.body.details[0].status).to.eq('DENIED')
                    //expect(resp.body.details[0].error_code).to.eq('GENERIC-400')
                    //expect(resp.body.details[0].description).to.eq('Bad Request')
                    //expect(resp.body.details[0].description_detail).to.eq('\"customer_id\" is not allowed to be empty')
                })
        })
  })

  it('card token generated without success - Unauthorized', ()=> {

    // Datas Test
    const sessionData = {
        clientId: usersData.session.client_id,
        clientSecret: usersData.session.client_secret
    }

    const payloadToken = {
        scope: usersData.session.scope,
        grant_type: usersData.session.grant_type
    }

    let concatenacaoClientIdClientSecret = sessionData.clientId + ':' + sessionData.clientSecret
    let client = btoa(concatenacaoClientIdClientSecret)


    cy.postToken(client, payloadToken)
        .then(response => {
            expect(response.status).to.eq(200)
            cy.postTokenizacaoBandeira('3d4f37f0-076a-47b4-8ef7-2bb1f042dtte', cardsData.cardDataVisaWithOnFile)
                .then(resp => {
                    expect(resp.status).to.eq(401)
                    expect(resp.body.name).to.eq('GatewayRequestError')
                    expect(resp.body.message).to.eq('Unauthorized')
                    expect(resp.body.details[0].status).to.eq('DENIED')
                    expect(resp.body.details[0].error_code).to.eq('GENERIC-401')
                    expect(resp.body.details[0].description).to.eq('Unauthorized Access')
                    expect(resp.body.details[0].description_detail).to.eq('Unauthorized Access. Please review your request and try again.')
                })
        })
  })

})
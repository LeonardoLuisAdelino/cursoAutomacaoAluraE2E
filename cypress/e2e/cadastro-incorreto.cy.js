describe('página de cadastro', () => {

  beforeEach(()=>{
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
      cy.get('.initial > img').should('be.visible')
      cy.get('.button').should('be.visible')
      cy.get('.initial > p').should('be.visible')
      cy.get('[data-test="register-button"]').click();
      cy.get('[data-test="submit-button"]').click();
  })

    it('DEve preencher os campos do formulario incorretamente para cadastrar um novo usuário', () => {
      cy.contains('É necessário informar um endereço de email').should('be.visible')
      cy.contains('Crie uma senha').should('be.visible')
      cy.contains('Repita a senha criada acima').should('be.visible')
      
    })
})
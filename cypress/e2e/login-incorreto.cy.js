describe('página de login', ()=>{
    
    beforeEach(()=>{
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="input-loginEmail"]').type('ana.com.br');
        cy.get('[data-test="input-loginPassword"]').type('senha');
        cy.get('[data-test="submit-button"]').click();
    })

    it('Deve preencher os campos do login incorretamente e autenticar o usuario da página', ()=>{
        
        cy.contains('Por favor, verifique o email digitado').should('be.visible')
        cy.contains('A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres').should('be.visible')
    })

})
describe('página de login', ()=>{
    
    beforeEach(()=>{
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('[data-test="login-button"]').click();
    })

    it('Deve preencher os campos do login corretamente e autenticar o usuario da página', ()=>{
        cy.get('[data-test="input-loginEmail"]').type('ana@elamil.com');
        cy.get('[data-test="input-loginPassword"]').type('Senha@123');
        cy.get('[data-test="submit-button"]').click();
    })

})
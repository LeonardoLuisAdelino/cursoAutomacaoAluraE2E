describe('página de cadastro', () => {
  beforeEach(()=>{
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('.initial > img').should('be.visible')
    cy.get('[data-test="register-button"]').click();
})
  it('DEve preencher os campos do formulario corretamente para cadastrar um novo usuário', () => {
    cy.get('[data-test="input-name').type('Ana de Jesus');
    cy.get('[data-test="input-email"]').type('ana@email.com');
    cy.get('[for="pass-create"]').type('Senha123');
    cy.get('[for="pass-confirm"]').type('Senha123');
    cy.get('[data-test="submit-button"]').click();   
  })
  /*
  it('deve carregar a página corretamente e clicar no botão ‘Ver pets disponíveis para adoção”', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('.button').click()     
   
});

  it("entrar na adopet e testar o botao reader", () =>{
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('.header__home').click();
  })
  it('entrar no login do adopet', () =>{
    cy.visit('https://adopet-frontend-cypress.vercel.app/login')
  })
  it('entrar no login do adopet', () =>{
    cy.visit('https://adopet-frontend-cypress.vercel.app/home')
  })
  it('entrar no login do adopet', () =>{
    cy.visit('https://adopet-frontend-cypress.vercel.app/home')
    cy.get('.header__message').click();
  })
  */
})